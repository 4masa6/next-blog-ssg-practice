// Documentコンポーネントを編集したい場合は
// pages/_document.js でカスタムDocumentコンポーネントを作成してカスタマイズする

import { Html, Head, Main, NextScript } from "next/document";
import { siteMeta } from "../lib/constants";

const { siteLang } = siteMeta;

export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
