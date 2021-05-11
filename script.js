function reverse(text, result = "") {
    if (text.length === result.length) return result;
    result += text[text.length - 1 - result.length];
    return reverse (text, result);
}

const originalText="hello world";
const reversedText = reverse(originalText);
console.log(reversedText); // dlrow olleh
