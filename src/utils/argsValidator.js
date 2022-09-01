export const argsValidator = (args) => {
  //check if two args have been passed
  if (args.length !== 2) {
    console.log("url and depth args must be provided");
    return false;
  }

  //trim the keys from the values
  const originalUrl = args[0];
  const depth = args[1];

  const validUrlRegex =
    /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

  //check that the url is valid
  if (!validUrlRegex.test(originalUrl)) {
    return console.log("a valid url must be provided");
  }

  //check that depth has a numeric value
  if (isNaN(parseInt(depth))) {
    return console.log("depth must be a string");
  }

  return { url: originalUrl, depth: depth };
};
