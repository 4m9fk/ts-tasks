export const calculator = (a:number,b:string,c:number):number | string => {
    switch(b){
        case "+": return a + c;
        case "-": return a - c;
        case "/": return a / c;
        case "*": return a * c;
        default: return "Calculator does not support this operator";
    }
}