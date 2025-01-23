function filtrerNegatifs(tab) {
    let arr = [];

    for(let i = 0; i < tab.length; i++) {
        if(tab[i] > 0) {
            arr.push(tab[i])
        }
    }
    return arr
  }
  
  console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]