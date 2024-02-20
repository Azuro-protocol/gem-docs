const withNextra = require('nextra')({
  latex: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/build-own-app',
        destination: '/guides/tutorial',
        permanent: true,
      },
      {
        source: '/concepts/basic/fees-and-rewards',
        destination: '/concepts/basic/rewards',
        permanent: false,
      },
      {
        source: '/sdk/:path*',
        destination: '/guides/sdk/:path*',
        permanent: true,
      },
      {
        source: '/guides/prematch/:path*',
        destination: '/guides/advanced/prematch/:path*',
        permanent: false,
      },
      {
        source: '/guides/live/:path*',
        destination: '/guides/advanced/live/:path*',
        permanent: false,
      },
      {
        source: '/tutorial/:path*',
        destination: '/guides/tutorial/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    unoptimized: true
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
        resourceQuery: { not: [ /url/ ] }, // exclude if  import * from "*.svg?url"
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

module.exports = withNextra(nextConfig)
