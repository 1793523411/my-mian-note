## list 转树

> 来自今天的一道面试题

给一个数组：

```js
let list = [
  {
    id: 0,
    val: 0,
    parentId: null,
  },
  {
    id: 1,
    val: 1,
    parentId: 0,
  },
  {
    id: 2,
    val: 2,
    parentId: 1,
  },
  {
    id: 3,
    val: 3,
    parentId: 1,
  },
  {
    id: 4,
    val: 4,
    parentId: 2,
  },
  {
    id: 5,
    val: 5,
    parentId: 0,
  },
];
```

转成树结构

思路一：现在原数组的基础上添加 children 字段，这样就保证了正确的 item 在对应的数组的 item 的 children 里，显然这还存在多余的数据，再用 filter 吧根节点过滤掉即可,如果要求不修改原数组，可以深拷贝一下

```js
function listToTree(list) {
  list.forEach((element) => {
    let parentId = element.parentId;
    if (parentId !== null) {
      list.forEach((ele) => {
        if (ele.id == parentId) {
          if (!ele.children) {
            ele.children = [];
          }
          ele.children.push(element);
        }
      });
    }
  });
  list = list.filter((ele) => ele.parentId === null);
  return list;
}
```

思路二：这道题的关键点在与在逻辑中获取到当前元素的父元素，所以可以用一个 map 来存这些父项，以此在对当前元素进行操作时可以随时获取到父项的引用，然后遍历 list 对根元素是一种操作，非根元素将自身插入到父项的 children 中，父项可以从前面 map 中找

```js
function convert(list) {
  const res = [];
  const map = list.reduce((res, v) => ((res[v.id] = v), res), {});
  for (const item of list) {
    if (item.parentId === null) {
      res.push(item);
      continue;
    }
    if (item.parentId in map) {
      const parent = map[item.parentId];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return res;
}
```

思路三：使用递归

```js
function listToTree2(list) {
  function convert2(list, parentId) {
    let res = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].parentId === parentId) {
        let itemChildren = convert2(list, list[i].id);
        if (itemChildren.length) item.children = itemChildren;
        res.push(list[i]);
      }
    }
    return res;
  }
  return convert2(list, null);
}
```

这道题的递归让我想到了另外一道题：dom 转为对象

大致是这样一个要求:

```html
<div id="jsContainer">
  <ul class="js-test" id="jsParent">
    <li data-index="0">1</li>
    <li data-index="1">2</li>
  </ul>
  <span style="font-weight: bold;">3</span>
  4
</div>
```

转为

```js
{
  "tag": "DIV",
  "attributes": {
    "id": "jsContainer"
  },
  "children": [
    "",
    {
      "tag": "UL",
      "attributes": {
        "class": "js-test"
      },
      "children": [
        "",
        {
          "tag": "LI",
          "attributes": {
            "data-index": "0"
          },
          "children": [
            "1"
          ]
        },
        "",
        {
          "tag": "LI",
          "attributes": {
            "data-index": "1"
          },
          "children": [
            "2"
          ]
        },
        ""
      ]
    },
    "",
    {
      "tag": "SPAN",
      "attributes": {
        "style": "font-weight: bold;"
      },
      "children": [
        "3"
      ]
    },
    "4"
  ]
}
```

实现如下

```html
<body>
  <div id="jsContainer">
    <ul class="js-test" id="jsParent">
      <li data-index="0">1</li>
      <li data-index="1">2</li>
    </ul>
    <span style="font-weight: bold;">3</span>
    4
  </div>
  <script>
    let father = document.querySelector("#jsContainer");

    console.log(father.attributes);
    console.log(father.childNodes);
    console.log(father.childNodes[0].nodeName);
    let res = {};

    function htmlToDom(father) {
      let obj = {};
      obj.tag = father.tagName;
      let res = {};
      console.log(father.data);
      console.log(father.text);
      if (father.nodeName !== "#text") {
        for (const [key, value] of Array(father.attributes)) {
          console.log(key.name);
          res[key.name] = key.nodeValue;
        }
        obj.attributes = res;
      } else {
        return father.data.replace(/\s+/g, "");
      }

      obj.children = [];
      father.childNodes.forEach((child) => obj.children.push(htmlToDom(child)));
      return obj;
    }

    console.log(htmlToDom(father));
    console.log(JSON.stringify(htmlToDom(father), "", "  "));
  </script>
</body>
```
