import { SidebarConfig } from '@vuepress/theme-default'
const prefixZh = (...list) => list.map(item => '/zh' + item)
export const sidebar: SidebarConfig = [...prefixZh(
    '/',
    '/terminology',
    '/faq',
  ), {
    text: '注册 .bit',
    children: [...prefixZh(
        '/register-das/pricing',
        '/register-das/open-registration-rules',
        '/register-das/charsets',
        ), {
        text: '保留账户',
        link: 'https://github.com/dotbitHQ/cell-data-generator/blob/master/data/reserved_accounts.txt',
      },
    ],
  },
  {
    text: '技术细节',
    children: prefixZh(
      '/technical-details/registration-process',
      '/technical-details/lifecycle',
      '/technical-details/data-container',
      '/technical-details/alias',
      '/technical-details/subdid',
      '/technical-details/multichain-principle',
      '/technical-details/permissions',
      '/technical-details/eth-nft',
    ),
  },
  {
    text: '共同建设',
    children: prefixZh(
      '/contribute-to-das/build-together',
      '/contribute-to-das/referral',
      '/contribute-to-das/channel',
      '/contribute-to-das/registrar',
      '/contribute-to-das/keeper',
    ),
  },
  {
    text: '开发者',
    children: prefixZh(
      '/developers/integration-guide',
      '/developers/build-application',
      '/developers/integration-frontend',
      '/developers/integration-backend',
      '/developers/wallet-integration',
      '/developers/dotbit-alias',
      '/developers/dotbit-libraries',
    ),
  },
  {
    text: '生态项目',
    children: prefixZh(
      '/projects/data.did.id'
    )
  },
  {
    text: '招聘',
    children: [
      ...prefixZh('/we-are-hiring/position-list'),
      '/we-are-hiring/full-stack-engineer',
      '/we-are-hiring/communication-manager',
      '/we-are-hiring/bd-manager',
      '/we-are-hiring/event-manager',
      '/we-are-hiring/community-manager-ambassador-program',
      '/we-are-hiring/social-media-specialist',
      '/we-are-hiring/chief-evangelist'
    ],
  },
  {
    text: '其他',
    children: [
      ...prefixZh('/others/why-assets-on-ckb-can-be-managed-by-btc-address'),
      {
        text: 'Github',
        link: 'https://github.com/dotbitHQ',
      },
      {
        text: 'Website',
        link: 'https://did.id',
      },
    ],
  },
]

export const zh = {
  sidebar,
}
