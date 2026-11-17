const { areEqual } = require("./areEqual");

function getDirection(current, next) {
    if (next > current) return "increasing";
    if (next < current) return "decreasing";

    return "equal";
}

function hasDirectionChanged(previous, current) {
    return (
        previous !== "unknown" && current !== "equal" && previous !== current
    );
}

function findTheRun(input) {
    if (input.length === 0) return [];

    const allRuns = [];
    let currentRun = [input[0]];
    let previousDirection = "unknown";

    for (let i = 0; i < input.length - 1; i++) {
        const currentDirection = getDirection(input[i], input[i + 1]);

        if (hasDirectionChanged(previousDirection, currentDirection)) {
            allRuns.push(currentRun);
            currentRun = [input[i + 1]];
            previousDirection = "unknown";
        } else {
            currentRun.push(input[i + 1]);
            if (currentDirection !== "equal") {
                previousDirection = currentDirection;
            }
        }
    }

    allRuns.push(currentRun);

    return allRuns;
}

function test(message, expected, input) {
    const actual = findTheRun(input);
    const isPassed = areEqual(actual, expected);

    console.log(`${isPassed ? "✅ " : "❌"} | ${message}`);
}

function main() {
    test(
        "exercise example",
        [
            [1, 2, 3, 4, 6],
            [4, 2, 1],
            [2, 3],
        ],
        [1, 2, 3, 4, 6, 4, 2, 1, 2, 3],
    );
    test(
        "equal elements followed by decreasing",
        [[2, 2, 2, 2, 1]],
        [2, 2, 2, 2, 1],
    );
    test(
        "equal elements followed by direction change",
        [[2, 4, 4, 4], [3]],
        [2, 4, 4, 4, 3],
    );
    test("all elements equal", [[5, 5, 5, 5]], [5, 5, 5, 5]);
    test("equal elements at beginning", [[2, 2, 3, 4]], [2, 2, 3, 4]);
    test("equal elements at end", [[1, 2, 3, 3]], [1, 2, 3, 3]);
    test("single element", [[5]], [5]);
    test("two increasing elements", [[2, 5]], [2, 5]);
    test("two decreasing elements", [[5, 2]], [5, 2]);
    test("all increasing", [[1, 2, 3, 4, 5]], [1, 2, 3, 4, 5]);
    test("all decreasing", [[5, 4, 3, 2, 1]], [5, 4, 3, 2, 1]);
    test(
        "one direction change",
        [
            [1, 3],
            [2, 4],
        ],
        [1, 3, 2, 4],
    );
    test(
        "multiple direction changes",
        [
            [1, 4],
            [2, 5],
            [3, 6],
        ],
        [1, 4, 2, 5, 3, 6],
    );
    test("alternating directions", [[1, 3], [2, 4], [1]], [1, 3, 2, 4, 1]);
    test(
        "negative numbers",
        [
            [-5, -2],
            [-8, -10],
        ],
        [-5, -2, -8, -10],
    );
    test("empty array", [], []);
}

main();

main();
