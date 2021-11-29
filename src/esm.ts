#!/usr/bin/env ts-node

import { sync as spawnSync } from 'cross-spawn'
import { resolve } from 'import-meta-resolve'
const argv = process.argv.slice(2)

resolve('esbuild-node-loader', import.meta.url).then(path => {
    process.exit(
        spawnSync('node', ['--experimental-loader', path, ...argv], {
            stdio: 'inherit'
        }).status || 0
    )
})
