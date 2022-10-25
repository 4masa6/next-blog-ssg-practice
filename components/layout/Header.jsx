import { Logo } from "../atoms/Logo"
import { Nav } from "../atoms/Nav"

export const Header = () => {
  return (
    <header>
      <Logo boxOn />
      <Nav />
    </header>
  )
}
