import { NavLink } from 'react-router-dom'

import './styles.scss'

export const Navbar = ({handleMenu}) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' onClick={handleMenu}>Início</NavLink>
        </li>
        <li>
          <NavLink to='/projects' onClick={handleMenu}>Projetos</NavLink>
        </li>
        <li>
          <NavLink to='/skills' onClick={handleMenu}>Habilidades</NavLink>
        </li>
        <li>
          <NavLink to='/contact' onClick={handleMenu}>Contato</NavLink>
        </li>
      </ul>
    </nav>
  )
}
