#!/usr/bin/env node
import { sync } from 'cross-spawn';
import { resolve } from 'import-meta-resolve';

const argv = process.argv.slice(2).map((item, i) => i === 0 || item.indexOf("-") === 0 || /^\w+$/.test(item) ? item : '"' + item + '"');
resolve("esbuild-node-loader", import.meta.url).then((path) => {
  const program = sync("node", ["--experimental-loader", path, ...argv], {
    stdio: "inherit",
    shell: process.platform === "win32"
  });
  process.exit(program.status || 0);
});
