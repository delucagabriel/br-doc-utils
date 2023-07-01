import { generateNumbers } from "../utils/GenerateNumbers"

export class CNPJ {
    private generateVerifyDigit(digits: Array<string>): number {
        const verifyDigit = digits
            .map((digit, id) => {
                id = id + 2
                const newId = id > 9 ? id - 8 : id
                return { digit: +digit, id: newId }
                })
            .reduce((prev, curr) => prev + (curr.id * curr.digit), 0) % 11
        return verifyDigit > 1 ? 11 - verifyDigit : 0
    }

    private generateVerifyDigits(digits: string): string {
        const digitsForVerify = digits.substring(0, 12).split('').reverse()
        const firstVerify = this.generateVerifyDigit(digitsForVerify)
        digitsForVerify.unshift(firstVerify.toString())
        const secondVerify = this.generateVerifyDigit(digitsForVerify)
        return `${firstVerify}${secondVerify}`
    }

    static validate(input: string): boolean {
        const cnpj = input.match(/\d/g) || []
        if(cnpj.length < 13) return false
        const instance = new CNPJ();
        const isAllEqual = cnpj.every(digit => digit === cnpj[0] )
        if(isAllEqual) return false
        const verifyDigits = cnpj[12].concat(cnpj[13])
        return instance.generateVerifyDigits(cnpj.join('')) === verifyDigits
    }

    static generate(){
        const instance = new CNPJ()
        const cnpj = generateNumbers(13)
        const digits = instance.generateVerifyDigits(cnpj.join(''))
        return cnpj.slice(0,12).join('').concat(digits)
    }

    static format(input: string){
        return input.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3.$4-$5')
    }
}