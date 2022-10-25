import { Logo } from "../atoms/Logo"
import { Nav } from "../atoms/Nav"
import { Container } from "./Container"
import styles from './styles/header.module.css'

export const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}
