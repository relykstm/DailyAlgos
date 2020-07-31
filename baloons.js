const maxNumberOfBalloons = function(text) {
    const lookup = { b:0, a:0, l:0, o:0, n:0 };

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        if (lookup.hasOwnProperty(letter)) {
            lookup[letter] += 1
        }
    } 
    
    let min = lookup.b;
    
    for (let key in lookup) {
        if (key === "l" || key === "o") {
            if (Math.floor(lookup[key]/2) < min) {
                min = Math.floor(lookup[key]/2);
            } 
        } else if (lookup[key] < min) {
            min = lookup[key];
        }
    }
    
    return min;
};