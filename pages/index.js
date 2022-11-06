import { getAllPosts } from '../lib/api'
import { eyecatchLocal } from '../lib/constants'

import { Meta } from '../components/layout/Meta'
import { Container } from '../components/Layout/Container'
import { Hero } from '../components/page-parts/Hero'
import { Posts } from '../components/page-parts/Posts'
import { Pagination } from '../components/page-parts/Pagination'
import { getPlaiceholder } from 'plaiceholder'

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero title="SSG Blog" subtitle="ブログサイト" imageOn />

      <Posts posts={posts} />
      <Pagination nextUrl="blog/" nextText="もっと見る" />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)

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
