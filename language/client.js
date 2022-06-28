import HttpApi from "i18next-http-backend";

import { i18nCommonConfig } from "./common";

export const i18nClientConfig = {
  ...i18nCommonConfig,
  use: [HttpApi],
  backend: {
    loadPath: "./locales/{{lng}}/{{ns}}.json",
  },
  react: { useSuspense: true },
};
