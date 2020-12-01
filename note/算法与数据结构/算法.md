
## 动态规划

### 爬楼梯问题

有一座高度是 10 级台阶的楼梯，从下往上走，每跨一步只能向上 1 级或者 2 级台阶。要求用程序来求出一共有多少种走法？

**递归方法分析**

由分析可知，假设我们只差最后一步就能走上第 10 级阶梯，这个时候一共有两种情况，因为每一步只允许走 1 级或 2 级阶梯， 因此分别为从 8 级阶梯和从 9 九级阶梯走上去的情况。因此从 0 到 10 级阶梯的走法数量就等于从 0 到 9 级阶梯的走法数量加上 从 0 到 8 级阶梯的走法数量。依次类推，我们可以得到一个递归关系，递归结束的标志为从 0 到 1 级阶梯的走法数量和从 0 到 2 级阶梯的走法数量。

```js
function getClimbingWays(n) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return getClimbingWays(n - 1) + getClimbingWays(n - 2);
}
```

使用这种方法时整个的递归过程是一个二叉树的结构，因此该方法的**时间复杂度可以近似的看为 O(2^n)，空间复杂度 为递归的深度 O(logn)**

**备忘录方法**

分析递归的方法我们可以发现，其实有很多的计算过程其实是重复的，因此我们可以使用一个数组，将已经计算出的值给 保存下来，每次计算时，先判断计算结果是否已经存在，如果已经存在就直接使用

```js
let map = new Map();
function getClimbingWays(n) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (map.has(n)) {
    return map.get(n);
  } else {
    let value = getClimbingWays(n - 1) + getClimbingWays(n - 2);
    map.set(n, value);
    return value;
  }
}
```

通过这种方式，我们将算法的**时间复杂度降低为 O(n)，但是增加空间复杂度为 O(n)**

**迭代法**

通过观察，我们可以发现每一个值其实都等于它的前面两个值的和，因此我们可以使用自底向上的方式来实现

```js
function getClimbingWays(n) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  let a = 1,
    b = 2,
    temp = 0;
  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
}
```
通过这种方式我们可以将算法的**时间复杂度降低为 O(n)，并且将算法的空间复杂度降低为 O(1)**


## 一些leetcode题目