const a = require("./areEqual");

const testCases = [
    {
        value1: NaN,
        value2: NaN,
        expected: false,
        title: "both NaN should be unequal",
    },
    {
        value1: undefined,
        value2: undefined,
        expected: true,
        title: "both undefined should be equal",
    },
    {
        value1: null,
        value2: null,
        expected: true,
        title: "both null should be equal",
    },
    {
        value1: null,
        value2: 1,
        expected: false,
        title: "null and number should be unequal",
    },
    {
        value1: undefined,
        value2: 1,
        expected: false,
        title: "undefined and number should be unequal",
    },
    {
        value1: NaN,
        value2: 1,
        expected: false,
        title: "NaN and number should be unequal",
    },
    {
        value1: 1,
        value2: 1,
        expected: true,
        title: "same Number should be equal",
    },
    {
        value1: 1,
        value2: 2,
        expected: false,
        title: "unEqual Number should be unequal",
    },
    {
        value1: "a",
        value2: "a",
        expected: true,
        title: "Equal String should be equal",
    },
    {
        value1: "a",
        value2: "b",
        expected: false,
        title: "Unequal String should be unequal",
    },
    {
        value1: "a",
        value2: null,
        expected: false,
        title: "null and string should be unequal",
    },
    {
        value1: "a",
        value2: NaN,
        expected: false,
        title: "NaN and string should be unequal",
    },
    {
        value1: "a",
        value2: undefined,
        expected: false,
        title: "undefined and string should be unequal",
    },
    {
        value1: 1,
        value2: "1",
        expected: false,
        title: "string and number should be unequal",
    },
    {
        value1: true,
        value2: true,
        expected: true,
        title: "same boolean should be equal",
    },
    {
        value1: true,
        value2: false,
        expected: false,
        title: "different boolean should be unequal",
    },
    {
        value1: true,
        value2: 1,
        expected: false,
        title: "boolean and number should be unequal",
    },
    {
        value1: true,
        value2: null,
        expected: false,
        title: "boolean and null should be unequal",
    },
    {
        value1: true,
        value2: undefined,
        expected: false,
        title: "boolean and undefined should be unequal",
    },
    {
        value1: true,
        value2: NaN,
        expected: false,
        title: "boolean and NaN should be unequal",
    },
    {
        value1: false,
        value2: "a",
        expected: false,
        title: "boolean and string should be unequal",
    },
    {
        value1: [],
        value2: [],
        expected: true,
        title: "Empty array should be equal",
    },
    {
        value1: null,
        value2: [],
        expected: false,
        title: "null and array should be unequal",
    },
    {
        value1: [],
        value2: [1],
        expected: false,
        title: "empty and non empty array should be unequal",
    },
    {
        value1: [1],
        value2: [1],
        expected: true,
        title: "equal array should be equal",
    },
    {
        value1: [{ a: 2 }],
        value2: [{ a: 2 }],
        expected: true,
        title: "array containing same object should be equal",
    },
    {
        value1: [{ a: 1 }],
        value2: [{ a: 2 }],
        expected: false,
        title: "array containing different object should be unequal",
    },
    {
        value1: [1, { a: 2 }],
        value2: [1, { a: 2 }],
        expected: true,
        title: "array containg same object and number should be equal",
    },
    {
        value1: [1, { a: 2 }],
        value2: [3, { a: 3 }],
        expected: false,
        title: "array containg different object and number should be unequal",
    },
    {
        value1: [[1, 2, [3]]],
        value2: [[1, 2, [3]]],
        expected: true,
        title: "array containing same nested array should be equal",
    },
    {
        value1: [[1, 2, [3]]],
        value2: [[1, 2, [3, 2]]],
        expected: false,
        title: "array containing different nested array should be unequal",
    },
    {
        value1: {},
        value2: {},
        expected: true,
        title: "empty object should be equal",
    },
    {
        value1: {},
        value2: { a: 1 },
        expected: false,
        title: "empty object and non empty object should be unequal",
    },
    {
        value1: null,
        value2: {},
        expected: false,
        title: "null and object should be unequal",
    },
    {
        value1: { a: 1 },
        value2: { a: 1 },
        expected: true,
        title: "equal  objects should be equal",
    },
    {
        value1: { a: 1 },
        value2: { a: 2 },
        expected: false,
        title: "unequal  objects should be unequal",
    },
    {
        value1: { 0: 1, 1: 2 },
        value2: [1, 2],
        expected: false,
        title: "similar object and array should be unequal",
    },
    {
        value1: { a: { b: 1 } },
        value2: { a: { b: 1 } },
        expected: true,
        title: "equal nested object should be equal",
    },
    {
        value1: { a: { b: 1 } },
        value2: { a: { b: 2 } },
        expected: false,
        title: "unequal nested object should be unequal",
    },
    {
        value1: { a: { b: [1, 2, [3]] } },
        value2: { a: { b: [1, 2, [3]] } },
        expected: true,
        title: "equal nested object with nested array should be equal",
    },
    {
        value1: { a: { b: [1, 2, [3]] } },
        value2: { a: { c: [1, 2, [3]] } },
        expected: false,
        title: "unequal nested object with nested array should be unequal",
    },
    {
        value1: { a: 1, b: 2 },
        value2: { b: 2, a: 1 },
        expected: true,
        title: "same object in different order should be equal",
    },
    {
        value1: [[1, 2, { a: 3 }]],
        value2: [[1, 2, { a: 3 }]],
        expected: true,
        title: "array containing same nested array with object should be equal",
    },
    {
        value1: [[1, 2, { a: 3 }]],
        value2: [[1, 2, { a: 2 }]],
        expected: false,
        title: "array containing different nested array with object should be unequal",
    },
    {
        value1: { a: undefined },
        value2: { b: 1 },
        expected: false,
        title: "first object containing value as undefined should be unequal",
    },
    {
        value1: { b: 1 },
        value2: { a: undefined },
        expected: false,
        title: "second object containing value as undefined should be unequal",
    },
];

function test(func, testCases) {
    for (const testCase of testCases) {
        const actual = func(testCase.value1, testCase.value2);
        const passed = actual === testCase.expected ? "✅" : "❌";
        console.log(passed, testCase.title);
    }
    console.log("-------------------------------------");
    console.log("NO OF TEST CASE:" + testCases.length);
}

test(a.areEqual, testCases);
