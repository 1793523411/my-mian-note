new (function(s){
    if(!arguments.length || !s) return null;
    if("" == s) return 0;
    var l = 0;
    for (let i = 0; i < s.length; i++) {
        console.log(s.charCodeAt(i))
        if(s.charCodeAt(i) > 255) l += 2;
        else l += 1
    } 
    console.log(l)
})("hello worldas哈")