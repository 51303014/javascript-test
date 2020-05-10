const rating = [2, 5, 3, 4, 1];
const rating1 = [2, 1, 3];
const rating2 = [1, 2, 3, 4];

function numberOfTeams(rating) {
    if (rating.length < 3) return 0;
    let result = 0;

    let conditionOne = new Array(rating.length).fill(0);
    let conditionTwo = new Array(rating.length).fill(0);

    for (let i = 0; i < rating.length; i++) {
        for (let j = i + 1; j < rating.length; j++) {
            if (rating[j] > rating[i]) {
                ++conditionOne[i];
            } else if (rating[j] < rating[i]) {
                ++conditionTwo[i];
            }
        }
    }

    for (let i = 0; i < rating.length - 2; i++) {
        for (let j = i + 1; j < rating.length; j++) {
            if (rating[j] > rating[i]) {
                result += conditionOne[j];
            } else if (rating[j] < rating[i]) {
                result += conditionTwo[j];
            }
        }
    }

    return result;
};
console.log(numberOfTeams(rating));
console.log(numberOfTeams(rating1));
console.log(numberOfTeams(rating2));
