---
title: git 概念及基础
date: 2020-03-03
categories:
  - git
tags:
  - git
---

::: tip
git 概念及基础
:::

<!-- more -->

## 版本控制

- 是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统
- 可以将某个文件回溯到之前的状态，甚至将整个项目回退到过去某一个时间点状态可以比较文件细节变化，查出谁修改了某个地方，从而找出怪异问题出现的原因
- 集中化的版本控制系统：如 cvs，subversio(svn)以及 perforce 等都有一个单一烦人集中管理服务器，保存所有文件的修订版本，协同工作的人都看可以通过客户端连接到这个服务器，取出最新或者提交更新，svn 因为每次存的都是差异，需要的硬盘空间相对小一点，回滚的速度很慢
  - 优点：代码存在单一服务器上，便于项目的管理
  - 缺点： 服务器宕机员工代码得不到保障，服务器炸了，整个项目的历史记录都会丢失
- 分布式的版本控制系统 git，客户端并不是只提取最新版本的文件快照，而是代码仓库完整的镜像下下来，就算发生故障，事后都可以用任何一个镜像出来的本地仓库恢复，每一次的提取操作，实际上都是一次对代码仓库的完整备份，分布式的版本控制系统在管理项目是，存放的不是项目版本与版本之间的差异，它存储的事索引所需的磁盘空间很少，所以每个客户端都可以保存下项目的历史记录，git 每次存的都是项目的完整快照，需要的硬盘空间相对大一点，git 团队会对项目进行压缩，不会大很多，git 的回滚速度很快

## git 基本

- 安装，使用淘宝镜像下载
- 初始化：
  - `git config --global user.name ""`
  - `git config --global user.email`
  - 查看当前用户配置 `git config --global --list`
  - 查看系统配置 `git config --system --list`
- 区域:
  - 工作区
  - 暂存区
  - 版本库
- 对象
  - git 对象: `key:value` 组成的键值对，key 是 value 对应的哈希，键值对是一个 blob 类型
  - 树形象
  - 提交对象

## 底层概念

### 基础 linux 命令

- `clear` 清除屏幕
- `echo` 相当于 `console.log()`,创建文件并输出内容 `echo 'abc' >test.txt`
- `ll` 将当前目录展开
- `find 目录名`：将对应目录下的子孙文件&子孙目录展开
- `find 目录名 -type f`:将对应目录下的文件展开
- `rm 文件名` 删除文件
- `mv 源文件 重命名文件` 重命名
- `cat 文件的 url` 查看文件的内容
- `vim 文件的 url`
    按 `i` 进插入模式 进行文件的编辑
    按 `esc` 键&键 进行命令的执行
    `q!` 强制退出(不保存)
    `wq` 保存退出
    `set nu` 设置行号

### 初始化新仓库

- `git init`
- 对现有的某个项目开始用 git 管理，只需到所在项目目录运行 `git init`
- 作用：执行后会出现.git 文件夹，所有 git 需要的数据和资源都在这个目录下
  
### 目录文件

- hook 包含客户端后服务端的钩子脚本
- info 包含一个全局性排除文件
- logs 保存日志信息
- objects 目录存储所有数据内容
- refs 目录存储指向数据(分支)的提交对象的指针
- config 文件包含项目特有的配置选项
- description 用来显示对仓库的描述信息
- HEAD 文件指示目前被检出的分支
- index 文件保存暂存区信息

### git 对象

git 核心部分是一个简单的键值对数据库，你可以向该数据库插入任意类型的内容，他会返回一个键值，通过该键值可以在任意时刻再次检索该内容

向数据库写入内容并返回对应的键值
  ----命令：`echo 'text' | git hash-object -w --stdin`  
  `-w`选项指示 `hash-object` 命令存储数据对象：若不指定此选项则该命令仅仅返回对应的键值  
  `--stdin` 选项指示该命令从标准输入读取内容，若不指定则需在命令尾部给出待存储文件的路径  
  `git hash-object -w 文件路径`存文件 `git hash-object 文件路径`返回文件键值  
  -----返回 该命令输出一个长能为 40 个字符的校验和，这是一个 SHA-1 哈希值

