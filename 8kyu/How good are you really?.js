function betterThanAverage(classPoints, yourPoints) {
let count = 0;
 classPoints.map(item => {
 if (item < yourPoints) {
 count ++;
 }
 });
 return count > classPoints.length - count;
}
