/**
 * --- 问题描述 ---
 *
 * 给出一组异步任务方法，和允许同时执行的个数，实现一个方法，用于并发执行异步任务
 *
 * --- 说明 ---
 *
 * - 当有任务执行完毕后，自动补充任务，始终保持正在执行的任务有 `concurrency` 个
 * - 返回 { resolved: [], rejected: [] }
 *
 */

async function parallel(tasks, concurrency) {
    // TODO
    let tmp = tasks.splice(0, concurrency)
    
}

/*******测试部分*******/
module.exports = async function doTest() {
    try {
        const child_process = require('child_process');
        const fs = require('fs');
        const path = require('path');
        const util = require('util');
        const readFile = util.promisify(fs.readFile);
        const exec = util.promisify(child_process.exec);

        const tasks = [
            () => readFile(__filename, 'utf-8'),
            () => Promise.resolve('foo'),
            () => exec('npm -v'),
            () => readFile(path.join(__dirname, '../package.json'), 'utf-8'),
            () => process.cpuUsage(),
            () => exec('node -v'),
            () => Promise.reject(new Error('bar')),
            () => exec('ls -al'),
            () => new Promise(resolve => process.nextTick(resolve)),
            () => exec('whoami')
        ];
        const { resolved, rejected } = await parallel(tasks, 3);
        assert.equal(resolved.length, 9);
        assert.equal(rejected.length, 1);
        return '通过';
    } catch (err) {
        return '不通过';
    }
};