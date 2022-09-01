import scrape from "website-scraper";
import PuppeteerPlugin from "website-scraper-puppeteer";

// with async/await
// const result = await scrape(options);

// with promise
// export const scraper = () => {
//   const options = {
//     urls: ["https://angular.io/"],
//     directory: "./data",
//   };

//   scrape(options).then((result) => {
//     console.log(result);
//   });
// };

// import scrape from "website-scraper";

// export const initScraper = () => {
//   console.log("boom");
// };

export const scraper = async () => {
  const result = await scrape({
    urls: ["https://angular.io/"],
    directory: "./data",
    plugins: [
      new PuppeteerPlugin({
        launchOptions: { headless: true },
        scrollToBottom: { timeout: 4000, viewportN: 10 },
        blockNavigation: true,
      }),
    ],
  });

  console.log(result);
};
