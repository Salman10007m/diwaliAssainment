const { areEqual } = require("./areEqual");

function test(message, expected, a, b) {
    const actual = areEqual(a, b);
    const isPassed = expected === actual ? "✅" : "❌";
    console.log(`${isPassed} | ${message}`);
}

function integerEqualityTest() {
    test("Same Number should be equal", true, 1, 1);
    test("Different Number should be unequal", false, 2, 1);
    test("Undefined and a number should be unequal", false, null, 1);
    test("Null and a number should be unequal", false, null, 1);
    test("NaN and a number should be unequal", false, NaN, 1);
}

function stringEqualityTest() {
    test("Different string with same value should be equal", true, "a", "a");
    test("Diff string with different value should be unequal", false, "b", "a");
    test("Undefined and a string should be unequal", false, null, "a");
    test("Null and a string should be unequal", false, null, "a");
    test("NaN and a string should be unequal", false, NaN, "a");
}

function arrayEqualityTest() {
    test("Two empty array should be equal", true, [], []);
    test("Two non-empty array with same value should be equal", true, [1], [1]);
    test(
        "Two non-empty nested array should be equal",
        true,
        [[1, 2]],
        [[1, 2]],
    );
    test("Empty array and non-empty array should be unequal", false, [1], []);
    test("Undefined and a empty-array should be unequal", false, null, []);
    test("Null and a empty-array should be unequal", false, null, []);
    test("NaN and a empty-array should be unequal", false, NaN, []);
}

function objectEqualityTest() {
    test("Two empty object should be equal", true, {}, {});
    test(
        "Two non-empty object with same value should be equal",
        true,
        { a: 1 },
        { a: 1 },
    );
    test("Empty obj and non-empty obj should be unequal", false, { a: 1 }, {});
    test("Undefined and a empty-object should be unequal", false, {});
    test("Null and a empty-object should be unequal", false, {});
    test("NaN and a empty-object should be unequal", false, {});
}

function main() {
    integerEqualityTest();
    stringEqualityTest();
    arrayEqualityTest();
    objectEqualityTest();
}

main();
