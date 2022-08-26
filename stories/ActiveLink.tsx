import { useRouter } from 'next/router'
import React from 'react'
import { IActiveLink } from '../common/index'



function ActiveLink({ children, href }: IActiveLink) : React.ReactNode {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }

  const handleClick = (e : React.SyntheticEvent) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink