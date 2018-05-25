import Layout from '../components/Layout';
import Header from '../components/header/Header';

export default () => <Layout>
    <style jsx>{`
    .message {
        font-size: 3rem;
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    `}</style>
    <div className="message">
        Under Construction
    </div>
</Layout>