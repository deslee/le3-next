module.exports = () => {
    return {
        exportPathMap: defaultPathMap => ({
            '/': { page: '/' },
            '/projects': { page: '/projects' }
        })
    };
}