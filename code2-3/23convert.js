let list = [
    {
        id: 0,
        val: 0,
        parentId: null,
    },
    {
        id: 1,
        val: 1,
        parentId: 0
    },
    {
        id: 2,
        val: 2,
        parentId: 1
    },
    {
        id: 3,
        val: 3,
        parentId: 1
    },
    {
        id: 4,
        val: 4,
        parentId: 2
    },
    {
        id: 5,
        val: 5,
        parentId: 0
    }
]

const result1 = convert(list)
const result = listToTree(list)
const result2 = listToTree2(list)
console.log(result1)
console.log(result)
console.log(result2)

function convert(list) {
    const res = []
    const map = list.reduce((res, v) => (res[v.id] = v, res), {})
    for (const item of list) {
        if (item.parentId === null) {
            res.push(item)
            continue
        }
        if (item.parentId in map) {
            const parent = map[item.parentId]
            parent.children = parent.children || []
            parent.children.push(item)
        }
    }
    return res
}

function listToTree(oldArr) {
    oldArr.forEach(element => {
        let parentId = element.parentId;
        if (parentId !== null) {
            oldArr.forEach(ele => {
                if (ele.id == parentId) {
                    if (!ele.children) {
                        ele.children = [];
                    }
                    ele.children.push(element);
                }
            });
        }
    });
    oldArr = oldArr.filter(ele => ele.parentId === null);
    return oldArr;
}


function listToTree2(list) {
    function convert2(list, parentId) {
        let res = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].parentId === parentId) {
                let itemChildren = convert2(list, list[i].id)
                if (itemChildren.length) list[i].children = itemChildren;
                res.push(list[i])
            }
        }
        return res;
    }
    return convert2(list, null)
}
