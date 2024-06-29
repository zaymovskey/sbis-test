import nunjucks from 'vite-plugin-nunjucks'
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets'

export default {
    base: '/sbis-test/',
    input: ['./index.html'],
    plugins: [
        nunjucks(),
        libAssetsPlugin({
            include: /\.svg(\?.*)?$/,
        }),
    ],
}
