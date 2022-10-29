import { Meta } from "../../components/layout/Meta";
import { Container } from "../../components/Layout/Container";
import { Hero } from "../../components/layout/Hero";

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="blog" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  );
}
