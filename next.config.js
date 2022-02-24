const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,

    assetPrefix: isProd ? '/projeto.curriculo.nextjs/' : '',
    
    images: {
      loader: 'akamai',
      path: '',
    },
}
