const html_Brower =
    [
        'js css 如何影响页面渲染',
        '两种前端路由',
        '浏览器渲染原理',
        '页面之间通信',
        '浏览器缓存',
        '浏览器存储',
        '事件模型',
        '行内元素和块级元素',
        'url输入发生了啥',
        '浏览器工作原理',
        '内存泄漏',
        '常见的DOM操作',
        '重绘与回流',
        '如何提高SEO',
        'html语义化',
        '讲一下service worker'
    ]

const css = [
    '盒模型',
    '边距重叠',
    'BFC·····',
    '选择器',
    '定位',
    'flex',
    '优先级',
    'css3新特性',
    'css样式隔离',
    '层叠上下文',
    '常见的布局',
    'css性能优化',
    '移动端的像素',
    '幽灵空白节点，li与li之间的空白',
    '媒体查询',
    'div居中',
    '浮动'
]

const javascript = [
    '原型与原型链',
    '继承',
    '变量对象',
    '执行上下文栈',
    '作用域',
    '闭包',
    'this',
    '立即执行函数',
    'instanceof，typeof',
    '数据类型',
    'bind，call，apply',
    '柯里化',
    '垃圾回收',
    '浮点数精度',
    'new实现',
    'promise/异步',
    'ajax ,封装ajax/feth',
    '事件循环',
    '数组-常见Api',
    '数组-原生方法实现',
    '数组-数组扁平化',
    'dom常见操作',
    '变量提升/暂时性死区',
    '解构赋值',
    '箭头函数',
    'es6-let const',
    'es6-map set',
    'es6-迭代器',
    'es6-生成器',
    'es6-proxy',
    'es6-异步解决方案',
    'es6-class',
    'es6-模块加载',
    '模块规范，模块加载'
]

const network = [
    'http协议讲一下',
    '报文结构',
    '请求方法',
    '状态码',
    '头部字段-accept',
    '头部字段-定体包长，不定体包长传输',
    '头部字段-大文件传输',
    '头部字段-表单',
    'http2',
    'http代理',
    'TCP建立与连接',
    'https',
    '跨域',
    '前端安全',
    'cookie',
    'tcp与udp'
]

const react = [
    '为啥喜欢react',
    '生命周期',
    'jsx',
    '讲讲hook',
    'react渲染流程',
    '性能优化',
    'diff算法',
    '虚拟DOM',
    'setState同步异步',
    'react中的数据流和vue对比',
    'react-router使用和原理',
    '讲讲redux使用和原理',
    'redux中间件原理',
    '组件通信',
    '合成事件',
    'fiber是啥',
    '错误处理',
    '组件，高阶组件'
]

const webpack = [
    'webpack由来',
    'loader',
    'plugin',
    'webpack工作流程',
    'source-map',
    'dev-serve和HMR',
    'tree-shaking和sideEffect',
    'webpak4生产环境下默认的优化',
    '提高构建速度',
    '提高打包速度',
    '代码压缩原理',
    '讲讲其他打包工具',
    '代码分包'
]

const other = [
    'SSR/SPA优缺点,原理',
    '跨端原理',
    '小程序跨端',
    '小程序生命周期',
    '讲讲serveless',
    '小程序工作原理',
    '小程序的缓存优化',
    '小程序更新策略',
    '对前端工程化的理解',
    '讲一下express',
    '性能分析：RAIL',
    '讲一下koa2与koa',
    '性能优化手段',
    '图片加载方案',
    '讲一下eggjs',
    '讲一下babel',
    '白屏优化',
    '讲一下微前端',
    '优化动画',
    '讲一下ICE'
]

const handle = [
    '快速排序',
    '冒泡排序',
    '归并排序',
    '选择排序',
    '插入排序',
    '洗牌算法',
    '前中后层序遍历',
    '封装ajax/fetch',
    '二分查找',
    '防抖与节流',
    '实现继承',
    '数组扁平化',
    '数组去重',
    '深拷贝，浅拷贝',
    'instanceof实现',
    '发布订阅模式',
    'JSON.stringfy',
    '手写显示绑定',
    '手写new 和 Object.create()',
    '手写Promise',
    '手写遍历器',
    '手写redux-thunk',
    '手写redux',
    '实现懒加载',
    '实现前端路由',
    '数组api-indexOf',
    '数组api-pop，push',
    '数组api-reduce',
    '数组api-concat',
    '数组api-splice',
    '数组api-filter',
    '数组api-map',
    '数组api-slice'

]

const nodejs = [
    'cluster原理',
    'nodejs事件循环',
    'require原理',
    '模块机制',
    '流机制',
    '守护进程',
    'pipe原理',
    '进程通信',
    '异常处理'
]


let res = []
let obj = {}

function mypush(arr, num) {
    let sign;
    for (let i = 0; i < num; i++) {
        sign = Math.floor(Math.random() * arr.length)
        res.push(arr[sign])
    }
}

mypush(handle, 3)
mypush(html_Brower, 1)
mypush(css, 1)
mypush(javascript, 2)
mypush(network, 1)
mypush(react, 1)
mypush(webpack, 1)
mypush(other, 1)
Math.random() > 0.6 && mypush(nodejs, 1)


let leetcode1 = Math.floor(Math.random() * 66 + 3)
let leetcode2 = Math.floor(Math.random() * 66 + 3)


for (let i = 0; i < res.length; i++) {
    obj[i + 1] = res[i]
}

obj["leetcode(hard忽略)"] = [leetcode1,leetcode2]

console.log(JSON.parse( JSON.stringify(obj,null,4)))

// https://1351581254124810.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/ServerlessLoveStory/mian/