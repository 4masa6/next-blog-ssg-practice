import Head from 'next/head';
import { useRouter } from 'next/router';

// サイトに関する情報
import { siteMeta } from '../../lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

// OGP画像
import siteImg from '../../img/ogp.jpg'

export const Meta = ({ pageTitle, pageDesc, pageImg, pageImgWidth, pageImgHeight }) => {
  // ページタイトル
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle ;
  // ページの説明
  const desc = pageDesc ?? siteDesc;
  // ページURL
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`; // router.asPathでページのパス取得しページのURL生成。
  // OGP画像
  const img = pageImg || siteImg.src;
  const imgW = pageImgWidth || siteImg.width;
  const imgH = pageImgHeight || siteImg.height;
  const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}` // startsWith()を使い、httpsから始まっていればそのまま使用し、そうでなければ(ローカル画像の読み込み)siteUrlを付与。

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href="url" />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />

      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />

      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={imgW} />
      <meta property="og:image:height" content={imgH} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
