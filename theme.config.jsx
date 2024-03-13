import { ThemeSwitch, FileTree } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import meta from './pages/_meta.json'
import Footer from './components/Footer'

export default {
  // project: {
  //   link: 'https://github.com/Azuro-protocol',
  // },
  docsRepositoryBase: 'https://github.com/Azuro-protocol/gem-docs/tree/main',
  // banner: {
  //   key: 'tutorial',
  //   text: <a href="/guides/tutorial">💎 Tutorial: Build your own betting dApp. Read more →</a>,
  // },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: false,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Azuro Protocol" />
      <meta property="og:description" content="Azuro Documentation" />
      <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon/favicon-32x32.png" type="image/png" />
      {/*<link*/}
      {/*  rel="icon"*/}
      {/*  href="/favicon-dark.svg"*/}
      {/*  type="image/svg+xml"*/}
      {/*  media="(prefers-color-scheme: dark)"*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="icon"*/}
      {/*  href="/favicon-dark.png"*/}
      {/*  type="image/png"*/}
      {/*  media="(prefers-color-scheme: dark)"*/}
      {/*/>*/}
    </>
  ),
  logo: (
    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="Layer_1" x="0" y="0" style={{width: '190px'}} version="1.1" viewBox="0 0 725 145" fill="currentColor" >
      <linearGradient id="SVGID_1_" x1="1.426" x2="142.929" y1="88.159" y2="58.294" gradientTransform="matrix(1 0 0 -1 0 146)" gradientUnits="userSpaceOnUse"><stop offset=".4" style={{stopColor: "#3d67ff"}} />
        <stop offset="1" style={{stopColor: "#2241a9"}} />
      </linearGradient><path d="M134.5 100.2c-2.1-4.4-4-8.8-6.3-13.1-2.3-4.2-5.9-7.5-7.9-11.8-2-4.2-3-8.8-5.5-12.8-2.6-4.2-6.3-7.5-9.2-11.5-2.9-4-4.8-8.5-6.7-13-1.9-4.4-4.2-8-7.3-11.5C84.5 18.6 79 9.7 74.5.1 54.2.7 36.6 7.8 22.3 21.2 7.5 35.1 0 52.4 0 72.5S7.5 110 22.3 124l.1.1C37.3 138 55.9 145 77.4 145s40.1-7 55.1-20.9c3.8-3.6 7.2-7.4 10.1-11.4-3.2-3.9-6-8-8.1-12.5zm-38.2-9.5c-5.1 4.7-11.2 7-18.9 7-7.6 0-13.8-2.3-18.8-7-4.9-4.7-7.3-10.7-7.3-18.2s2.4-13.5 7.3-18.2c5.1-4.7 11.2-7 18.8-7 7.6 0 13.8 2.3 18.9 7 5.1 4.7 7.5 10.7 7.5 18.2s-2.4 13.5-7.5 18.2z" style={{fill: "url(#SVGID_1_)"}} />
      <linearGradient id="SVGID_00000108271445164040417510000012145836561144115883_" x1="56.28" x2="207.528" y1="129.553" y2="18.743" gradientTransform="matrix(1 0 0 -1 0 146)" gradientUnits="userSpaceOnUse">
        <stop offset=".265" style={{stopColor: "#3d67ff"}} /><stop offset="1" style={{stopColor: "#86c0fb"}} />
      </linearGradient>
      <path d="M212 118.5c0-6-.1-9.1 0-15.1 0-2.5-.9-4-2.2-5.2-1.3-1.2-5.3-1.9-6-2-15.3-3.1-23.2-10.6-32.1-23.4-10.4-14.9-18.9-31.2-30.7-45C130.9 16 118.2 6.8 103 3 94.2.8 85.3 0 76.2 0 45.6-.5 26.3 17.4 22.3 21.2c0 4.5 1.3 8.1 3.2 11.2s4.2 5.9 6.4 8.8c2 2.6 3.8 5.4 4.8 8.8.6 1.9 1 4 1 6.4 0 1.3 32.2-9.8 38-9.1 12.8 0 19.8 4.4 27.2 12.2 11.1 11.5 18.2 25.9 27.2 39 13.1 19.2 30.3 38.5 53.9 44 8.6 2 11 2.5 19.8 2.5 3.9 0 8.3-2.8 8.3-7-.1-8.2-.1-11.4-.1-19.5z" style={{fill: "url(#SVGID_00000108271445164040417510000012145836561144115883_)"}} />
      <path d="M250.9 72c.1-16.7 7.3-33.4 21.1-42.8 12.9-8.8 31.6-11.4 45.7-3.7 5.6 3 10.1 6.8 13.4 11.3V24.6c0-1.1.9-2 2-2h21.2c1.1 0 2 .9 2 2v95.5c0 1.1-.9 2-2 2h-21.2c-1.1 0-2-.9-2-2v-12.5c-3.2 4.7-7.7 8.6-13.4 11.7-16.5 9-38.4 3.9-51.6-8.6-10.3-9.9-15.3-24.3-15.2-38.7zm77.3-.6c0-6.1-1.2-10.3-3.6-14.6-2.4-4.4-5.6-7.8-9.7-10.1-4.1-2.4-8.4-3.6-13.1-3.6s-8.9 1.1-12.9 3.4c-3.9 2.3-7.2 5.6-9.7 10.1-2.4 4.3-3.6 8.5-3.6 14.4s1.2 11.3 3.6 15.8c2.5 4.4 5.7 7.8 9.7 10.2 4.1 2.4 8.3 3.6 12.9 3.6 4.7 0 9-1.1 13.1-3.4 4.1-2.4 7.3-5.7 9.7-10.1 2.4-4.4 3.6-9.6 3.6-15.7zM396.6 101.5h44.2c1.1 0 2 .9 2 2v16.7c0 1.1-.9 2-2 2h-70.6c-1.1 0-2-.9-2-2v-17.6c0-.4.1-.8.4-1.2l42.9-58h-41.1c-1.1 0-2-.9-2-2V24.6c0-1.1.9-2 2-2h69.9c1.1 0 2 .9 2 2v17.6c0 .4-.1.9-.4 1.2l-45.3 58.1zM546.6 22.6c1.1 0 2 .9 2 2v95.5c0 1.1-.9 2-2 2h-21.2c-1.1 0-2-.9-2-2v-10.6c-3.2 4.3-7.5 7.7-12.7 10.2-5.1 2.4-10.7 3.6-16.8 3.6-7.8 0-14.6-1.6-20.6-4.8-6-3.4-10.7-8.2-14.1-14.5-3.3-6.5-5-14.1-5-23V24.6c0-1.1.9-2 2-2h21c1.1 0 2 .9 2 2v52.8c0 7.9 2 14 5.9 18.3 3.9 4.2 9.3 6.3 16.1 6.3 6.9 0 12.3-2.1 16.3-6.3 3.9-4.3 5.9-10.4 5.9-18.3V24.6c0-1.1.9-2 2-2h21.2zM586.2 38.1c3.2-5.3 7.4-9.4 12.5-12.4 4.7-2.7 10-4.2 15.9-4.4 1.1-.1 2 .8 2 2v22.4c0 1.1-.9 2-2 2H610c-7.9 0-13.8 1.9-17.9 5.6-3.9 3.7-5.9 10.2-5.9 19.4v47.6c0 1.1-.9 2-2 2h-21c-1.1 0-2-.9-2-2V24.6c0-1.1.9-2 2-2h21c1.1 0 2 .9 2 2v13.5zM673.3 123.7c-9.5 0-18.1-2.1-25.8-6.3-7.6-4.3-13.7-10.4-18.1-18.1-4.3-7.8-6.4-16.8-6.4-26.9 0-10.2 2.2-19.2 6.6-26.9 4.5-7.8 10.7-13.8 18.4-18 7.8-4.3 16.4-6.5 25.9-6.5s18.2 2.2 25.9 6.5c7.8 4.2 13.8 10.2 18.2 18 4.5 7.8 6.8 16.8 6.8 26.9 0 10.2-2.3 19.2-7 26.9-4.5 7.8-10.7 13.8-18.6 18.1-7.5 4.2-16.2 6.3-25.9 6.3zm0-21.9c4.5 0 8.8-1.1 12.7-3.2 4.1-2.3 7.3-5.6 9.7-10.1 2.4-4.4 3.6-9.8 3.6-16.2 0-9.5-2.5-16.7-7.5-21.7-4.9-5.1-10.9-7.7-18.1-7.7-7.2 0-13.2 2.6-18.1 7.7-4.8 5-7.2 12.3-7.2 21.7 0 9.5 2.3 16.8 7 21.9 4.8 5.1 10.7 7.6 17.9 7.6z" />
    </svg>
  ),
  navbar: {
    extraContent: (
      <ThemeSwitch />
    ),
  },
  footer: {
    component: (
      <Footer />
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    const defaultTitle = 'Azuro Gem'

    if (asPath === '/') {
      return {
        title: defaultTitle,
      }
    }

    const [ , level1, level2 ] = asPath.split('/')

    const level1Title = meta[level1]?.title
    const titleTemplate = level1Title
      ? level2 ? `%s - ${level1Title} - ${defaultTitle}` : `${level1Title} - ${defaultTitle}`
      : `%s - ${defaultTitle}`

    return {
      titleTemplate,
      defaultTitle,
    }
  },
}
