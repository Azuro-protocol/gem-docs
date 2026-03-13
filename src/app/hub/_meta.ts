import type { MetaRecord } from 'nextra'


export default {
  'index': {
    title: '🚀 Developer Hub',
    theme: {
      breadcrumb: false,
    },
  },
  'apps': {
    'title': '🔮 For applications',
    'theme': {
      'collapsed': false,
    },
  },
  '---': {
    'type': 'separator',
  },
  'blockchains': {
    'title': '🧩 For blockchains',
    'theme': {
      'collapsed': false,
    },
  },
  '---1': {
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
