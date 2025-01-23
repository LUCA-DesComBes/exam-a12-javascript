function compterMots(chaine) {
	let count = 0;

    for(let i = 0; i < chaine.length; i++) {
        if (chaine[i] === " ") {
            count++;
        } 
        if (i === chaine.length - 1) {
            count++;
        }
    }
    return count;
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4