查看 git 是如何存储数据的

  ----命令：`find .git/objects -type f`  
  ------返回 `./git/objects/A/B` 这是 git 存储内容的方式：一个文件对应一条内容

根据键值拉取数据：----命令：`git cat-file -p 4c5cdd3f7e76632060ade0602df7ed76deaea7`  
`-p` 选项可指示该命令自动判断内容的类型，并为我们显示格式友好的内容  ----返回 对应文件的内容  

`-t` 查看文件类型

对一个文件进行简单的版本控制

- 创建一个新文件并将其内容存入数据
  ----命令 `echo 'version 1' > test.txt`
`git hash-object -w test.txt`  
  ----返回 `4c5cdd3f7e76632060ade0602df7ed76deaea7`  

- 向文件写入新内容，并再次将其存入数据库  
----命令`echo 'version 2' > test.txt`
`git hash-object -w test.txt`  
----返回 `4c5cdd3f7e76632060ade0602df7ed76deaea7`  

- 查看数据库新内容  
----命令`find ./git/objects -type f`  
`git cat-file -p 4c5cdd3f7e76632060ade0602df7ed76deaea7` 返回原内容  
`git cat-file -t 4c5cdd3f7e76632060ade0602df7ed76deaea7` 返回类型

### git 对象问题

- 记住文件的每一个版本对应的 SHA-1 值不现实
- 在 git 中，文件名并没有保存我们仅保存了文件的内容
- 解决方法：树对象

### 树对象

能解决文件名保存的问题，也允许将多个文件组织在 一起，git 以一种 UNIx 文件系统的方式存储内容，所有内容都以树对象和数据对象 git 对象的形式存储，一个树对象包含了一条或多条记录一个树对象可以包含另一个树对象

- 查看树对象
---命令：`git cat-file -p master^{tree}`

- 构建树对象
可以通过`update-index`,`write-tree`,`read-tree`等命令构建树对象并塞入暂存区
- 查看暂存区： `git ls-files -s`
- `git update-index --add --cacheinfo 100644 4c5cdd3f7e76632060ade0602df7ed76deaea7 test.txt`: `--add`此前该文件并不在暂存区，首次需要--add，`--cacheinfo`因为将要添加的文件位于 git 数据库中，而不是当前目录下，所以需要
  - `git write-tree`将树对象存入数据库中 文件模式为：100644，表示这是一个普通文件，100755，表示一个科执行文件，120000，表示一个符号链接，
  - `git read-tree --prefix=bak 06e21bb0105e2de6c846725a9a7172f57dd1af96` 可以把树对象读入暂存区

### 提交对象

可以调用 commit-tree 命令创建一个提交对象，为此需要指定一个树对象的 SHA-1 值，以及该提交的父提交对象（如果没有的话 第一次将暂存区做快照就没有父对象）

- 创建提交对象`echo 'first commit' | git commit-tree 4c5cdd3f7e76632060ade0602df7ed76deaea7`
- 查看提交对象 `git cat-file -p 4c5cdd3f7e76632060ade0602df7ed76deaea7`
结果格式：

tree 989d3d25d20dfe635cead76d1fd1ceaaff5a6c6e
author bageimonuo <422992902@qq.com> 1587023431 +0800
committer bageimonuo <422992902@qq.com> 1587023431 +0800

- 创建并查看上一次提交对象（父提交对象）：
`echo 'first commit' | git commit-tree 所要提交的hash -p 上一次提交的hash`

- 总结：项目的版本就是一个提交对象，项目的快照就是一个树对象
  工作目录到版本库，版本库到暂存区，add 一次生成一个 git 对象，没有提交，但是交到暂存区，git 也可以管理
