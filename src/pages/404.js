import React from 'react'
import styled from 'styled-components'

import H2 from '../components/H2'

const Wrapper = styled.div`
  text-align: center;
`

function NotFound() {
  return (
    <Wrapper>
      <H2>NOT FOUND</H2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Wrapper>
  )
}

export default NotFound
