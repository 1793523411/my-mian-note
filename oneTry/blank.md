`<meta>` 标签提供了 HTML 文档的元数据。元数据不会显示在客户端，但是会被浏览器解析,通常位于 `<head>` 区域内

META 元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者及其他元数据

元数据可以被使用浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 Web 服务调用

在 HTML5 中，有一个新的 charset 属性，它使字符集的定义更加容易

```html
<meta charset="UTF-8" />
```

实例 1 - 定义文档关键词，用于搜索引擎：

```html
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript" />
```

实例 2 - 定义 web 页面描述：

```html
<meta name="description" content="Free Web tutorials on HTML and CSS" />
```

实例 3 - 定义页面作者：

```html
<meta name="author" content="Hege Refsnes" />
```

实例 4 - 每 30 秒刷新页面：

```html
<meta http-equiv="refresh" content="30" />
```

其他一些字段

```
charset：character_set  定义文档的字符编码。
content: text 定义与 http-equiv 或 name 属性相关的元信息。
http-equiv：content-type | default-style | refresh  把 content 属性关联到 HTTP 头部
name: application-name| author| description| generator| keywords  把 content 属性关联到一个名称
scheme: format/URI  HTML5不支持。 定义用于翻译 content 属性值的格式。
```
