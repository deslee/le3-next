import React from 'react';
import Head from 'next/head';
import Header from './header/Header';
import Footer from './footer/Footer';

export const GlobalStyles = () => <div>
    <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
    </Head>
    <style global jsx>{`
        html, body {
            margin: 0;
            padding: 0;
        }
        body {
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
        }
    `}</style>
</div>

class Layout extends React.Component {
    render() {
        const {
            children,
            title = 'Hello world'
        } = this.props;

        return (
            <div className="layout">
                <Head>
                    <title>{title}</title>
                </Head>

                <GlobalStyles />

                <style jsx>{`
                    .layout {
                        height: 100vh;
                        width: 100vw;
                        overflow-y: scroll;
                        overflow-x: hidden;
                        padding: 1rem;
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                    }

                    main {
                        max-width: 48rem;
                        margin: 0 auto;
                        color: hsla(0,0%,0%,0.8);
                        flex: 1;
                    }
                `}</style>

                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        )
    }
}

export default Layout;