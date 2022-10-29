import Head from 'next/head';

import { siteMeta } from '../../lib/constants'

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export const Meta = ({ pageTitle, pageDesc }) => {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle ;
  const desc = pageDesc ?? siteDesc;

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
    </Head>
  )
}
