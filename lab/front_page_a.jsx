import React, { Component } from 'react'
import AppContainer from '../common/AppContainer'
import styled from 'styled-components'
import Centered from '../common/Centered';
import Link from 'next/link';

const Boxes = styled.div`
    width: 90%;
    max-width: 96rem;
    padding: 1rem;
    display: block;
    @media (min-width: 1024px) {
        display: flex;
    }
`

const Box = styled.div`
    flex: 3;
    background: lightgrey;
    padding: 1rem;
    @media (min-width: 1024px) {
        margin: 0 1rem;
        height: 24rem;
        overflow: auto;
        :first-child, :last-child {
            margin-left: 0;
            margin-right: 0;
            flex: 1;
        }
    }
`

const Title = styled.h1`
    font-weight: 100;
    font-size: 1rem;
    @media (min-width: 1024px) {
        font-size: 1.3rem;
    }
`

const Nav = styled.nav`
    a {
        display: block;
    }
`

export default class extends Component {
    render() {
        return (
            <AppContainer>
                <Boxes>
                    <Box>
                        <Centered>
                            <Title>Desmond Lee</Title>
                            <Nav>
                                <Link href="">
                                    <a href="">Test</a>
                                </Link>
                                <Link href="">
                                    <a href="">Test</a>
                                </Link>
                            </Nav>
                        </Centered>
                    </Box>
                    <Box>
                        <p>A ullamcorper vestibulum himenaeos sociis et etiam tortor neque interdum mi magna interdum porta risus vestibulum odio mus fames adipiscing turpis parturient cras tristique. Sodales purus parturient pretium mattis dui rutrum porttitor nibh torquent sit suscipit consectetur ante vestibulum per. Feugiat habitasse nisl nisi eu condimentum montes hendrerit parturient suspendisse consectetur ultricies porta lobortis purus. Eros at accumsan potenti platea ac eget justo quam ultricies habitasse parturient molestie eros parturient arcu adipiscing eget sociosqu. Accumsan donec habitant condimentum fringilla cras consectetur porttitor scelerisque cubilia suscipit quam pretium scelerisque dui suspendisse vestibulum nostra amet. Velit scelerisque eu eleifend aptent sit posuere suspendisse sit parturient dictumst morbi dignissim adipiscing urna dis vehicula.</p>
                        <p>Diam justo purus venenatis adipiscing egestas adipiscing a scelerisque ullamcorper scelerisque dignissim ullamcorper luctus a leo ad enim purus sapien mauris senectus fusce convallis. Condimentum aliquam cras suspendisse facilisis a vestibulum primis leo curae a a erat penatibus dignissim ac varius a nisi vestibulum penatibus fames nam. Quam fringilla accumsan cursus laoreet elementum consequat a non blandit a a et ullamcorper a rhoncus ad nibh scelerisque auctor nunc ipsum a.</p>
                        <p>Pharetra ac a litora turpis a eros risus gravida vestibulum lacus tristique dignissim a donec integer nibh in a a bibendum lectus litora eleifend consectetur parturient enim mattis consectetur. Nisl euismod condimentum a eu habitant vestibulum aptent potenti sit adipiscing fusce parturient senectus scelerisque dui nec tristique facilisi parturient id vestibulum dictumst neque eleifend consequat adipiscing ridiculus a. A facilisi viverra ad eros parturient mus a habitant primis scelerisque adipiscing lacus consectetur nulla dui netus odio a parturient tincidunt consectetur. Justo donec nibh quis ullamcorper a scelerisque proin est vivamus duis himenaeos nullam a lectus a vitae est accumsan augue.</p>
                        <p>Metus id sem non nunc mattis himenaeos sem ligula senectus donec condimentum facilisi scelerisque faucibus.</p>
                    </Box>
                    <Box>
                        <Centered>
                            <img src="https://placehold.it/100x100" />
                            go here
                        </Centered>
                    </Box>
                </Boxes>
            </AppContainer>
        );
    }
}