import { Meta } from '../components/layout/Meta'
import { Container } from '../components/Layout/Container'
import { Hero } from '../components/page-parts/Hero'

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="SSG Blog" subtitle="ブログサイト" imageOn />
    </Container>
  )
}
