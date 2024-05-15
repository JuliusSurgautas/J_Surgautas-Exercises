function characterCounter(str) {
   
    if (!str) {
        return "Reikalaujamas stringo įvedimas";
    }

   
    if (typeof str !== "string") {
        str = str.toString();

        if (typeof str !== "string") {
            return "netinkamas stringas";
        }
    }

    const stringLen = str.length;
    const result = {};
    let i = 0;

    
    for (; i < stringLen; i++) {
        if (result[str[i]] === undefined && str[i] !== " ") {
            result[str[i].toLowerCase()] = 1;
        } else {
            if (str[i] !== " ") {
                
                result[str[i]]++;
            }
        }
    }
    return result;
}

console.log(characterCounter("Hello, World!"));