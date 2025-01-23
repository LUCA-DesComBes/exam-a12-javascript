function compterVoyelles(chaine) {
	let count = 0;

	for (let i = 0; i < chaine.length; i++) {
		const char = chaine[i];
		if (
			char === "a" ||
			char === "e" ||
			char === "i" ||
			char === "o" ||
			char === "u" ||
			char === "y"
		) {
         count++;
		}
	}
    return count;
}

console.log(compterVoyelles("bonjour")); // Résultat attendu : 3
