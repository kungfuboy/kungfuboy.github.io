module.exports = {
    title: 'Dark Eagle',
    description: 'We drink and we sing when our fighting is done.',
    dest: 'dist/vuepress',
    serviceWorker: true,
    themeConfig: {
        repo: 'kungfuboy/kungfuboy.github.io',
        editLinks: false,
        docsDir: 'docs',
        nav: [
            {
                text: 'Kungfu',
                link: '/kungfu/',
            },
            {
                text: 'Reading',
                link: '/read/',
            }
        ],
        sidebar: {
            '/read/': [
                {
                    title: 'Reading',
                    collapsable: false,
                    children: [
                        'read-day'
                    ]
                }
            ],
            '/kungfu/': [
                {
                    title: 'Kungfu',
                    collapsable: false,
                    children: [
                        'taiji-history'
                    ]
                }
            ]
        }
    }
}