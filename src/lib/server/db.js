import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);
await client.connect();

const db = client.db("outfitr");

async function getClothes(filters = {}) {
  let clothes = [];

  try {
    const query = {};

    if (filters.category) {
      query.category = filters.category;
    }

    if (filters.color) {
      query.color = filters.color;
    }

    if (filters.style) {
      query.style = filters.style;
    }

    clothes = await db.collection("clothes").find(query).toArray();

    clothes.forEach((item) => {
      item._id = item._id.toString();
    });
  } catch (error) {
    console.error("Error loading clothes:", error);
  }

  return clothes;
}

async function getClothingItem(id) {
  let item = null;

  try {
    item = await db.collection("clothes").findOne({ _id: new ObjectId(id) });

    if (item) {
      item._id = item._id.toString();
    }
  } catch (error) {
    console.error("Error loading clothing item:", error);
  }

  return item;
}

async function createClothingItem(item) {
  try {
    const newItem = {
      name: item.name,
      category: item.category,
      color: item.color,
      style: item.style,
      image: item.image || "/images/placeholder.png",
    };

    await db.collection("clothes").insertOne(newItem);
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

async function getOutfits() {
  let outfits = [];

  try {
    outfits = await db.collection("outfits").find({}).toArray();

    outfits.forEach((outfit) => {
      outfit._id = outfit._id.toString();
    });
  } catch (error) {
    console.error("Error loading outfits:", error);
  }

  return outfits;
}

async function createOutfit(outfit) {
  try {
    await db.collection("outfits").insertOne(outfit);
  } catch (error) {
    console.error("Error creating outfit:", error);
  }
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
  getClothingItem,
  createClothingItem,
  deleteClothingItem,
  getOutfits,
  createOutfit,
  deleteOutfit,
};
