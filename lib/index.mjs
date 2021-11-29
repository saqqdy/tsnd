#!/usr/bin/env node
import { sync } from 'cross-spawn';
import { resolve } from 'import-meta-resolve';

const argv = process.argv.slice(2);
resolve("esbuild-node-loader", import.meta.url).then((path) => {
  process.exit(sync("node", ["--experimental-loader", path, ...argv], {
    stdio: "inherit"
  }).status || 0);
});
