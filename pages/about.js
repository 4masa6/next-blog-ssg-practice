import { Container } from "../components/Layout/Container";
import { Hero } from "../components/layout/Hero";
import { PostBody } from "../components/layout/PostBody";

export default function About() {
  return (
    <Container>
      <Hero title="About" subtitle="About develop activities" />

      <PostBody>
        <p>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <h2>タイトルタイトルタイトル</h2>
        <p>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <p>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <h3>タイトルタイトル</h3>
        <p>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </PostBody>
    </Container>
  );
}
