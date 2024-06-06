function transformString(str) {
    const len = str.length;

    if (len % 15 === 0) {
        // Perform both operations: reverse and replace with ASCII codes
        let reversed = str.split('').reverse().join('');
        return reversed.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (len % 3 === 0) {
        // Reverse the string
        return str.split('').reverse().join('');
    } else if (len % 5 === 0) {
        // Replace each character with its ASCII code
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // Return the string as is if none of the conditions are met
        return str;
    }
}

// Example usage
console.log(transformString("Hamburger"));  // Output: "regrubmaH"
console.log(transformString("Pizza"));      // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));  // Output: "eikooCpihCetalocohC"
