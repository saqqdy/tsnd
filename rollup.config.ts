import fs from 'fs'
import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import shebang from 'rollup-plugin-replace-shebang'
import pkg from './package.json'

const isDev = process.env.BUILD_ENV === 'dev'
const deps = Object.keys(pkg.dependencies)

const cjsList = []
const readDir = entry => {
    const dirInfo = fs.readdirSync(entry)
    dirInfo.forEach(item => {
        const name = path.join(entry, item)
        const info = fs.statSync(name)
        if (info.isDirectory()) {
            readDir(name)
        } else {
            ;/^[\S]*\.ts$/.test(item) && getInfo(name)
        }
    })
}
const getInfo = url => {
    cjsList.push(url)
}
readDir('./src')

const getOutFile = (name, dir = 'lib', suffix = '') => {
    return name.replace(/^src/, dir).replace(/\.ts$/, suffix + '.js')
}

const production = !process.env.ROLLUP_WATCH

export default [
    {
        input: 'src/cjs.ts',
        output: [
            {
                format: 'cjs',
                file: 'lib/index.js',
                exports: 'auto',
                sourcemap: false
            }
        ],
        plugins: [
            resolve({
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                    '.es6',
                    '.es',
                    '.mjs',
                    '.ts',
                    '.json'
                ],
                preferBuiltins: false
            }),
            shebang({
                shebang: '#!/usr/bin/env node',
                skipBackslash: true // 跳过\u005c 反斜杠
            }),
            esbuild({
                target: 'es2020',
                minify: false // 避免\u005c被转码
            })
        ],
        external(id) {
            return (
                ['regenerator-runtime'].some(k =>
                    new RegExp('^' + k).test(id)
                ) || deps.some(k => new RegExp('^' + k).test(id))
            )
        }
    },
    {
        input: 'src/esm.ts',
        output: [
            {
                format: 'esm',
                file: 'lib/index.mjs',
                exports: 'auto',
                sourcemap: false
            }
        ],
        plugins: [
            resolve({
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                    '.es6',
                    '.es',
                    '.mjs',
                    '.ts',
                    '.json'
                ],
                preferBuiltins: false
            }),
            shebang({
                shebang: '#!/usr/bin/env node',
                skipBackslash: true // 跳过\u005c 反斜杠
            }),
            esbuild({
                target: 'es2020',
                minify: false // 避免\u005c被转码
            })
        ],
        external(id) {
            return (
                ['regenerator-runtime'].some(k =>
                    new RegExp('^' + k).test(id)
                ) || deps.some(k => new RegExp('^' + k).test(id))
            )
        }
    }
]
