import { Logo } from '../atoms/Logo'
import styles from './styles/footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.flexContainer}>
        <Logo />
        [ソーシャルアイコン]
      </div>
    </footer>
  )
}
