import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { URL } from '@/common/constants/url'

const Title: React.FC = styled.h1`
  font-size: 25px;
`

const Logo: React.FC = () => {
  return (
    <div className="header-logo">
      <Link href={URL.HOME}>
        <Title>
          Isystk&apos;s Frontend Sample
        </Title>
      </Link>
    </div>
  )
}

export default Logo
