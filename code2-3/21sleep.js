function sleep(time) {
    let start = new Date().getTime()
    let end;
    while (true) {
        end = new Date().getTime()
        console.log(`end-start=${end - start}`)
        if (end - start > time) break
    }
    return 'end'
}

function sleep2(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve()
        }, time)
    })
}

async function foo(time){
    console.log('start')
    await sleep2(time)
    console.log('end')
}

// console.log('start')
// sleep(1000)
foo(1000)
// console.log('end')