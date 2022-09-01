import scrape from "website-scraper";
import PuppeteerPlugin from "website-scraper-puppeteer";
import SaveToExistingDirectoryPlugin from "website-scraper-existing-directory";
import cherio from "cherio";
import fs from "fs";

export const scraper = async (originalUrl, depth) => {
  const result = await scrape({
    urls: [originalUrl],
    directory: "./data",
    recursive: !!depth,
    maxRecursiveDepth: depth,
    sources: [{ selector: "img", attr: "src" }],
    plugins: [
      new SaveToExistingDirectoryPlugin(),
      new PuppeteerPlugin({
        launchOptions: { headless: true },
        blockNavigation: true,
      }),
    ],
  });

  const resultsStructure = { results: [] };

  result.forEach((resource) => {
    const $ = cherio.load(resource.text);

    $("img").each((index, image) => {
      let img = $(image).attr("src");

      resultsStructure.results.push({
        imageUrl: img,
        sourceUrl: resource.url,
        depth: resource.depth,
      });
    });
  });

  fs.writeFileSync(
    "src/utils/data/results.json",
    JSON.stringify(resultsStructure)
  );
};
