

const startObject = {
    String1: 2,
    String2: 28,
    String3: 3,
    String4: 45
};
function unlockedObjects(object) {
    const newObject = {};

    for (const String in object) {
        if (object[String] > 10) {
            newObject[String] = object[String];
        }
    }

    return newObject;
}


const newObject = unlockedObjects(startObject);
console.log(newObject);