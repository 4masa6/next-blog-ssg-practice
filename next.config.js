/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // アイキャッチ画像は外部サイトの画像のため、next/imageで扱えるようにドメインを指定する
  images: {
    domains: ['images.microcms-assets.io'],
  },
}

module.exports = nextConfig
