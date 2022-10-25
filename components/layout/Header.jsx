import { Logo } from "../atoms/Logo"
import { Nav } from "../atoms/Nav"
import styles from './styles/header.module.css'

export const Header = () => {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  )
}
