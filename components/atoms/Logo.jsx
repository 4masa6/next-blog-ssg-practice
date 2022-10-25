import styles from './styles/logo.module.css'

import Link from "next/link"

export const Logo = ({ boxOn = false }) => {
  // next/linkコンポーネントを使用し、aタグをラップ
  // リンク先は<Link>のhref属性に指定する
  // 外部サイトへのリンクは通常の<a href="">で指定する
  return (
    <Link href="/">
      <a className={boxOn ? styles.box : styles.basic}>SSG Blog</a>
    </Link>
  )
}
