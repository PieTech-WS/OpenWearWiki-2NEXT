import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "OpenWearWiki tNEXT",
    description: "Open Wearables Wiki for Everyone",
    srcDir: './src',
    lang: 'zh-CN',
    head: [
        [
            'link',
            {
                href: 'https://cdn-font.hyperos.mi.com/font/css?family=MiSans:100,200,300,400,500,600:Chinese_Simplify,Latin&display=swap',
                rel: 'stylesheet'
            }
        ],
        [
            'script',
            {},
            '(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "q7mkd2datb");'
        ],
        ['link',
            {
                rel: 'icon',
                href: '/logo.svg'
            }
        ]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '主页', link: '/'},
            {text: 'Wiki', link: '/wiki/wiki-index'},
            // {text: 'HyperOS JS应用库', link: '/appstore'},
            {text: '反馈', link: '/feedback'},
            {text: '关于', link: '/about/about'},
        ],
        sidebar: {
            '/wiki/': [
                {
                    text: 'Wiki',
                    items: [
                        {
                            text: '表格',
                            collapsed: true,
                            items: [
                                {text: '小米可穿戴设备代号对照表', link: '/wiki/sheets/xiaomi-wearable-codes'}
                            ]
                        },
                        {
                            text: '设备',
                            items: [
                                {
                                    text: 'Xiaomi',
                                    collapsed: true,
                                    items: [
                                        {
                                            text: '手环',
                                            collapsed: true,
                                            items: [
                                                {
                                                    text: 'Xiaomi手环9Pro',
                                                    link: '/wiki/product_wiki/Xiaomi/Smartband/9Pro'
                                                },
                                                {text: 'Xiaomi手环10', link: '/wiki/product_wiki/Xiaomi/Smartband/10'}

                                            ]
                                        }
                                    ]
                                },
                                {
                                    text: 'Redmi',
                                    collapsed: true,
                                    items: [
                                        {
                                            text: '手表',
                                            collapsed: true,
                                            items: [
                                                {
                                                    text: 'Redmi手表5',
                                                    link: '/wiki/product_wiki/Xiaomi/Watch/Redmi/RedmiWatch5'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    text: 'HUAWEI',
                                    collapsed: true,
                                    items: [
                                        { text: 'HUAWEI Watch 5', link: '/wiki/product_wiki/HUAWEI/Watch/huaweiwatch5' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            // '/appstore/': [
            //     {
            //         text: 'HyperOS JS应用库',
            //         items: [
            //             {text: '概览', link: '/appstore/'},
            //             {text: '分类',}
            //         ]
            //     }
            // ],
            '/about/': [
                {
                    text: '关于',
                    items: [
                        {text: '贡献者', link: '/about/team'},
                        {text: '关于本站', link: '/about/about'}
                    ]
                }
            ]
        },
        footer: {
            message: 'Released under <a href="https://ghfast.top/https://raw.githubusercontent.com/PieTech-WS/OpenWearWiki/master/LICENSE">PowerAtom知识共享并开源许可VERSION2</a>',
            copyright: 'copyright 2025 PowerAtom Creative Commons Project及全体Wiki作者'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/PieTech-WS/OpenWearWiki-2NEXT'}
        ],
        editLink: {
            pattern: 'https://github.com/PieTech-WS/OpenWearWiki-2NEXT/edit/tNEXT/src/:path'
        },
        logo: '/logo.svg',
        search: {
            provider: 'local'
        }
    }
})
