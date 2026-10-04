// середнє арефметичне двух чисел
function average(a,b){
    return(a+b)/2;
}
//в квадраті
function square(x){
    return x*x;
} 
// в кубі 
function cube(x){
    return x*x*x;
}
//головна функція
function calculate(){
    let result = [];
    for (let i = 0; i <= 9; i++){
        let squareResult = square(i);
        let cubeResult = cube(i);
        let averageResult = average(squareResult,cubeResult);
        result.push(averageResult);
    }
    return result;
}
console.log(calculate())