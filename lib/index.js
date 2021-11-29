#!/usr/bin/env node
'use strict';

const { sync: spawnSync } = require("cross-spawn");
const register = require.resolve("esbuild-register");
const argv = process.argv.slice(2);
process.exit(spawnSync("node", ["-r", register, ...argv], { stdio: "inherit" }).status);
