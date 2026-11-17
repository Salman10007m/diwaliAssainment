function isDeepEqual(value1, value2) {
    if (Object.keys(value1).length !== Object.keys(value2).length) {
        return false;
    }

    for (const key in value1) {
        if (!(key in value2)) {
            return false;
        }
        if (!isEqual(value1[key], value2[key])) return false;
    }

    return true;
}

function isObject(value) {
    return value !== null && !Array.isArray(value) && typeof value === "object";
}

function areObjects(value1, value2) {
    return isObject(value1) && isObject(value2);
}

function areArrays(value1, value2) {
    return Array.isArray(value1) && Array.isArray(value2);
}

function isEqual(value1, value2) {
    if (value1 === value2) return true;
    if (areObjects(value1, value2) || areArrays(value1, value2)) {
        return isDeepEqual(value1, value2);
    }
    return false;
}

module.exports = { isEqual };
