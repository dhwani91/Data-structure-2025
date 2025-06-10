function isPalindrome(s: string): boolean {
    const sanitizedStr = s
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ''); // Use regex to remove non-alphanumeric characters

    const length = sanitizedStr.length;
    let leftPointer = 0;
    let rightPointer = length - 1;

    while (leftPointer < rightPointer) {
        if (sanitizedStr[leftPointer] !== sanitizedStr[rightPointer]) {
            return false; // Early return if characters do not match
        }
        leftPointer++;
        rightPointer--;
    }

    return true; // If all characters matched, it is a palindrome
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("Was it a car or a cat I saw?"));
