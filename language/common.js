import config from "../next.config";

export const i18nCommonConfig = {
  i18n: config.i18n,
  serializeConfig: false,
  load: "currentOnly",
  cleanCode: true,
  partialBundledLanguages: true,
};
