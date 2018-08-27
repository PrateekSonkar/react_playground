export const square = function(x){
  return x * x;
}

export const squareArrow = (x) => {
  return x * x;
}

// export const getFirstName = (x) => {
//   return x.split(" ")[0];
// }

export const getFirstName = (x) => x.split(" ")[0];


export const multiplier = {
  numbers : [1,4,54,7],
  multiplyBy : 3,
  multiply  (){
    return this.numbers.map((number) => this.multiplyBy * number);
  }
}