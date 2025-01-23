function premiereLettreMajuscule(chaine) {
    let words = chaine.split(" ")
    let arr = []

    for(let word of words) {
        let first = word.charAt(0).toUpperCase();

        let replacement = word.replace(word.charAt(0), first);

        arr.push(replacement);
    }
    return arr.join(" ")
}

console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"