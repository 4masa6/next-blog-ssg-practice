import { Meta } from "../components/layout/Meta";
import { Contact } from "../components/layout/Contact";
import { Container } from "../components/Layout/Container";
import { Hero } from "../components/layout/Hero";
import { PostBody } from "../components/layout/PostBody";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "../components/layout/TwoColumn";
import Image from "next/image";
import eyecatch from "../img/about.jpg";

export default function About() {
  return (
    <Container>
      <Meta pageTitle="about" pageDesc="practice next.js ssg" />
      <Hero title="About" subtitle="About develop activities" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          size="{min-width: 1152px;} 1152px, 100vw" // 画面幅が1152px以上では1152px、それ以下では100vwが適用される
          priority // LCP対策で優先的に読ませる
          placeholder="blur" // ブラー画像を表示する
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
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
            <h3>タイトルタイトル</h3>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <h3>タイトルタイトル</h3>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <h3>タイトルタイトル</h3>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <h3>タイトルタイトル</h3>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
