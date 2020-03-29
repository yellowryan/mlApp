module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'commom': '@/commom',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }

}