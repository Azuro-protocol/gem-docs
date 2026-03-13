const nextra = require('nextra').default


const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  search: true,
  // staticImage: true,
  codeHighlight: true,
  // theme: 'nextra-theme-docs',
  // themeConfig: './theme.config.jsx'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './src/mdx-components.ts'
    }
  },
  webpack: (config, { isServer, webpack }) => {
    // fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        '__CLIENT__': !isServer,
        '__SERVER__': isServer,
      })
    )

    config.module.rules.push({
      test: /\.(pdf)$/,
      type: 'asset/resource',
    });

    config.module.rules.push(
      {
        test: /\.svg$/i,
        // type: 'asset/resource',
        resourceQuery: /url/, // *.svg?url
        use: [
          {
            loader: 'next-image-loader',
            options: {
              assetPrefix: ''
            }
          }
        ]
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude if  import * from "*.svg?url"
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              dimensions: false
            }
          }
        ]
      }
    )

    return config
  }
}

const config = withNextra(nextConfig)

module.exports = config
