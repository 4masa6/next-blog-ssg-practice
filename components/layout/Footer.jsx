import { Logo } from '../atoms/Logo'
import { Container } from './Container'
import styles from './styles/footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャルアイコン]
        </div>
      </Container>
    </footer>
  )
}
