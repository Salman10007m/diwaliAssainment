const { areEqual } = require("./areEqual");

function frequencyTable(input) {
    const result = {};
    for (const elements of input) {
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
        "frequency of numbers",
        {
            1: 3,
            2: 1,
            3: 3,
            4: 1,
        },
        [1, 3, 1, 1, 3, 2, 3, 4],
    );
}

main();
