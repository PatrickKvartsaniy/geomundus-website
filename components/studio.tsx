import { NextStudio } from "next-sanity/studio";
import config from "../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export const Studio = function () {
  return <NextStudio config={config} />;
};
