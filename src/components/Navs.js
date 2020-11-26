import React from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
  {to: '/', text: 'Home'},
  {to: '/starred', text: 'Starred'},
  {to: '/q', text: 'Home'},
  {to: '/w', text: 'Home'},
  {to: '/e', text: 'Home'},
]

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => 
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Navs
