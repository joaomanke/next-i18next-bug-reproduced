import Link from "next/link";

import { useTranslation } from "next-i18next";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getServerSideTranslations } from "../language/server";

const SecondPage = () => {
  const { t } = useTranslation("second-page");

  return (
    <>
      <main>
        <Header heading={t("h1")} title={t("title")} />
        <Link href="/">
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  const translations = await getServerSideTranslations(locale, [
    "second-page",
    "footer",
  ]);

  const common = translations._nextI18Next.initialI18nStore[locale].footer;
  const exists = !!common.description;

  if (exists) {
    console.log(locale, "second-page", "Good");
  } else {
    console.log(
      locale,
      "second-page",
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

export default SecondPage;
