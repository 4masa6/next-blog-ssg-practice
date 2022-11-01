import { Meta } from '../../components/layout/Meta'
import { Container } from '../../components/Layout/Container'
import { Hero } from '../../components/page-parts/Hero'

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="blog" pageDesc="ブログ記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  )
}
