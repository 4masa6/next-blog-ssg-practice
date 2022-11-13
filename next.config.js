/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    // next/imgageがmicroCMSの imgixAPI を使うよう指定
    loader: 'imgix',
    path: '',
    // アイキャッチ画像は外部サイトの画像のため、next/imageで扱えるようにドメインを指定する
    domains: ['images.microcms-assets.io'],
  },
}

module.exports = nextConfig
