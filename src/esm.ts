#!/usr/bin/env ts-node

import { sync as spawnSync } from 'cross-spawn'
import { resolve as importResolve } from 'import-meta-resolve'
const argv = process.argv.slice(2)

importResolve('esbuild-node-loader', import.meta.url).then(path => {
    // 执行程序
    const program = spawnSync(
        'node',
        ['--experimental-loader', path, ...argv],
        {
            stdio: 'inherit',
            shell: process.platform === 'win32'
        }
    )
    process.exit(program.status || 0)
})
