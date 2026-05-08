import db from "$lib/server/db.js";

function getMostUsedStyle(clothes) {
  const styleCounts = {};

  for (const item of clothes) {
    if (!item.style) continue;

    if (!styleCounts[item.style]) {
      styleCounts[item.style] = 0;
    }

    styleCounts[item.style]++;
  }

  const styles = Object.entries(styleCounts);

  if (styles.length === 0) {
    return "Noch keiner";
  }

  styles.sort((a, b) => b[1] - a[1]);

  return styles[0][0] || "Noch keiner";
}

export async function load({ locals }) {
  const userId = locals.user._id;

  const clothes = await db.getClothes({}, userId);
  const outfits = await db.getOutfits(userId);
  const latestOutfits = await db.getLatestOutfits(3, userId);

  const shirts = clothes.filter((item) => item.category === "Shirt").length;
  const pants = clothes.filter((item) => item.category === "Hose").length;
  const shoes = clothes.filter((item) => item.category === "Schuhe").length;

  const possibleCombinations = shirts * pants * shoes;
  const mostUsedStyle = getMostUsedStyle(clothes);

  return {
    stats: {
      clothesCount: clothes.length,
      outfitsCount: outfits.length,
      possibleCombinations,
      shirts,
      pants,
      shoes,
      mostUsedStyle,
    },
    latestOutfits,
  };
}
