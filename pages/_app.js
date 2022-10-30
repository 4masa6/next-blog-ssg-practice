import { Layout } from "../components/layout/Layout";
import "../styles/globals.css";

// FontAwesomeの設定
import "@fortawesome/fontawesome-svg-core/styles.css"; // FontAwesomeのCSSをグローバルスタイルとしてサイト全体に適用
import { config } from "@fortawesome/fontawesome-svg-core"; // FontAwesomeのSVGコアが個別にCSSを適用するのを無効化
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
