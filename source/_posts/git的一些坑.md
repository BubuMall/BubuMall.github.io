---
title: git的一些坑
date: 2023-03-16 10:23:24
tags:
  - git
categories:
  - 技术
---

今天弄项目，因为电脑有2个github账号，跟着相关教程配置了ssh的设置，~~但是还是出了问题~~**(结果原因是github的权限设置，要拉取最新才能push)**

以下都是费时间的坑（我菜）

### git 回滚版本

**我要回到过去！**

```git
# 撤销 commit 操作
git reset --soft HEAD~1 # git reset --soft commit_id
# 撤销 commit 和 add 操作
git reset --mixed HEAD~1 # git reset --mixed commit_id
# 撤销 commit 和 add 操作同时撤销本地已追踪内容的修改
git reset --hard HEAD~1 # git reset --hard commit_id
```



### github PR合并commit

***pr太多commit了，不好看***

在 Git 中，这种操作就叫做 **变基（rebase）**。 你可以使用 `rebase` 命令将提交到某一分支上的所有修改都移至另一分支上，就好像“重新播放”一样。

**变基的风险**

呃，奇妙的变基也并非完美无缺，要用它得遵守一条准则：

***如果提交存在于你的仓库之外，而别人可能基于这些提交进行开发，那么不要执行变基。***

ps:

- 在执行 `git rebase` 命令之前，请确保当前分支是最新的，并且没有未提交的更改。
- 在执行 `git rebase` 命令之后，请确保你的修改没有破坏代码的正确性，并且没有冲突。
- 在执行 `git rebase` 命令之后，如果你想取消 rebase，可以使用 `git rebase --abort` 命令。

例子：

```
#找到需要合并的commit的SHA值。可以在GitHub上的提交历史记录中找到

git rebase -i [commit的hash值]

```

这时会进入一个交互式编辑器，显示需要合并的 commit 列表

```
pick abcde commit message 1
squash fghij commit message 2
squash klmno commit message 3
```

将除第一个 commit 以外的所有命令从 **pick 改为 squash**
保存并退出编辑器，Git 会自动合并 commit，并弹出一个编辑器，让你编辑合并后的 commit message

最后，通过push操作把本地分支推送到远程

```
git push origin <branch name> --force
```



### **git 合并分支**

**想要把之前的版本合并到现版本**

1. 从主分支（通常是 `master` 分支）创建一个新的分支（例如 `feature-branch`），并在该分支上进行开发。

2. 在 `feature-branch` 分支上进行更改和提交，直到完成所需的功能或修复。

3. 将主分支更新到最新版本，以确保没有与 `feature-branch` 分支冲突的更改。

     ```
       git checkout master
       git pull
     ```

4. 将 feature-branch 分支合并到主分支上。

     ```
     git merge feature-branch
     ```

     

5. 如果存在冲突，需要解决冲突并提交更改。在解决冲突之后，使用以下命令完成合并：

     ```
       git add .
       git commit
     ```

6. 推送主分支和 `feature-branch` 分支的更改。

     ```
       git push origin master
       git push origin feature-branch
     ```

这样，你就成功地将 `feature-branch` 分支合并到主分支上了。


### 删除 Git 中的所有提交历史记录

```git
# 创建 orphan 分支
git checkout --orphan [分支名]

# 添加需要上传文件
git add .

# 提交更改
git commit -m "Initial"

# 删除需要清空提交记录的分支
git branch -D master

# 将当前分支重命名为需要清空提交记录的分支名
git branch -m master

# 强制更新存储库
git push -f origin master
```

### commit 常用 type

| type     | 含义                                   |
| :------- | :------------------------------------- |
| feat     | 新功能                                 |
| fix      | 修复 bug                               |
| docs     | 修改文档                               |
| style    | 代码格式修改                           |
| refactor | 重构（即不是新增功能，也不是修复 bug） |
| perf     | 更改代码以提高性能                     |
| test     | 增加测试                               |
| build    | 构建过程或辅助工具的变动               |
| ci       | 修改项目持续集成流程                   |
| chore    | 其他类型的提交                         |
| revert   | 恢复上一次提交                         |
