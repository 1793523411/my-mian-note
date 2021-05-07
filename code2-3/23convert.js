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

const result = convert(list)
console.log(result)

function convert(list) {
    const res = []
    const map = list.reduce((res, v) => (res[v.id] = v, res), {})
    console.log(map)
    for (const item of list) {
        if (item.parentId === 0) {
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