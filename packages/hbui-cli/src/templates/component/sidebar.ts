export default function genSidebarTemplate(genNavs: any[]) {
  const rootNavs = [
    {
      text: '快速开始',
      items: [
        { text: '简介', link: '/introduce/' },
        { text: '如何使用', link: '/quick-start/' }
      ]
    }
  ]

  // const genNavs = [
  //   {
  //     text: '通用',
  //     items: [
  //       { text: 'Button 按钮', link: '/components/button/' },
  //       { text: 'Icon 图标', link: '/components/icon/' }
  //     ]
  //   },
  //   { text: '反馈', items: [{ text: 'Alert 警告', link: '/components/alert/' }] },
  //   { text: '数据展示', items: [{ text: 'Card 卡片', link: '/components/card/' }] }
  // ]

  const sidebar = [...rootNavs, ...genNavs]

  return `\
const sidebar = ${JSON.stringify(sidebar, null, 2)}
export default sidebar
`
}
