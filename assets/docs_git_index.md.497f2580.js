import{_ as e,c as a,o as s,b as l}from"./app.12e2e683.js";const f=JSON.parse('{"title":"Git 规范","description":"","frontmatter":{},"headers":[{"level":2,"title":"分支规范","slug":"分支规范","link":"#分支规范","children":[]},{"level":2,"title":"提交规范","slug":"提交规范","link":"#提交规范","children":[]},{"level":2,"title":"版本规范","slug":"版本规范","link":"#版本规范","children":[]}],"relativePath":"docs/git/index.md"}'),t={name:"docs/git/index.md"},r=l('<h1 id="git-规范" tabindex="-1">Git 规范 <a class="header-anchor" href="#git-规范" aria-hidden="true">#</a></h1><h2 id="分支规范" tabindex="-1">分支规范 <a class="header-anchor" href="#分支规范" aria-hidden="true">#</a></h2><ul><li><p>master 分支</p><p>master 为主分支，用于部署到正式环境（PRO），一般由 release 或 hotfix 分支合并，任何情况下不允许直接在 master 分支上修改代码。</p></li><li><p>release 分支</p><p>release 为预上线分支，用于部署到预上线环境（UAT），始终保持与 master 分支一致，一般由 dev 或 hotfix 分支合并，不建议直接在 release 分支上直接修改代码。</p><p>如果在 release 分支测试出问题，需要回归验证 dev 分支看否存在此问题。</p></li><li><p>hotfix 分支</p><p>hotfix 为紧急修复分支，命名规则为 hotfix- 开头。</p><p>当线上出现紧急问题需要马上修复时，需要基于 release 或 master 分支创建 hotfix 分支，修复完成后，再合并到 release 或 dev 分支，一旦修复上线，便将其删除。</p></li><li><p>dev 分支</p><p>dev 为测试分支，用于部署到测试环境（FAT），始终保持最新完成以及 bug 修复后的代码，可根据需求大小程度确定是由 feature 分支合并，还是直接在上面开发。</p><p>一定是满足测试的代码才能往上面合并或提交。</p></li><li><p>feature 分支</p><p>feature 为需求开发分支，命名规则为 feature- 开头，一旦该需求上线，便将其删除。</p></li><li><p>其他分支</p><p>团队成员按自己名称新建分支</p></li></ul><h2 id="提交规范" tabindex="-1">提交规范 <a class="header-anchor" href="#提交规范" aria-hidden="true">#</a></h2><p>采用 <a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines" target="_blank" rel="noreferrer">Angular</a> 提交规范 ，实际项目采用 <code>husky</code>，<code>commitlint</code>，<code>cz-customizable</code>，<code>lint-staged</code> 强制统一。</p><p><code>type</code></p><p>用于说明本次 <code>commit</code> 的类别，一般使用下面 7 个标识</p><ul><li>feat：新功能（feature）</li><li>fix：修补 bug</li><li>docs：文档（documentation）</li><li>style： 格式（不影响代码运行的变动）</li><li>refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）</li><li>test：增加测试</li><li>chore：构建过程或辅助工具的变动</li></ul><h2 id="版本规范" tabindex="-1">版本规范 <a class="header-anchor" href="#版本规范" aria-hidden="true">#</a></h2><p>采用 <a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noreferrer">semver</a> 规范</p><p>发布线上的代码时 打好版本号 写清楚版本说明。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">V1.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Release V1.0.0`</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',12),i=[r];function n(o,p,c,d,h,u){return s(),a("div",null,i)}const _=e(t,[["render",n]]);export{f as __pageData,_ as default};
