let xhr = new XMLHttpRequest()
xhr.open('GET','xxx',true)

xhr.onreadystatechange = () => {
    if(xhr.readyState === 2){
        console.log(1)
    }
}

xhr.send()
