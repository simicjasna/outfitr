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
    await db.collection("clothes").deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.error("Error deleting clothing item:", error);
  }
}

function pickRandom(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function findItemForCategory(clothes, category, filters) {
  let matchingItems = clothes.filter((item) => {
    return item.category === category && item.style === filters.style;
  });

  if (matchingItems.length === 0) {
    return null;
  }

  if (filters.color) {
    const colorMatches = matchingItems.filter(
      (item) => item.color === filters.color,
    );

    if (colorMatches.length > 0) {
      return pickRandom(colorMatches);
    }
  }

  return pickRandom(matchingItems);
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

    const shirt = findItemForCategory(clothes, "Shirt", filters);
    const bottom = findItemForCategory(clothes, "Hose", filters);
    const shoes = findItemForCategory(clothes, "Schuhe", filters);

    if (!shirt || !bottom || !shoes) {
      return {
        error: true,
        message: `Für den Stil ${filters.style} sind noch nicht genügend passende Kleidungsstücke vorhanden. Du brauchst mindestens ein Shirt, eine Hose und Schuhe.`,
      };
    }

    const outfitName = filters.color
      ? `${filters.style} ${filters.color} Outfit`
      : `${filters.style} Outfit`;

    return {
      error: false,
      outfit: {
        name: outfitName,
        color: filters.color,
        style: filters.style,
        items: [shirt, bottom, shoes],
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

  await outfits.insertOne(outfit);

  return {
    success: true,
  };
}

async function deleteOutfit(id) {
  try {
    await db.collection("outfits").deleteOne({ _id: new ObjectId(id) });
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
