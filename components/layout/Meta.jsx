import Head from 'next/head';
import { useRouter } from 'next/router';

// サイトに関する情報
import { siteMeta } from '../../lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export const Meta = ({ pageTitle, pageDesc }) => {
  // ページタイトル
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle ;
  // ページの説明
  const desc = pageDesc ?? siteDesc;
  // ページURL
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}` // router.asPathでページのパス取得しページのURL生成。

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href="url" />
      <meta property="og:url" content={url} />
    </Head>
  )
}
