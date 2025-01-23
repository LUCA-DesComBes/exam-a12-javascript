function estPalindromeAvance(chaine) {
    let words = chaine.split(" ")
    let join = words.join("")

    for (let i = 0; i < join.length / 2; i++) {
        if (join[i] !== join[join.length - 1 - i]) {
            return false;
        }
    }
    return true;
}   

console.log(estPalindromeAvance("a man a plan a canal panama")); // Résultat attendu : true