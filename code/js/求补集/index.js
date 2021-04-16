/**
 * --- 问题描述 ---
 *
 * 算出两个数组的补集，数组只包含字符串和数字
 *
 * --- 说明 ---
 *
 * - 补集：如果 b 是 a 的子集，返回存在于 a 不存在于 b 的元素集合，反之返回空集合
 */

 function findComplementarySet(a, b) {
    // TODO
    let sa = new Set(a);
    let sb = new Set(b);
    let res = [...a.filter(x => !sb.has(x)), ...b.filter(x => !sa.has(x))];
    if (res.length === a.length + b.length) {
        return [];
    } else {
        return res.sort();
    }
}
