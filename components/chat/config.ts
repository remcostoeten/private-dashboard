const urls = {
  test: "https://status.remcostoeten.com/",
  whatsapp: "https://web.whatsapp.com/",
};

export type Urls = typeof urls;

const ITTERATION_DURATION = 5500;
const RESULTS_PER_PAGE = 10;
const CHROME_PROFILE_PATH = "../../../../../chromeprofile";
const SCRAPE_URL = urls.test;
const PATH_TO_WRITE = "./statusData.ts";
const NAME_TO_SCRAPE = process.env.NAME_TO_SCRAPE;

export {
  NAME_TO_SCRAPE,
  ITTERATION_DURATION,
  RESULTS_PER_PAGE,
  CHROME_PROFILE_PATH,
  SCRAPE_URL,
  PATH_TO_WRITE,
  urls,
};
