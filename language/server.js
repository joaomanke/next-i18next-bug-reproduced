import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { i18nCommonConfig } from "./common";

export const i18nServerConfig = {
  ...i18nCommonConfig,
  react: { useSuspense: false },
  // reloadOnPrerender: true,
};

const defautlNamespaces = ["common"];

export async function getServerSideTranslations(language, namespaces = []) {
  const allNamespaces = [...defautlNamespaces, ...namespaces];

  return await serverSideTranslations(
    language ?? "en-US",
    allNamespaces,
    i18nServerConfig
  );
}
