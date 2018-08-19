import React from 'react'
import styled from 'styled-components'
import Centered from './Centered';

const Landing = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default class extends React.Component {
    render() {
        var { children, ...rest } = this.props;
        
        return (<Landing {...rest}>
            <Centered>
                {children}
            </Centered>
        </Landing>)
    }
}