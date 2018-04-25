module.exports = {
    title: 'Dark Eagle',
    description: 'We drink and we sing when our fighting is done.',
    dest: 'vuepress',
    serviceWorker: true,
    themeConfig: {
        repo: 'kungfuboy/kungfuboy.github.io',
        editLinks: false,
        docsDir: 'docs',
        nav: [
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
            ]
        }
    }
}