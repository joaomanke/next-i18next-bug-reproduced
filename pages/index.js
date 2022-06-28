import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getServerSideTranslations } from "../language/server";

const Homepage = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <main>
        <Header heading={t("h1")} title={t("title")} />
        <div>
          <Link href="/" locale={router.locale === "en" ? "de" : "en"}>
            <button>{t("change-locale")}</button>
          </Link>
          <Link href="/second-page">
            <button type="button">{t("to-second-page")}</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  const translations = await getServerSideTranslations(locale, ["footer"]);

  const common = translations._nextI18Next.initialI18nStore[locale].footer;
  const exists = !!common.description;

  if (exists) {
    console.log(locale, "home", "Good");
  } else {
    console.log(
      locale,
      "home",
      "Bad",
      translations._nextI18Next.initialI18nStore
    );
  }

  return {
    props: {
      ...translations,
    },
  };
};

export default Homepage;
