export const getUserSlice = (str: string): string =>{
    return !!str ? str.split('').reduce((prev: string, elem: string) => elem === elem.toUpperCase() ? prev + elem : prev, '') : "NN";
}