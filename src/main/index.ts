
class Math{
    public static PI = 3.141592653589793;
    public static round(number){
        if(!Math.isNumber(number))
            return NaN;
        return number | 0;
    }
    /*public static pow(base,exponent){
        if(!Math.isNumber(base) || !Math.isNumber(exponent))
            return NaN;
        for
        
    }*/
    //public static sqrt

    private static isNumber(number):boolean{
        return typeof number === 'number' ? true : false;
    }
}

export default Math;
