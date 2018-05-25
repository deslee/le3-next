export default () => <header>
    <div className="title">
        <a href="/">Desmond Lee</a>
    </div>
    <div className="links">
        <ul className="navigation">
            <li>
                <a href="/projects">Projects</a>
            </li>
        </ul>

        <ul className="external">
            <li>
                <a href="https://www.linkedin.com/in/deslee/">Linkedin</a>
            </li>
            <li>
                <a href="https://github.com/deslee">Github</a>
            </li>
        </ul>
    </div>

    <style jsx>{`
    .title {
        font-size: 1.33rem;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style-type: none;
        display: inline-block;
        padding-right: 1rem;
    }
    li:last-child {
        padding-right: 0;
    }

    .links {
        display: flex;
        justify-content: space-between;
    }

    .external {

    }
    `}</style>
</header>