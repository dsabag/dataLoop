import process from "process";
import { argsValidator } from "./src/utils/argsValidator.js";
import { scraper } from "./src/utils/scraper.js";

//get args from CLI
const args = process.argv.slice(2);

//validate args
const validatedArgs = argsValidator(args);

//scrape

scraper(validatedArgs.url, validatedArgs.depth);
