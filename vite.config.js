import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'
import { readdirSync } from 'fs'

const getDirectories = (source) =>
    readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)

const templatesDirectories = getDirectories('src/templates')

export default {
    plugins: [
        handlebars({
            partialDirectory: templatesDirectories.map((directory) =>
                resolve(__dirname, 'src', 'templates', directory)
            ),
        }),
    ],
}
