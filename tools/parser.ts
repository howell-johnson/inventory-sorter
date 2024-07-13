import type { Plugin } from "vite";
import { readFile, writeFile } from "fs/promises";
import { existsSync, mkdirSync } from "fs";

export function parserPlugin(): Plugin {
  return {
    name: "parser-plugin",
    buildStart() {
      parseCsv();
    },
    handleHotUpdate(ctx) {
      if (ctx.file.includes("floor_plans-available_homes.csv")) {
        parseCsv(true);
      }
    },
  };
}

async function parseCsv(hotReload = false) {
  if (hotReload) {
    process.stdout.write(
      "\x1b[93mChanges detected in floor_plans-available_homes.csv\nRebuilding...\n\x1b[0m"
    );
  } else {
    process.stdout.write(
      "\x1b[93mParsing floor_plans-available_homes.csv\n\x1b[0m"
    );
  }
  const csvPath = "./floor_plans-available_homes.csv";
  const csv = await readFile(csvPath, { encoding: "utf-8" });
  const rows = csv.split("\n");
  const data = rows.slice(1);
  const homes = data.map((row) => {
    // # of Beds,# of Baths,Factory,Single/Double,House,Square Footage,Optional Bed,In Stock,Possible Beds,Link to Home
    const [
      beds,
      baths,
      factory,
      singleDouble,
      house,
      sqft,
      optionalBed,
      inStock,
      possibleBeds,
      link,
    ] = row.split(",");
    return {
      beds,
      baths,
      factory,
      singleDouble,
      house,
      sqft,
      optionalBed,
      inStock,
      possibleBeds,
      link,
    };
  });

  if (!existsSync("./src/data")) {
    mkdirSync("./src/data");
  }
  await writeFile(
    "./src/data/homes.json",
    JSON.stringify(homes, null, 2),
    "utf-8"
  );
}
