let list = [
    { id: 1, name: '部门 A', parentId: 0 },
    { id: 2, name: '部门 B', parentId: 0 },
    { id: 3, name: '部门 C', parentId: 1 },
    { id: 4, name: '部门 D', parentId: 1 },
    { id: 5, name: '部门 E', parentId: 2 },
    { id: 6, name: '部门 F', parentId: 3 },
    { id: 7, name: '部门 G', parentId: 2 },
    { id: 8, name: '部门 H', parentId: 4 }];
const result = convert(list);// 转换后的结果如下 
let result =
    [
        {
            id: 1,
            name: '部门 A',
            parentId: 0,
            children: [
                {
                    id: 3,
                    name: '部门 C',
                    parentId: 1,
                    children: [
                        {
                            id: 6,
                            name: '部门 F',
                            parentId: 3
                        }, {
                            id: 16,
                            name: '部门 L',
                            parentId: 3
                        }
                    ]
                },
                {
                    id: 4,
                    name: '部门 D',
                    parentId: 1,
                    children: [
                        {
                            id: 8,
                            name: '部门 H',
                            parentId: 4
                        }
                    ]
                }
            ]
        },];

function convert(list) {
    const res = []
    const map = list.reduce((res, v) => (res[v.id] = v, res), {})
    for (const item of list) {
        if (item.parentId === 0) {
            res.push(item)
            Continue
        }
        if (item.parentId in map) {
            const parent = map[item.parentId]
            parent.children = parent.children || []
            parent.children.push(item)
        }
    }
    return res
}