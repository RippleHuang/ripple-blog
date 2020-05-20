(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{646:function(v,_,e){"use strict";e.r(_);var t=e(4),i=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",[v._v("git 概念及基础")])]),v._v(" "),e("h2",{attrs:{id:"版本控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[v._v("#")]),v._v(" 版本控制")]),v._v(" "),e("ul",[e("li",[v._v("是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统")]),v._v(" "),e("li",[v._v("可以将某个文件回溯到之前的状态，甚至将整个项目回退到过去某一个时间点状态可以比较文件细节变化，查出谁修改了某个地方，从而找出怪异问题出现的原因")]),v._v(" "),e("li",[v._v("集中化的版本控制系统：如 cvs，subversio(svn)以及 perforce 等都有一个单一烦人集中管理服务器，保存所有文件的修订版本，协同工作的人都看可以通过客户端连接到这个服务器，取出最新或者提交更新，svn 因为每次存的都是差异，需要的硬盘空间相对小一点，回滚的速度很慢\n"),e("ul",[e("li",[v._v("优点：代码存在单一服务器上，便于项目的管理")]),v._v(" "),e("li",[v._v("缺点： 服务器宕机员工代码得不到保障，服务器炸了，整个项目的历史记录都会丢失")])])]),v._v(" "),e("li",[v._v("分布式的版本控制系统 git，客户端并不是只提取最新版本的文件快照，而是代码仓库完整的镜像下下来，就算发生故障，事后都可以用任何一个镜像出来的本地仓库恢复，每一次的提取操作，实际上都是一次对代码仓库的完整备份，分布式的版本控制系统在管理项目是，存放的不是项目版本与版本之间的差异，它存储的事索引所需的磁盘空间很少，所以每个客户端都可以保存下项目的历史记录，git 每次存的都是项目的完整快照，需要的硬盘空间相对大一点，git 团队会对项目进行压缩，不会大很多，git 的回滚速度很快")])]),v._v(" "),e("h2",{attrs:{id:"git-基本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-基本"}},[v._v("#")]),v._v(" git 基本")]),v._v(" "),e("ul",[e("li",[v._v("安装，使用淘宝镜像下载")]),v._v(" "),e("li",[v._v("初始化：\n"),e("ul",[e("li",[e("code",[v._v('git config --global user.name ""')])]),v._v(" "),e("li",[e("code",[v._v("git config --global user.email")])]),v._v(" "),e("li",[v._v("查看当前用户配置 "),e("code",[v._v("git config --global --list")])]),v._v(" "),e("li",[v._v("查看系统配置 "),e("code",[v._v("git config --system --list")])])])]),v._v(" "),e("li",[v._v("区域:\n"),e("ul",[e("li",[v._v("工作区")]),v._v(" "),e("li",[v._v("暂存区")]),v._v(" "),e("li",[v._v("版本库")])])]),v._v(" "),e("li",[v._v("对象\n"),e("ul",[e("li",[v._v("git 对象: "),e("code",[v._v("key:value")]),v._v(" 组成的键值对，key 是 value 对应的哈希，键值对是一个 blob 类型")]),v._v(" "),e("li",[v._v("树形象")]),v._v(" "),e("li",[v._v("提交对象")])])])]),v._v(" "),e("h2",{attrs:{id:"底层概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#底层概念"}},[v._v("#")]),v._v(" 底层概念")]),v._v(" "),e("h3",{attrs:{id:"基础-linux-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础-linux-命令"}},[v._v("#")]),v._v(" 基础 linux 命令")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("clear")]),v._v(" 清除屏幕")]),v._v(" "),e("li",[e("code",[v._v("echo")]),v._v(" 相当于 "),e("code",[v._v("console.log()")]),v._v(",创建文件并输出内容 "),e("code",[v._v("echo 'abc' >test.txt")])]),v._v(" "),e("li",[e("code",[v._v("ll")]),v._v(" 将当前目录展开")]),v._v(" "),e("li",[e("code",[v._v("find 目录名")]),v._v("：将对应目录下的子孙文件&子孙目录展开")]),v._v(" "),e("li",[e("code",[v._v("find 目录名 -type f")]),v._v(":将对应目录下的文件展开")]),v._v(" "),e("li",[e("code",[v._v("rm 文件名")]),v._v(" 删除文件")]),v._v(" "),e("li",[e("code",[v._v("mv 源文件 重命名文件")]),v._v(" 重命名")]),v._v(" "),e("li",[e("code",[v._v("cat 文件的 url")]),v._v(" 查看文件的内容")]),v._v(" "),e("li",[e("code",[v._v("vim 文件的 url")]),v._v("\n按 "),e("code",[v._v("i")]),v._v(" 进插入模式 进行文件的编辑\n按 "),e("code",[v._v("esc")]),v._v(" 键&键 进行命令的执行\n"),e("code",[v._v("q!")]),v._v(" 强制退出(不保存)\n"),e("code",[v._v("wq")]),v._v(" 保存退出\n"),e("code",[v._v("set nu")]),v._v(" 设置行号")])]),v._v(" "),e("h3",{attrs:{id:"初始化新仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化新仓库"}},[v._v("#")]),v._v(" 初始化新仓库")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("git init")])]),v._v(" "),e("li",[v._v("对现有的某个项目开始用 git 管理，只需到所在项目目录运行 "),e("code",[v._v("git init")])]),v._v(" "),e("li",[v._v("作用：执行后会出现.git 文件夹，所有 git 需要的数据和资源都在这个目录下")])]),v._v(" "),e("h3",{attrs:{id:"目录文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录文件"}},[v._v("#")]),v._v(" 目录文件")]),v._v(" "),e("ul",[e("li",[v._v("hook 包含客户端后服务端的钩子脚本")]),v._v(" "),e("li",[v._v("info 包含一个全局性排除文件")]),v._v(" "),e("li",[v._v("logs 保存日志信息")]),v._v(" "),e("li",[v._v("objects 目录存储所有数据内容")]),v._v(" "),e("li",[v._v("refs 目录存储指向数据(分支)的提交对象的指针")]),v._v(" "),e("li",[v._v("config 文件包含项目特有的配置选项")]),v._v(" "),e("li",[v._v("description 用来显示对仓库的描述信息")]),v._v(" "),e("li",[v._v("HEAD 文件指示目前被检出的分支")]),v._v(" "),e("li",[v._v("index 文件保存暂存区信息")])]),v._v(" "),e("h3",{attrs:{id:"git-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-对象"}},[v._v("#")]),v._v(" git 对象")]),v._v(" "),e("p",[v._v("git 核心部分是一个简单的键值对数据库，你可以向该数据库插入任意类型的内容，他会返回一个键值，通过该键值可以在任意时刻再次检索该内容")]),v._v(" "),e("p",[v._v("向数据库写入内容并返回对应的键值\n----命令："),e("code",[v._v("echo 'text' | git hash-object -w --stdin")]),e("br"),v._v(" "),e("code",[v._v("-w")]),v._v("选项指示 "),e("code",[v._v("hash-object")]),v._v(" 命令存储数据对象：若不指定此选项则该命令仅仅返回对应的键值"),e("br"),v._v(" "),e("code",[v._v("--stdin")]),v._v(" 选项指示该命令从标准输入读取内容，若不指定则需在命令尾部给出待存储文件的路径"),e("br"),v._v(" "),e("code",[v._v("git hash-object -w 文件路径")]),v._v("存文件 "),e("code",[v._v("git hash-object 文件路径")]),v._v("返回文件键值"),e("br"),v._v("\n-----返回 该命令输出一个长能为 40 个字符的校验和，这是一个 SHA-1 哈希值")]),v._v(" "),e("p",[v._v("查看 git 是如何存储数据的")]),v._v(" "),e("p",[v._v("----命令："),e("code",[v._v("find .git/objects -type f")]),e("br"),v._v("\n------返回 "),e("code",[v._v("./git/objects/A/B")]),v._v(" 这是 git 存储内容的方式：一个文件对应一条内容")]),v._v(" "),e("p",[v._v("根据键值拉取数据：----命令："),e("code",[v._v("git cat-file -p 4c5cdd3f7e76632060ade0602df7ed76deaea7")]),e("br"),v._v(" "),e("code",[v._v("-p")]),v._v(" 选项可指示该命令自动判断内容的类型，并为我们显示格式友好的内容  ----返回 对应文件的内容")]),v._v(" "),e("p",[e("code",[v._v("-t")]),v._v(" 查看文件类型")]),v._v(" "),e("p",[v._v("对一个文件进行简单的版本控制")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("创建一个新文件并将其内容存入数据\n----命令 "),e("code",[v._v("echo 'version 1' > test.txt")]),v._v(" "),e("code",[v._v("git hash-object -w test.txt")]),e("br"),v._v("\n----返回 "),e("code",[v._v("4c5cdd3f7e76632060ade0602df7ed76deaea7")])])]),v._v(" "),e("li",[e("p",[v._v("向文件写入新内容，并再次将其存入数据库"),e("br"),v._v("\n----命令"),e("code",[v._v("echo 'version 2' > test.txt")]),v._v(" "),e("code",[v._v("git hash-object -w test.txt")]),e("br"),v._v("\n----返回 "),e("code",[v._v("4c5cdd3f7e76632060ade0602df7ed76deaea7")])])]),v._v(" "),e("li",[e("p",[v._v("查看数据库新内容"),e("br"),v._v("\n----命令"),e("code",[v._v("find ./git/objects -type f")]),e("br"),v._v(" "),e("code",[v._v("git cat-file -p 4c5cdd3f7e76632060ade0602df7ed76deaea7")]),v._v(" 返回原内容"),e("br"),v._v(" "),e("code",[v._v("git cat-file -t 4c5cdd3f7e76632060ade0602df7ed76deaea7")]),v._v(" 返回类型")])])]),v._v(" "),e("h3",{attrs:{id:"git-对象问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-对象问题"}},[v._v("#")]),v._v(" git 对象问题")]),v._v(" "),e("ul",[e("li",[v._v("记住文件的每一个版本对应的 SHA-1 值不现实")]),v._v(" "),e("li",[v._v("在 git 中，文件名并没有保存我们仅保存了文件的内容")]),v._v(" "),e("li",[v._v("解决方法：树对象")])]),v._v(" "),e("h3",{attrs:{id:"树对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#树对象"}},[v._v("#")]),v._v(" 树对象")]),v._v(" "),e("p",[v._v("能解决文件名保存的问题，也允许将多个文件组织在 一起，git 以一种 UNIx 文件系统的方式存储内容，所有内容都以树对象和数据对象 git 对象的形式存储，一个树对象包含了一条或多条记录一个树对象可以包含另一个树对象")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("查看树对象\n---命令："),e("code",[v._v("git cat-file -p master^{tree}")])])]),v._v(" "),e("li",[e("p",[v._v("构建树对象\n可以通过"),e("code",[v._v("update-index")]),v._v(","),e("code",[v._v("write-tree")]),v._v(","),e("code",[v._v("read-tree")]),v._v("等命令构建树对象并塞入暂存区")])]),v._v(" "),e("li",[e("p",[v._v("查看暂存区： "),e("code",[v._v("git ls-files -s")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("git update-index --add --cacheinfo 100644 4c5cdd3f7e76632060ade0602df7ed76deaea7 test.txt")]),v._v(": "),e("code",[v._v("--add")]),v._v("此前该文件并不在暂存区，首次需要--add，"),e("code",[v._v("--cacheinfo")]),v._v("因为将要添加的文件位于 git 数据库中，而不是当前目录下，所以需要")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("git write-tree")]),v._v("将树对象存入数据库中 文件模式为：100644，表示这是一个普通文件，100755，表示一个科执行文件，120000，表示一个符号链接，")]),v._v(" "),e("li",[e("code",[v._v("git read-tree --prefix=bak 06e21bb0105e2de6c846725a9a7172f57dd1af96")]),v._v(" 可以把树对象读入暂存区")])])])]),v._v(" "),e("h3",{attrs:{id:"提交对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交对象"}},[v._v("#")]),v._v(" 提交对象")]),v._v(" "),e("p",[v._v("可以调用 commit-tree 命令创建一个提交对象，为此需要指定一个树对象的 SHA-1 值，以及该提交的父提交对象（如果没有的话 第一次将暂存区做快照就没有父对象）")]),v._v(" "),e("ul",[e("li",[v._v("创建提交对象"),e("code",[v._v("echo 'first commit' | git commit-tree 4c5cdd3f7e76632060ade0602df7ed76deaea7")])]),v._v(" "),e("li",[v._v("查看提交对象 "),e("code",[v._v("git cat-file -p 4c5cdd3f7e76632060ade0602df7ed76deaea7")]),v._v("\n结果格式：")])]),v._v(" "),e("p",[v._v("tree 989d3d25d20dfe635cead76d1fd1ceaaff5a6c6e\nauthor bageimonuo "),e("a",{attrs:{href:"mailto:422992902@qq.com"}},[v._v("422992902@qq.com")]),v._v(" 1587023431 +0800\ncommitter bageimonuo "),e("a",{attrs:{href:"mailto:422992902@qq.com"}},[v._v("422992902@qq.com")]),v._v(" 1587023431 +0800")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("创建并查看上一次提交对象（父提交对象）：\n"),e("code",[v._v("echo 'first commit' | git commit-tree 所要提交的hash -p 上一次提交的hash")])])]),v._v(" "),e("li",[e("p",[v._v("总结：项目的版本就是一个提交对象，项目的快照就是一个树对象\n工作目录到版本库，版本库到暂存区，add 一次生成一个 git 对象，没有提交，但是交到暂存区，git 也可以管理")])])])])}),[],!1,null,null,null);_.default=i.exports}}]);