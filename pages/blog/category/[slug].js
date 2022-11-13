import { Meta } from '../../../components/layout/Meta'
import { Container } from '../../../components/layout/Container'
import { PostHeader } from '../../../components/page-parts/PostHeader'
import { Posts } from '../../../components/page-parts/Posts'
import { getAllCategories, getAllPostsByCategory } from '../../../lib/api'
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from '../../../lib/constants' // ローカルの代替アイキャッチ

export default function Category({ name, posts }) {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} subtitle="カテゴリー" />
      <Posts posts={posts} />
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

  const posts = await getAllPostsByCategory(category.id)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      name: category.name,
      posts: posts,
    },
  }
}
