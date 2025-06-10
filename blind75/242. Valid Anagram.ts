//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
//
//
// Example 1:
//
// Input: s = "anagram", t = "nagaram"
//
// Output: true
//
// Example 2:
//
// Input: s = "rat", t = "car"
//
// Output: false

function isAnagram(s:string, t:string):boolean {
    if (!s && !t) return true;
    if (!s || !t) return false;
    const sMap = new Map();
    for (let letter of s) {
        if (sMap.has(letter)) {
            sMap.set(letter, sMap.get(letter)+1);
        } else {
            sMap.set(letter,1);
        }
    }

    for (let letter of t) {
        if (sMap.has(letter)) {
            const count = sMap.get(letter);
            if (count === 1) {
                sMap.delete(letter);
            } else {
                sMap.set(letter, count - 1);
            }
        } else {
            return false;
        }
    }
    return sMap.size === 0;
}
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));