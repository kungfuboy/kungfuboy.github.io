module.exports = {
    title: '鹰春秋',
    description: '前端很大，所以叫大前端',
    dest: 'post',
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }]
    ],
    serviceWorker: true,
    editLinks: false,
    themeConfig: {
        docsDir: 'docs',
        nav: [
            {
                text: '武术',
                link: '/kungfu/',
            },
            {
                text: '随笔',
                link: '/suibi/',
            }
        ],
        sidebar: {
            '/kungfu/': [
                {
                    title: '武术',
                    collapsable: false,
                    children: [
                        '',
                        'taiji-history'
                    ]
                }
            ],
            '/suibi/': [
                {
                    title: '随笔',
                    collapsable: false,
                    children: [
                        '',
                        'zhangsanfeng-guoxiang'
                    ]
                }
            ]
        }
    }
}