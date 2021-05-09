import { LinkStatus } from './types';

export const status = {
  LIVE: {
    text: 'LIVE',
    color: 'failure',
  } as LinkStatus,
  SOON: {
    text: 'SOON',
    color: 'warning',
  } as LinkStatus,
  NEW: {
    text: 'NEW',
    color: 'success',
  } as LinkStatus,
};

export const links = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pdexswap.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pdexswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
    status: status.LIVE,
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: '/competition',
    status: status.SOON,
  },
  {
    label: 'Profile & Teams',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
        status: status.NEW,
      },
      {
        label: 'YourProfile',
        href: '/',
      },
    ],
    calloutClass: 'rainbow',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pdexswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pdexswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pdexswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pdexswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    items: [
      {
        label: 'Next',
        href: '/ifo',
      },
      {
        label: 'History',
        href: '/ifo/history',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.pdexswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/pdexswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pdexswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pdexswap.medium.com',
      },
    ],
  },
];

export const socials = [
  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    items: [
      {
        label: 'English',
        href: 'https://t.me/pdexswap',
      },
      {
        label: 'Bahasa Indonesia',
        href: 'https://t.me/PdexSwapIndonesia',
      },
      {
        label: '中文',
        href: 'https://t.me/PdexSwap_CN',
      },
      {
        label: 'Tiếng Việt',
        href: 'https://t.me/PdexSwapVN',
      },
      {
        label: 'Italiano',
        href: 'https://t.me/pdexswap_ita',
      },
      {
        label: 'русский',
        href: 'https://t.me/pdexswap_ru',
      },
      {
        label: 'Türkiye',
        href: 'https://t.me/pdexswapturkiye',
      },
      {
        label: 'Português',
        href: 'https://t.me/PdexSwapPortuguese',
      },
      {
        label: 'Español',
        href: 'https://t.me/PancakeswapEs',
      },
      {
        label: '日本語',
        href: 'https://t.me/pdexswapjp',
      },
      {
        label: 'Français',
        href: 'https://t.me/pdexswapfr',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/PdexSwapAnn',
      },
      {
        label: 'Whale Alert',
        href: 'https://t.me/PdexSwapWhales',
      },
    ],
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/pdexswap',
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
