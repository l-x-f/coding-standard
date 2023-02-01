# Git 规范

## 分支规范

- master 分支

  `master` 为主分支，用于部署到正式环境（PRO），一般由 `release` 或 `hotfix` 分支合并，任何情况下不允许直接在 `master` 分支上修改代码。

- release 分支

  `release` 为预上线分支，用于部署到预上线环境（UAT），始终保持与 `master` 分支一致，一般由 `dev` 或 `hotfix` 分支合并，不建议直接在 `release` 分支上直接修改代码。

  如果在 `release` 分支测试出问题，需要回归验证 `dev` 分支看是否存在此问题。

- hotfix 分支

  `hotfix` 为紧急修复分支，命名规则为 `hotfix-` 开头。

  当线上出现紧急问题需要马上修复时，需要基于 `release` 或 `master` 分支创建 `hotfix` 分支，修复完成后，再合并到 `release` 或 `dev` 分支，一旦修复上线，便将其删除。

- dev 分支

  `dev` 为测试分支，用于部署到测试环境（FAT），始终保持最新完成以及 `bug` 修复后的代码，可根据需求大小程度确定是由 `feature` 分支合并，还是直接在上面开发。

  一定是满足测试的代码才能往上面合并或提交。

- `feature` 分支

  `feature` 为需求开发分支，命名规则为 `feature-` 开头，一旦该需求上线，便将其删除。

- 其他分支

  团队成员按自己名称新建分支

## 提交规范

采用 [Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) 提交规范 ，实际项目采用 `husky`，`commitlint`，`cz-customizable`，`lint-staged` 强制统一。

`type`

用于说明本次 `commit` 的类别，一般使用下面 7 个标识

- feat：新功能（`feature`）
- fix：修补 `bug`
- docs：文档（`documentation`）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 `bug` 的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

[实战配置代码](/docs/code/actual-combat/git-hooks.html) 见代码规范实战章节

## 版本规范

采用 [semver](https://semver.org/lang/zh-CN/) 规范

发布线上的代码时 打好版本号 写清楚版本说明。

```sh
git tag -a  "V1.0.0"  -m  'Release V1.0.0`
```

**实战配置**

- 安装

`execa` `chalk` 注意它们的版本，新版本只支持 ESmodule， 我们锁定在旧版本

```sh
yarn add chalk@4.1.2 execa@5.1.0 semver enquirer -D
```

- scripts/release.js

```js
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const semver = require('semver')
const { prompt } = require('enquirer')
const execa = require('execa')
const chalk = require('chalk')
const { version: currentVersion } = require('../package.json')

// 打印
const echo = msg => console.log(chalk.green(msg))

// 运行脚本
const run = (bin, args, opts = {}) =>
  execa(bin, args, { stdio: 'inherit', ...opts })

//  版本列表
const versionIncrements = [
  'patch（补丁）',
  'minor（次版本）',
  'major（主版本）',
  'prepatch（预构建补丁）',
  'preminor（预构建次版本）',
  'premajor（预构建主版本）',
  'prerelease（预构建发布版本）'
]

// 增加版本号
const inc = i => semver.inc(currentVersion, i)

/**
 * 更新版本号
 * @param {string} version
 */
function updatePackage(version) {
  const pkgPath = path.resolve(__dirname, '../package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  pkg.version = version
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
  echo(`更新 package.json version 到 ${version}\n`)
}

function getInc(value) {
  const r = /(\w+)/g
  return r.exec(value)[0]
}

/**
 * 打变更日志 提交 打标签 推送到远程仓库
 * @param {string} version
 */
async function publish(version) {
  try {
    await run('git', ['add', '-A'])
    await run('git', ['tag', '-a', version, '-m', `Release v${version}`])
    await run('npm', ['run', '--name', 'commit'])
    await run('git', ['pull'])
    await run('git', ['push', '--tags'])
    await run('git', ['push'])
    echo(`\n提交成功${version}`)
    await run('npm', ['run', '--name', 'build:prod'])
    echo(`\n打包成功\n`)
  } catch (error) {
    throw new Error(error)
  }
}

// 主函数
async function main() {
  let version

  const { release } = await prompt({
    type: 'select',
    name: 'release',
    message: 'Select release type',
    choices: versionIncrements
      .map(i => `${i} (${inc(getInc(i))})`)
      .concat(['custom（自定义版本）'])
  })

  if (release.includes('custom')) {
    version = (
      await prompt({
        type: 'input',
        name: 'version',
        message: '输入自定义版本',
        initial: version
      })
    ).version
  } else {
    version = release.match(/\((.*)\)/)[1]
  }

  if (!semver.valid(version)) {
    throw new Error(`不合法的版本: ${version}`)
  }
  updatePackage(version)
  await publish(version)
}

main().catch(err => {
  console.error(err)
})
```

- 使用

`package.json` 里配置 `scripts`

```json
{
  "scripts": {
    "release": "node ./scripts/release.js"
  }
}
```

执行下面脚本

一般正式发布版本 `谨慎使用`

```sh
yarn  release
```
