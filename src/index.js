module.exports = function solveEquation(equation) {
  
  equation=equation.replace(/\s+/g,'');
  let firstX=equation.indexOf("x");
  let secondX=equation.indexOf("x", firstX + 1);
  let a=Number(equation.slice(0,firstX - 1));
  let b=Number(equation.slice(firstX + 3, secondX - 1));
  let c=Number(equation.slice(secondX+1));
  let discr= (b * b) - (4 * a * c);
  let x1=(-1 * b + Math.sqrt(discr))/(2 * a);
  let x2=(-1 * b - Math.sqrt(discr))/(2 * a);
  x1=Math.round(x1);
  x2=Math.round(x2);
  let res;
  if (x1>x2)
   res=[x2, x1];
  else
   res=[x1,x2];
  return res;
}
