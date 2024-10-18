 
# Git与版本控制

## 1. 什么是版本控制系统？Git的主要特点是什么？
**答案**：版本控制系统是一种记录文件内容变化，以便将来查阅特定版本修订情况的系统。Git的主要特点包括：
1. 分布式版本控制系统
2. 快速、高效
3. 支持非线性开发（分支）
4. 完全分布式
5. 能够处理大型项目

## 2. Git的工作区、暂存区和版本库概念是什么？
**答案**：
- 工作区：当前工作目录，包含项目的实际文件
- 暂存区：保存了下次将要提交的文件列表信息，也称为索引
- 版本库：Git用来保存项目的元数据和对象数据库的地方

## 3. 如何创建Git仓库？基本的Git工作流是什么？
**答案**：创建Git仓库：
1. git init：在现有目录中初始化仓库
2. git clone [url]：克隆现有的仓库

基本Git工作流：
1. 在工作目录中修改文件
2. 暂存文件，将文件的快照放入暂存区域（git add）
3. 提交更新，找到暂存区的文件，将快照永久性存储到Git仓库目录（git commit）

## 4. Git中的分支管理是如何工作的？如何创建、切换和合并分支？
**答案**：Git分支本质上是指向提交对象的可变指针。
- 创建分支：git branch [branch-name]
- 切换分支：git checkout [branch-name] 或 git switch [branch-name]（Git 2.23+）
- 创建并切换分支：git checkout -b [branch-name]
- 合并分支：git merge [branch-name]

示例：
```bash
git branch feature
git checkout feature
# 或者
git checkout -b feature

# 在feature分支上工作...

git checkout main
git merge feature
```


## 5. 什么是Git的rebase？它与merge有什么区别？
**答案**：rebase是将一系列提交按照原有次序依次应用到另一分支上，而merge是把两个分支的最新快照合并在一起。

区别：
1. rebase使提交历史更加整洁
2. merge保留了完整的历史记录
3. rebase改变了提交历史，merge不会改变现有的提交历史

示例（rebase）：
```bash
git checkout feature
git rebase main
```


## 6. 如何解决Git中的冲突？
**答案**：解决Git冲突的步骤：
1. 运行git status查看哪些文件发生冲突
2. 打开冲突文件，查找冲突标记（<<<<<<<, =======, >>>>>>>）
3. 编辑文件解决冲突
4. 使用git add标记冲突已解决
5. 提交更改（git commit）

## 7. 什么是Git的远程仓库？如何与远程仓库交互？
**答案**：远程仓库是指托管在网络上的项目版本库。与远程仓库交互：
- 查看远程仓库：git remote -v
- 添加远程仓库：git remote add [shortname] [url]
- 从远程仓库抓取数据：git fetch [remote-name]
- 推送到远程仓库：git push [remote-name] [branch-name]
- 查看远程仓库信息：git remote show [remote-name]

## 8. 什么是Git的标签？如何创建和管理标签？
**答案**：Git的标签是版本库的一个快照，用于标记特定的点为重要的节点（如发布版本）。

创建和管理标签：
- 创建轻量标签：git tag [tagname]
- 创建附注标签：git tag -a [tagname] -m [message]
- 查看标签：git tag
- 推送标签到远程：git push origin [tagname]
- 检出标签：git checkout [tagname]

## 9. 如何使用Git进行代码回滚？
**答案**：Git进行代码回滚的方法：
1. 使用git reset回滚到指定提交
   - 软重置：git reset --soft [commit]
   - 硬重置：git reset --hard [commit]
2. 使用git revert创建一个新的提交来撤销之前的提交
3. 使用git checkout恢复单个文件

示例：
```bash
# 回滚到上一次提交
git reset --hard HEAD^

# 撤销最近一次提交
git revert HEAD
```


## 10. 什么是Git的钩子（hooks）？如何使用它们？
**答案**：Git钩子是在Git执行特定事件（如提交、推送等）时自动运行的脚本。

使用Git钩子：
1. 进入项目的.git/hooks目录
2. 创建或编辑所需的钩子脚本（去掉.sample后缀）
3. 确保脚本有执行权限

常用的钩子：
- pre-commit：提交前运行
- post-commit：提交后运行
- pre-push：推送前运行

示例（pre-commit钩子）：
```bash
#!/bin/sh
# .git/hooks/pre-commit

npm run lint

# 如果lint失败，阻止提交
if [ $? -ne 0 ]; then
  echo "Linting failed. Commit aborted."
  exit 1
fi
```

