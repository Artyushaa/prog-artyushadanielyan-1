console.log('-----------------------The Hashtag Generator--------------------------->');

{
    let str = "Hello there thanks for trying my Kata";
    function hashtagFunc(str) {
        let newStr = '#' + str.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('')
        return newStr
    }
    console.log(hashtagFunc(str));

}



console.log('------------------------The Hashtag Generator----------------------------->');

{
    function RomanNumerals(num) {
        let RomanNum = {
            M: 1000,
            D: 500,
            C: 100,
            L: 50,
            X: 10,
            V: 5,
            IV: 4,
            I: 1,
        }
        let str = ''
        for (const key in RomanNum) {
            while (num >= RomanNum[key]) {
                str += key
                num -= RomanNum[key]
            }
        }
        return str
    }

    console.log(RomanNumerals(1450));
}


console.log('------------------------Anagram----------------------------->');


function Anagram(s, p) {
    let newStr = [];

    for (let i = 0; i < s.length; i++) {
        if (p.includes(s[i])) {
            let temp = p, cur = true
            for (let j = i; j < i + p.length; j++) {
                if (!temp.includes(s[j])) {
                    cur = false
                    break
                } else {
                    let tempIdx = temp.indexOf(s[j])
                    temp = temp.slice(0, tempIdx) + temp.slice(tempIdx + 1)
                }
            }
            if (cur) {
                newStr.push(i)
            }
        }
    }
    return newStr
}

console.log(Anagram("cbaebabacd", 'abc'));


