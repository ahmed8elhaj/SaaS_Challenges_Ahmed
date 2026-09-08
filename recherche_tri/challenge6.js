let fruits = ["pomme", "banane", "cerise", "mangue", "kiwi"];
function findFruit(word){
    for (let i=0;i<fruits.length;i++){
        if(fruits[i]==word){
            console.log(`Votre recherchez est ${fruits[i]} et l'index est ${i}`);
            return
        }   
    }
    console.log('not found');
}
findFruit('mangu')