import { getAllPosts } from '../../lib/api'

import { Meta } from '../../components/layout/Meta'
import { Container } from '../../components/Layout/Container'
import { Hero } from '../../components/page-parts/Hero'
import { Posts } from '../../components/page-parts/Posts'

export default function Blog({ posts }) {
  return (
    <Container>
      <Meta pageTitle="blog" pageDesc="ブログ記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />

      {/* 記事一覧 */}
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts,
    },
  }
}
