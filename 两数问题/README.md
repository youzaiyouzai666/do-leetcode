## 1
[题目](https://leetcode-cn.com/problems/two-sum/)
[题解](https://leetcode-cn.com/problems/two-sum/solution/tu-jie-guan-fang-tui-jian-ti-jie-liang-s-02xs/)

注意：
1. 哈希表中存储的key 是 数组的 value，而不是 target-value的值

根据题意，如果我们使用暴破，会导致时间复杂度为 n^2，这样的代价无疑是很大的。

所以我们很容易想到用哈希表来解决这个问题。

我们遍历到数字 aa 时，用 target 减去 aa，就会得到 bb，若 bb 存在于哈希表中，我们就可以直接返回结果了。若 bb 不存在，那么我们需要将 aa 存入哈希表，好让后续遍历的数字使用。

作者：demigodliu
链接：https://leetcode-cn.com/problems/two-sum/solution/tu-jie-guan-fang-tui-jian-ti-jie-liang-s-02xs/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
