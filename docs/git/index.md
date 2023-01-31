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

## 版本规范

采用 [semver](https://semver.org/lang/zh-CN/) 规范

发布线上的代码时 打好版本号 写清楚版本说明。

```sh
git tag -a  "V1.0.0"  -m  'Release V1.0.0`
```
