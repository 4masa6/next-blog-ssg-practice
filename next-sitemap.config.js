/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://next-blog-ssg-practice.vercel.app/',
  exclude: '/server-sitemap.xml', // server-sitemap.xmlを静的なサイトマップに含めない
  robotsTxtOptions: {
    // server-sitemap.xmlをサイトマップのインデックスに追加するように指定
    additionalSitemaps: [
      'https://next-blog-ssg-practice.vercel.app/server-sitemap.xml',
    ],
  },
  // SSGを利用している場合は、サイトマップをoutディレクトリに出力する
  outDir: './out',
}

module.exports = config
