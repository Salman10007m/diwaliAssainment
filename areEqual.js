function areDeepEqual(value1, value2) {
    if (Object.keys(value1).length !== Object.keys(value2).length) {
        return false;
    }

    for (const key in value1) {
        if (!(key in value2)) {
            return false;
        }
        if (!areEqual(value1[key], value2[key])) return false;
    }
    return true;
}

function areValuesEqual(value1, value2) {
    return value1 === value2;
}

function type(value) {
    if (Array.isArray(value)) return "array";
    if (value === null) return "null";

    return typeof value;
}

function areTypesEqual(value1, value2) {
    return type(value1) === type(value2);
}

function areEqual(value1, value2) {
    if (!areTypesEqual(value1, value2)) return false;

    switch (type(value1)) {
        case "array":
            return areDeepEqual(value1, value2);
        case "object":
            return areDeepEqual(value1, value2);
    }
    return areValuesEqual(value1, value2);
}

module.exports = { areEqual };
