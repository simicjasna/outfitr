import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);
await client.connect();

const db = client.db("outfitr");

function convertId(document) {
  if (document?._id) {
    document._id = document._id.toString();
  }

  return document;
}

async function getClothes(filters = {}) {
  let clothes = [];

  try {
    const query = {};

    if (filters.category) query.category = filters.category;
    if (filters.color) query.color = filters.color;
    if (filters.style) query.style = filters.style;

    clothes = await db.collection("clothes").find(query).toArray();
    clothes.forEach(convertId);
  } catch (error) {
    console.error("Error loading clothes:", error);
  }

  return clothes;
}

async function createClothingItem(item) {
  try {
    await db.collection("clothes").insertOne({
      name: item.name,
      category: item.category,
      color: item.color,
      style: item.style,
      image: item.image || "/images/placeholder.png",
    });
  } catch (error) {
    console.error("Error creating clothing item:", error);
  }
}

async function deleteClothingItem(id) {
  try {
    await db.collection("clothes").deleteOne({
      _id: new ObjectId(id),
    });
  } catch (error) {
    console.error("Error deleting clothing item:", error);
  }
}

function pickRandom(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function getColorHarmonyScore(colors, preferredColor) {
  let score = 0;

  const uniqueColors = [...new Set(colors.filter(Boolean))];

  if (preferredColor && colors.includes(preferredColor)) {
    score += 4;
  }

  if (uniqueColors.length === 1) {
    score += 4;
  }

  if (uniqueColors.length === 2) {
    score += 3;
  }

  if (uniqueColors.includes("Schwarz")) {
    score += 2;
  }

  if (uniqueColors.includes("Weiss")) {
    score += 2;
  }

  if (uniqueColors.includes("Beige") || uniqueColors.includes("Braun")) {
    score += 2;
  }

  if (uniqueColors.length > 3) {
    score -= 2;
  }

  return score;
}

function scoreCombination(combination, filters) {
  let score = 0;

  for (const item of combination) {
    if (item.style === filters.style) {
      score += 5;
    }

    if (filters.color && item.color === filters.color) {
      score += 4;
    }
  }

  const colors = combination.map((item) => item.color);
  score += getColorHarmonyScore(colors, filters.color);

  return score;
}

function getCombinations(shirts, pants, shoes) {
  const combinations = [];

  for (const shirt of shirts) {
    for (const pant of pants) {
      for (const shoe of shoes) {
        combinations.push([shirt, pant, shoe]);
      }
    }
  }

  return combinations;
}

async function generateOutfit(filters = {}) {
  try {
    if (!filters.style) {
      return {
        error: true,
        message: "Bitte wähle zuerst einen Stil aus.",
      };
    }

    const clothes = await getClothes();

    const matchingClothes = clothes.filter((item) => {
      return item.style === filters.style;
    });

    const shirts = matchingClothes.filter((item) => item.category === "Shirt");
    const pants = matchingClothes.filter((item) => item.category === "Hose");
    const shoes = matchingClothes.filter((item) => item.category === "Schuhe");

    if (shirts.length === 0 || pants.length === 0 || shoes.length === 0) {
      return {
        error: true,
        message: `Für den Stil ${filters.style} sind noch nicht genügend passende Kleidungsstücke vorhanden. Du brauchst mindestens ein Shirt, eine Hose und Schuhe.`,
      };
    }

    const combinations = getCombinations(shirts, pants, shoes);

    let bestScore = -1;
    let bestCombinations = [];

    for (const combination of combinations) {
      const score = scoreCombination(combination, filters);

      if (score > bestScore) {
        bestScore = score;
        bestCombinations = [combination];
      } else if (score === bestScore) {
        bestCombinations.push(combination);
      }
    }

    const selectedCombination = pickRandom(bestCombinations);

    const outfitName = filters.color
      ? `${filters.style} ${filters.color} Outfit`
      : `${filters.style} Outfit`;

    return {
      error: false,
      outfit: {
        name: outfitName,
        color: filters.color,
        style: filters.style,
        score: bestScore,
        items: selectedCombination,
      },
    };
  } catch (error) {
    console.error("Error generating outfit:", error);

    return {
      error: true,
      message: "Beim Generieren des Outfits ist ein Fehler aufgetreten.",
    };
  }
}

async function getOutfits() {
  let outfits = [];

  try {
    outfits = await db.collection("outfits").find({}).toArray();
    outfits.forEach(convertId);
  } catch (error) {
    console.error("Error loading outfits:", error);
  }

  return outfits;
}

async function createOutfit(outfit) {
  try {
    const outfits = db.collection("outfits");

    const existingOutfits = await outfits.find({}).toArray();

    const newIds = outfit.items.map((item) => item._id.toString()).sort();

    for (const existing of existingOutfits) {
      const existingIds = existing.items
        .map((item) => item._id.toString())
        .sort();

      const isSame = JSON.stringify(existingIds) === JSON.stringify(newIds);

      if (isSame) {
        return {
          alreadyExists: true,
          existingName: existing.name,
        };
      }
    }

    await outfits.insertOne({
      name: outfit.name,
      color: outfit.color,
      style: outfit.style,
      score: outfit.score,
      items: outfit.items,
      createdAt: new Date(),
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error creating outfit:", error);

    return {
      success: false,
    };
  }
}

async function deleteOutfit(id) {
  try {
    await db.collection("outfits").deleteOne({
      _id: new ObjectId(id),
    });
  } catch (error) {
    console.error("Error deleting outfit:", error);
  }
}

export default {
  getClothes,
  createClothingItem,
  deleteClothingItem,
  generateOutfit,
  getOutfits,
  createOutfit,
  deleteOutfit,
};
