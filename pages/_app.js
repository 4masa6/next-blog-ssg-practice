import { Layout } from '../components/layout/Layout'
import '../styles/globals.css'

// FontAwesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css' // FontAwesomeのCSSをグローバルスタイルとしてサイト全体に適用
import { config } from '@fortawesome/fontawesome-svg-core' // FontAwesomeのSVGコアが個別にCSSを適用するのを無効化
config.autoAddCss = false

import Script from 'next/script'
import * as gtag from '../lib/gtag'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  // ページの遷移をGAに送信するための処理
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      // urlはイベントが発生した際に渡される
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      // useEffectの第一引数の戻り値に関数を指定すると、コンポーネントがアンマウントされる際に実行したい処理が実行される（クリーンアップ）
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_MEASUREMENT_ID}');
          `,
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
