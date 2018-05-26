import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../components/Layout';

class Markdown extends React.Component {

    static async getInitialProps({ query, req }) {
        if (!query.page) return 
        
        return { 
        } 
    }

    render() {
        let { router } = this.props;
        
        let Component = require('../content/'+router.query.page+'.md').default;
        
        return <Layout>
            <div>
                <div>
                    <Component />
                </div>
            </div>
            </Layout>
    }
}

export default withRouter(Markdown)