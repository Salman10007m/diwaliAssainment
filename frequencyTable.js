const { areEqual } = require("./areEqual");

function frequencyTable(input) {
    const result = {};
    for (const elements of input) {
        // if (!(elements in result)) result[elements] = 0;
        // result[elements] += 1;
        result[elements] = (result[elements] ?? 0) + 1;
    }
    return result;
}

function test(message, expected, input) {
    const actual = frequencyTable(input);
    const isPassed = areEqual(actual, expected) ? "✅" : `❌`;
    console.log(`${isPassed} | ${message}`);
}

function main() {
    test(
        "exercise Example",
        {
            apple: 3,
            banana: 2,
            orange: 1,
        },
        ["apple", "banana", "apple", "apple", "orange", "banana"],
    );
    test(
        "exercise Example 2",
        {
            apple: 3,
            banana: 1,
            orange: 2,
        },
        ["apple", "orange", "apple", "apple", "orange", "banana"],
    );
}

main();
