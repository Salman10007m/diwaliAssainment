const a = require("./areEqual");

const testCases = [
    {
        value1: NaN,
        value2: NaN,
        expected: false,
        title: "both NaN",
    },
    {
        value1: undefined,
        value2: undefined,
        expected: true,
        title: "both undefined",
    },
    {
        value1: null,
        value2: null,
        expected: true,
        title: "both null",
    },
    {
        value1: null,
        value2: 1,
        expected: false,
        title: "null and number",
    },
    {
        value1: undefined,
        value2: 1,
        expected: false,
        title: "undefined and number",
    },
    {
        value1: NaN,
        value2: 1,
        expected: false,
        title: "NaN and number",
    },
    {
        value1: 1,
        value2: 1,
        expected: true,
        title: "Equal Number",
    },
    {
        value1: 1,
        value2: 2,
        expected: false,
        title: "unEqual Number",
    },
    {
        value1: "a",
        value2: "a",
        expected: true,
        title: "Equal String",
    },
    {
        value1: "a",
        value2: "b",
        expected: false,
        title: "Unequal String",
    },
    {
        value1: "a",
        value2: null,
        expected: false,
        title: "null and string",
    },
    {
        value1: "a",
        value2: NaN,
        expected: false,
        title: "NaN and string",
    },
    {
        value1: "a",
        value2: undefined,
        expected: false,
        title: "undefined and string",
    },
    {
        value1: 1,
        value2: "1",
        expected: false,
        title: "string and number",
    },
    {
        value1: true,
        value2: true,
        expected: true,
        title: "same boolean",
    },
    {
        value1: true,
        value2: false,
        expected: false,
        title: "different boolean",
    },
    {
        value1: true,
        value2: 1,
        expected: false,
        title: "boolean and number",
    },
    {
        value1: true,
        value2: null,
        expected: false,
        title: "boolean and null",
    },
    {
        value1: true,
        value2: undefined,
        expected: false,
        title: "boolean and undefined",
    },
    {
        value1: true,
        value2: NaN,
        expected: false,
        title: "boolean and NaN",
    },
    {
        value1: false,
        value2: "a",
        expected: false,
        title: "boolean and string",
    },
    {
        value1: [],
        value2: [],
        expected: true,
        title: "Empty array",
    },
    {
        value1: null,
        value2: [],
        expected: false,
        title: "null and array",
    },
    {
        value1: [],
        value2: [1],
        expected: false,
        title: "empty and non empty array",
    },
    {
        value1: [1],
        value2: [1],
        expected: true,
        title: "equal array",
    },
    {
        value1: [{ a: 2 }],
        value2: [{ a: 2 }],
        expected: true,
        title: "array containing same object",
    },
    {
        value1: [{ a: 1 }],
        value2: [{ a: 2 }],
        expected: false,
        title: "array containing different object",
    },
    {
        value1: [1, { a: 2 }],
        value2: [1, { a: 2 }],
        expected: true,
        title: "array containg same object and number",
    },
    {
        value1: [1, { a: 2 }],
        value2: [3, { a: 3 }],
        expected: false,
        title: "array containg different object and number",
    },
    {
        value1: [[1, 2, [3]]],
        value2: [[1, 2, [3]]],
        expected: true,
        title: "array containing same nested array",
    },
    {
        value1: [[1, 2, [3]]],
        value2: [[1, 2, [3, 2]]],
        expected: false,
        title: "array containing different nested array",
    },
    {
        value1: {},
        value2: {},
        expected: true,
        title: "empty object",
    },
    {
        value1: {},
        value2: { a: 1 },
        expected: false,
        title: "empty object and non empty object",
    },
    {
        value1: null,
        value2: {},
        expected: false,
        title: "null and object",
    },
    {
        value1: { a: 1 },
        value2: { a: 1 },
        expected: true,
        title: "equal  objects",
    },
    {
        value1: { a: 1 },
        value2: { a: 2 },
        expected: false,
        title: "unequal  objects",
    },
    {
        value1: { 0: 1, 1: 2 },
        value2: [1, 2],
        expected: false,
        title: "similar object and array",
    },
    {
        value1: { a: { b: 1 } },
        value2: { a: { b: 1 } },
        expected: true,
        title: "equal nested object",
    },
    {
        value1: { a: { b: 1 } },
        value2: { a: { b: 2 } },
        expected: false,
        title: "unequal nested object",
    },
    {
        value1: { a: { b: [1, 2, [3]] } },
        value2: { a: { b: [1, 2, [3]] } },
        expected: true,
        title: "equal nested object with nested array",
    },
    {
        value1: { a: { b: [1, 2, [3]] } },
        value2: { a: { c: [1, 2, [3]] } },
        expected: false,
        title: "unequal nested object with nested array",
    },
    {
        value1: { a: 1, b: 2 },
        value2: { b: 2, a: 1 },
        expected: true,
        title: "same object in different order",
    },
    {
        value1: [[1, 2, { a: 3 }]],
        value2: [[1, 2, { a: 3 }]],
        expected: true,
        title: "array containing same nested array with object",
    },
    {
        value1: [[1, 2, { a: 3 }]],
        value2: [[1, 2, { a: 2 }]],
        expected: false,
        title: "array containing different nested array with object",
    },
    {
        value1: { a: undefined },
        value2: { b: 1 },
        expected: false,
        title: "first object containing value as undefined",
    },
    {
        value1: { b: 1 },
        value2: { a: undefined },
        expected: false,
        title: "second object containing value as undefined",
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

test(a.isEqual, testCases);
