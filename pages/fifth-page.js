import Link from "next/link";

import { useTranslation } from "next-i18next";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getServerSideTranslations } from "../language/server";

const FifthPage = () => {
  const { t } = useTranslation("fifth-page");

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
    "fifth-page",
    "footer",
  ]);

  const common = translations._nextI18Next.initialI18nStore[locale].footer;
  const exists = !!common.description;

  if (exists) {
    console.log(locale, "fifth-page", "Good");
  } else {
    console.log(
      locale,
      "fifth-page",
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

export default FifthPage;
