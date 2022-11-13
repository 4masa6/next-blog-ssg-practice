import { getServerSideSitemap } from 'next-sitemap'
import { getAllSlugs, getAllCategories } from '../lib/api'
import { siteMeta } from '../lib/constants'

export default function Sitemap() {}

export async function getServerSideProps(context) {
  const posts = await getAllSlugs()
  const postFields = posts.map((post) => {
    return {
      loc: `${siteMeta.siteUrl}/${post.slug}`,
    }
  })

  const categories = await getAllCategories()
  const categoryFields = categories.map((category) => {
    return {
      loc: `${siteMeta.siteUrl}/blog/category/${category.slug}`,
    }
  })

  const allFields = [...postFields, ...categoryFields]

  // getServerSidePropsのcontextと各ページの情報を入れた配列を渡す
  return await getServerSideSitemap(context, allFields)
}
