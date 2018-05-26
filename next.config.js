var highlight = require('remark-highlight.js');

module.exports = () => {
    return {
        exportPathMap: defaultPathMap => ({
            '/': {
                page: '/'
            },
            '/projects': {
                page: '/projects'
            }
        }),
        webpack: (config, {
            buildId,
            dev,
            isServer,
            defaultLoaders
        }) => {
            // Perform customizations to webpack config

            // Important: return the modified config
            config.module.rules.push({
                test: /\.md$/,
                use: [
                    defaultLoaders.babel,
                    {
                        loader: '@mdx-js/loader',
                        options: {
                            mdPlugins: [highlight]
                        }
                    }
                ]
            })
            return config
        },
    };
}