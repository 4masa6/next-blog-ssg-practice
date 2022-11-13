import { Logo } from '../atoms/Logo'
import { Social } from '../atoms/Social'
import { Container } from '../layout/Container'
import styles from './styles/footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  )
}
