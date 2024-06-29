import nunjucks from 'vite-plugin-nunjucks'

export default {
    base: '/sbis-test/',
    input: ['./index.html'],
    plugins: [nunjucks()],
}
