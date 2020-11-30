##  git 与 与 svn 的区别在哪里

git 和 svn 最大的区别在于 **git 是分布式的，而 svn 是集中式的**。因此我们不能再离线的情况下使用 svn。如果服务器出现问题，我们就没有办法使用 svn 来提交我们的代码。svn 中的分支是整个版本库的复制的一份完整目录，而 git 的分支是指针指向某次提交，因此**git 的分支创建更加开销更小并且分支上的变化不会影响到其他人**。**svn 的分支变化会影响到所有的人**。svn 的指令相对于 git 来说要简单一些，比 git 更容易上手。

## 经常使用的 git 命令

```
git init // 新建 git 代码库
git add // 添加指定文件到暂存区
git rm // 删除工作区文件，并且将这次删除放入暂存区
git commit -m [message] // 提交暂存区到仓库区
git branch // 列出所有分支
git checkout -b [branch] // 新建一个分支，并切换到该分支
git status // 显示有变更的文件
```

##  git pull 和 和 git fetch 的区别

git fetch 只是将远程仓库的变化下载下来，并没有和本地分支合并。

git pull 会将远程仓库的变化下载下来，并和当前分支合并。

## git rebase 和 和 git merge 的区别

git merge 和 git rebase 都是用于分支合并，关键在 commit 记录的处理上不同。
git merge 会新建一个新的 commit 对象，然后两个分支以前的 commit 记录都指向这个新commit 记录。这种方法会保留之前每个分支的 commit 历史。

git rebase 会先找到两个分支的第一个共同的 commit 祖先记录，然后将提取当前分支这之后的所有 commit 记录，然后将这个 commit 记录添加到目标分支的最新提交后面。经过这个合并后，两个分支合并后的commit 记录就变为了线性的记录了。