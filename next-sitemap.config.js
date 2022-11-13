/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://next-blog-ssg-practice.vercel.app/',
  // SSGを利用している場合は、サイトマップをoutディレクトリに出力する
  outDir: './out',
}

module.exports = config
