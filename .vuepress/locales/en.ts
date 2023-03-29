import { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = [
  '/',
  '/faq',
  '/terminology',
  {
    text: 'Register .bit',
    children: [
      '/register-das/pricing',
      '/register-das/open-registration-rules',
      '/register-das/charsets',
      {
        text: 'Reserved .bit Accounts',
        link: 'https://github.com/dotbitHQ/cell-data-generator/blob/master/data/reserved_accounts.txt',
      },
    ],
  },
  {
    text: 'Projects',
    children: [
      '/projects/data.did.id'
    ],
  },
  {
    text: 'Contribute to .bit',
    children: [
      '/contribute-to-das/build-together',
      '/contribute-to-das/referral',
      '/contribute-to-das/channel',
      '/contribute-to-das/registrar',
      '/contribute-to-das/keeper',
    ],
  },
  {
    text: 'Developers',
    children: [
      '/developers/integration-guide',
      '/developers/build-application',
      '/developers/integration-frontend',
      '/developers/integration-backend',
      '/developers/wallet-integration',
      '/developers/dotbit-alias',
      '/developers/dotbit-libraries',
    ],
  },
  {
    text: 'We Are Hiring',
    children: [
      '/we-are-hiring/position-list',
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
    text: 'Others',
    children: [
      '/others/why-assets-on-ckb-can-be-managed-by-btc-address',
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

export const en = {
  sidebar,
}
