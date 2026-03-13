import type { MetaRecord } from 'nextra'


export default {
  'index': {
    title: 'Introduction',
    display: 'hidden',
    theme: {
      sidebar: false,
      breadcrumb: false,
      pagination: false,
      toc: false,
      copyPage: false,
    },
  },
  'knowledge-hub': {
    title: 'Knowledge Hub',
    type: 'page',
  },
  'hub': {
    title: 'Developer Hub',
    type: 'page',
  },
  'community': {
    title: 'Community Updates',
    type: 'page',
  },
  'privacy-policy': {
    display: 'hidden',
    theme: {
      sidebar: false,
      breadcrumb: false,
      pagination: false,
    },
  },
  'terms-of-use': {
    display: 'hidden',
    theme: {
      sidebar: false,
      breadcrumb: false,
      pagination: false,
    },
  },
} satisfies MetaRecord
