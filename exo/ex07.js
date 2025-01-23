function moyenne(tab) {
	let moy = 0;
	for (let i = 0; i < tab.length; i++) {
		moy += tab[i]
	}
	return moy / tab.length;
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6
