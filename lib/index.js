#!/usr/bin/env node
'use strict';

const register = require.resolve("esbuild-register");
const { sync: spawnSync } = require("cross-spawn");
const argv = process.argv.slice(2).map((item, i) => i === 0 || item.indexOf("-") === 0 || /^\w+$/.test(item) ? item : '"' + item + '"');
const program = spawnSync("node", ["-r", register, ...argv], {
  stdio: "inherit",
  shell: process.platform === "win32"
});
process.exit(program.status);
