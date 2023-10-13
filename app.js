function splitAtX(string) {
    // Find the index of the lowercase 'x'
    const xIndex = string.indexOf('x');

    // Check if 'x' exists in the string
    if (xIndex !== -1) {
        // Split the string into two halves
        const beforeX = string.slice(0, xIndex);
        const afterX = string.slice(xIndex + 1);

        // Compare the lengths of the two halves
        if (beforeX.length >= afterX.length) {
            return beforeX; // Return the longer half or the first half if they are equal
        } else {
            return afterX; // Return the longer half
        }
    } else {
        // If 'x' is not found, return the whole string
        return string;
    }
}

module.exports = splitAtX;
