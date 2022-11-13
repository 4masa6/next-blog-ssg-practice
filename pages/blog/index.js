import { getAllPosts } from '../../lib/api'
import { eyecatchLocal } from '../../lib/constants'

import { Meta } from '../../components/layout/Meta'
import { Container } from '../../components/layout/Container'
import { Hero } from '../../components/page-parts/Hero'
import { Posts } from '../../components/page-parts/Posts'

import { getPlaiceholder } from 'plaiceholder'

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

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      posts: posts,
    },
  }
}
