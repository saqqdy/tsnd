<div style="text-align: center;" align="center">

# TSND

</div>

<div style="text-align: center;" align="center">

这是一个 ts 运行时工具

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## 安装

### 全局安装

```
# 通过npm安装
npm install -g tsnd

# 或者通过yarn安装
yarn global add tsnd
```

### 本地安装

```
# 通过npm安装
npm install -D tsnd

# 或者通过yarn安装
yarn add -D tsnd
```

## 使用

```shell
# 运行typescript写的cjs模块
tscjs test.ts
# or
tsnd-cjs test.ts

# 运行typescript写的esm模块
tsesm test.ts
# or
tsnd-esm test.ts
```

## 配置

无需配置

[npm-image]: https://img.shields.io/npm/v/tsnd.svg?style=flat-square
[npm-url]: https://npmjs.org/package/tsnd
[travis-image]: https://travis-ci.com/saqqdy/tsnd.svg?branch=master
[travis-url]: https://travis-ci.com/saqqdy/tsnd
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/tsnd.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/tsnd?branch=master
[snyk-image]: https://snyk.io/test/npm/tsnd/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/tsnd
[download-image]: https://img.shields.io/npm/dm/tsnd.svg?style=flat-square
[download-url]: https://npmjs.org/package/tsnd
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_tsnd
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_tsnd
