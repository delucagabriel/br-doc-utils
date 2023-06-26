
const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateNumbers = (length: number) => {
    const numbers: number[] = []
    for(let i = 0; i < length; i++){
        numbers.push(getRandomInt(0, 9))
    }
    return numbers
}