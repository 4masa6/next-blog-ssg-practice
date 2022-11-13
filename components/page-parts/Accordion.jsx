import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './styles/accordion.module.css'

import { useState, useRef } from 'react'

export const Accordion = ({ heading, children }) => {
  const [textIsOpen, setTextIsOpen] = useState(false)

  const toggleText = () => {
    setTextIsOpen((prev) => !prev)
  }

  // ref属性を使っってdiv要素に紐付ける
  const refText = useRef(null)

  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </h3>

      {/* div要素のDOMノードがrefText.currentに取得される。scrollHeightを使用して要素の高さを取得できる。取得したheightはCSS変数を使ってmodule.cssに渡す */}
      {/* refTextオブジェクトを宣言しただけで、div要素のDOMノードが取得されていない。DOMノードが取得されるのは要素のマウントが済んだタイミングだが、*/}
      {/* ページを読み込んで最初にrefText.current.scrollHeightが処理されるのはマウントの過程にあり、エラーとなる。 */}
      {/* refText.currentがnullのときは高さを0pxに指定する */}
      <div
       className={styles.text}
       ref={refText}
       style={{'--text-height': refText.current ? `${refText.current.scrollHeight}px` : '0px'}} 
      >
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  )
}
