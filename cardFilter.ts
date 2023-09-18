/* eslint-disable prettier/prettier */
 export function isSimilarCards(firstCard: string | undefined, secondCard: string | undefined) {
    if (firstCard === secondCard) {
        console.log("Верно!");
        return true;
    }
    return false;
}