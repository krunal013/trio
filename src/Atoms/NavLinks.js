import React from 'react'
import Link from 'next/link'

const NavLinks = ({ label, href, isActive, onClick, className = "" }) => {
  return (
    <Link
      href={href}
      data-label={label}
      onClick={onClick}
      className={` whitespace-nowrap
        relative z-10 font-bold py-3 px-5 rounded-full transition-all duration-300 cursor-pointer
        ${isActive ? "text-black" : "text-zinc-800 hover:text-zinc-800"}
        ${className} 
      `}
    >
      {label}
    </Link>
  )
}

export default NavLinks
