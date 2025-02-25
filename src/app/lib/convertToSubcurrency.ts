function convertToSubcurrency(amount: any, factor = 100) { // amount number ko any sa chnge kiya ha
    return Math.round(amount * factor);
  }
  
  export default convertToSubcurrency;