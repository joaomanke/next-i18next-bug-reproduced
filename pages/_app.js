import { appWithTranslation } from "next-i18next";

import { i18nClientConfig } from "../language/client";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp, i18nClientConfig);
