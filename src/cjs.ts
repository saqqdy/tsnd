#!/usr/bin/env ts-node

const register = require.resolve('esbuild-register')
const { sync: spawnSync } = require('cross-spawn')
const argv = process.argv.slice(2)

const program = spawnSync('node', ['-r', register, ...argv], {
    stdio: 'inherit',
    shell: process.platform === 'win32'
})
process.exit(program.status)
