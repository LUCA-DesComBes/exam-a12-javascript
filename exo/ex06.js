function doublons(tab) {
	let arr = [];
    for (let i = 0; i < tab.length; i++) {
        arr.push(tab[i] * 2) 
    }
    return arr
}

console.log(doublons([1, 2, 3])); // Résultat attendu : [2, 4, 6]