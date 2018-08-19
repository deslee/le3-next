import React from 'react'
import styled from 'styled-components'

const Landing = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fefefe;
`

const Title = styled.h1`
    font-weight: 100;
`


export default () => <Landing>
        <Title>My page</Title>
</Landing>