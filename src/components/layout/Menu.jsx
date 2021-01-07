import React from 'react'
import './Menu.css'

import {Link} from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    {/* O componente Link gera uma tag a */}
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/param/01">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/">Param #02</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu