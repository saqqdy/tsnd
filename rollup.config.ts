import resolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import shebang from 'rollup-plugin-replace-shebang'
import pkg from './package.json'

const deps = Object.keys(pkg.dependencies)

function getOutputConfiguration({ input, output }) {
    return {
        input,
        output,
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
}

export default () => {
    const map = []
    map.push(
        getOutputConfiguration({
            input: 'src/cjs.ts',
            output: [
                {
                    format: 'cjs',
                    file: 'lib/index.js',
                    exports: 'auto',
                    sourcemap: false
                }
            ]
        })
    )
    map.push(
        getOutputConfiguration({
            input: 'src/esm.ts',
            output: [
                {
                    format: 'esm',
                    file: 'lib/index.mjs',
                    exports: 'auto',
                    sourcemap: false
                }
            ]
        })
    )
    return map
}
