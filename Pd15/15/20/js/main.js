
const Array = [NaN, 1, 2, NaN, 5, 6];
const indicesWithNaN = findNaN(Array);

function findNaN(array) {
    const indices = [];

    array.forEach((element, index) => {
        if (isNaN(element)) {
            indices.push(index);
        }
    });

    return indices;
}

console.log("Indices with NaN:", indicesWithNaN);