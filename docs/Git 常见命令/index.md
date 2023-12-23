# Git 常见命令

## 基本操作

- **git init**: 初始化 Git 仓库
- **git clone**: 克隆远程 Git 仓库到本地
- **git pull**: 从远程仓库拉取代码
- **git add**: 添加文件到暂存区
- **git commit**: 提交暂存区文件到 Git 仓库
- **git commit --amend --message "new commit message**": 修改上次提交信息
- **git push**: 推送代码到远程仓库
- **git status**: 查看仓库状态
- **git diff**: 查看工作区和暂存区的差异
- **git log**: 查看提交历史
- **git branch**: 查看本地分支列表
- **git checkout**: 切换分支
- **git merge**: 合并分支
- **git remote**: 查看远程仓库信息

## 分支操作

- **git branch**: 查看分支列表
- **git branch \<branchname\>**: 创建分支
- **git branch -d \<branchname\>**: 删除本地分支
- **git checkout**: 切换分支
- **git merge**: 合并分支
- **git merge --no-ff**: 合并分支并保留分支历史
- **git push \<remote\> --delete \<branchname\>**: 删除远程分支

## 标签操作

- **git tag**: 查看标签列表
- **git tag \<tagname\>**: 创建标签
- **git tag -a \<tagname\> -m "message"**: 创建带有注释的标签
- **git push \<remote\> \<tagname\>**: 推送标签到远程仓库
- **git push \<remote\> --tags**: 推送所有标签到远程仓库

## 远程操作

- **git remote**: 查看远程仓库信息
- **git remote add**: 添加远程仓库
- **git remote set-url**: 修改远程仓库 URL
- **git fetch**: 从远程仓库拉取代码
- **git pull**: 从远程仓库拉取代码并合并到当前分支
- **git push**: 推送代码到远程仓库

## 撤销操作

- **git reset**: 撤销暂存区的所有修改
- **git reset \<filename\>**: 撤销暂存区指定文件的修改
- **git checkout -- \<filename\>**: 撤销工作区指定文件的修改
- **git revert \<commit\>**: 撤销指定提交的修改
- **git reset --hard**: 重置工作区、暂存区和 Git 仓库的状态

## 配置操作

- **git config**: 查看、添加或修改 Git 配置
- **git config --global user.name \<username\>**: 设置 Git 全局用户名
- **git config --global user.email \<email\>**: 设置 Git 全局用户邮箱
- **git config --system**: 修改系统级别 Git 配置
- **git config --local**: 修改当前仓库 Git 配置
- **git config --unset**: 删除 Git 配置项

## 暂存操作

- **git stash**: 将未提交的修改保存到 Git 的 stash 中，以便之后恢复或者应用。使用 **git stash** 命令后，工作区和暂存区的修改都会被保存。
- **git stash save "message"**: 将未提交的修改保存到 Git 的 stash 中，并为当前的 stash 设置一个描述信息。描述信息可以帮助我们更好地理解 stash 中保存的内容。
- **git stash list**: 列出所有保存在 stash 中的修改。每个 stash 都有一个唯一的标识符，可以用来区分不同的 stash。
- **git stash apply \<stash\>**: 将指定的 stash 应用到当前分支中，但是不会删除该 stash。如果要删除该 stash，需要使用 **git stash drop** 命令。
- **git stash pop**: 将最近保存的 stash 应用到当前分支中，并删除该 stash。
- **git stash drop \<stash\>**: 删除指定的 stash。
- **git stash clear**: 删除所有的 stash。
- **git stash branch \<branchname\>**: 基于 stash 创建一个新的分支，并将该 stash 应用到新的分支中。新分支包含了 stash 中的所有修改。

## 参考链接

[Git Book](https://git-scm.com/book/zh/v2)
