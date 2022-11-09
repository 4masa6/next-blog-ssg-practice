import { Container } from '../../../components/layout/Container'
import { PostHeader } from '../../../components/page-parts/PostHeader'
import { getAllCategories } from '../../../lib/api'

export default function Category({ name }) {
  return (
    <Container>
      <PostHeader title={name} subtitle="カテゴリー" />
    </Container>
  )
}

export async function getStaticPaths() {
  const allCategories = await getAllCategories()
  return {
    paths: allCategories.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const categorySlug = context.params.slug // パラメーターで渡したカテゴリー
  const allCategories = await getAllCategories()

  // すべてのカテゴリーから、パラメーターで渡したカテゴリーを取得
  const category = allCategories.find(({ slug }) => slug === categorySlug)

  return {
    props: {
      name: category.name,
    },
  }
}
