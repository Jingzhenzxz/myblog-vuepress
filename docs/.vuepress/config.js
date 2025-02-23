import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';

export default {
    bundler: viteBundler(),
    theme: defaultTheme({
        // logo: '/logo.png', // 网站LOGO
        // repo: 'your-github-repo', // 添加 GitHub 仓库链接
        repoLabel: 'GitHub',
        editLink: false, // 禁用“编辑此页”按钮
        contributors: false, // 关闭贡献者信息
        lastUpdated: true, // 显示上次更新日期
        lastUpdatedText: '上次更新',
        docsDir: 'docs', // 你的文档目录
        sidebarDepth: 2, // 显示二级标题
        homeLayout: true, // 强制启用 home 主题
        algolia: {
            appId: '你的AppID',
            apiKey: '你的API密钥',
            indexName: '你的索引名称'
        },
        markdown: {
            code: {
                lineNumbers: true // 显示代码行号
            }
        },
        navbar: [
            { text: '首页', link: '/' },
            { text: '算法', link: '/algorithm/' },
            { text: 'Java', link: '/java/' },
            { text: '关于', link: '/about/' }
        ],
        sidebar: {
            '/algorithm/': [
                {
                    text: '算法',
                    collapsible: true,
                    children: [
                        { text: '简介', link: '/algorithm/' },
                        { text: '两个键的键盘', link: '/algorithm/2-keys-keyboard' } // 修正文件名和去除 .md
                    ]
                }
            ],
            '/java/': [
                {
                    text: 'Java',
                    collapsible: true,
                    children: [
                        { text: '简介', link: '/java/' }
                    ]
                }
            ],
            '/about/': [  // 添加关于页面的侧边栏
                {
                    text: '关于',
                    collapsible: true,
                    children: [
                        { text: '关于我', link: '/about/' }
                    ]
                }
            ],
            '/': [  // 替换 'auto' 为显式配置
                {
                    text: '首页',

                    children: [
                        { text: '欢迎', link: '/' }
                    ]
                }
            ]
        }
    }),
    title: '景真',
    description: '自娱自乐而已'
};