module.exports = {
    title: 'Eagle',
    description: 'Vue-powered Static Site Generator',
    dest: 'vuepress',
    serviceWorker: true,
    themeConfig: {
        repo: 'kungfuboy/kungfuboy.github.io',
        editLinks: true,
        docsDir: 'docs',
        nav: [
            {
                text: 'Guide',
                link: '/guide/',
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    children: [
                        ''
                    ]
                }
            ]
        }
    }
}