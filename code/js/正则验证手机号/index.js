function checkphonenumber(number) {
    if (number == null || number.length != 11) {
        return false
    } else {
        // 移动号段正则表达式
        var pat1 = '^((13[4-9])|(147)|(15[0-2,7-9])|(178)|(18[2-4,7-8]))\\d{8}|(1705)\\d{7}$';
        // 联通号段正则表达式
        var pat2 = '^((13[0-2])|(145)|(15[5-6])|(176)|(18[5,6]))\\d{8}|(1709)\\d{7}$';
        // 电信号段正则表达式
        var pat3 = '^((133)|(153)|(177)|(18[0,1,9])|(149))\\d{8}$';
        // 虚拟运营商正则表达式
        var pat4 = '^((170))\\d{8}|(1718)|(1719)\\d{7}$';
        if (!part1.test(number)) {
            return false
        }
        if (!part2.test(number)) {
            return false
        }
        if (!part3.test(number)) {
            return false
        }
        if (!part4.test(number)) {
            return false
        }
    }
    return true
}