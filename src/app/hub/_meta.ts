import type { MetaRecord } from 'nextra'


export default {
  'index': {
    title: '🚀 Developer Hub',
    theme: {
      breadcrumb: false,
    },
  },
  '---apps': {
    'type': 'separator',
    title: '🔮 For applications',
  },
  'apps': {
    // 'title': '🔮 For applications',
    display: 'children',
    'theme': {
      'collapsed': false,
    },
  },
  '---1': {
    'type': 'separator',
    // title: '🧩 For blockchains',
  },
  'blockchains': {
    'title': '🧩 For blockchains',
    // display: 'children',
    'theme': {
      'collapsed': false,
    },
  },
  '---2': {
    'type': 'separator',
  },
  'releases': {
    'title': '📦 Releases',
    'theme': {
      'collapsed': false,
    },
  },
  'FAQ': '❓ FAQ',
} satisfies MetaRecord
