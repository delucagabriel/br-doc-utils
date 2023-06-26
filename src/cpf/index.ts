import { generateNumbers } from '../utils/generateNumbers'

export class CPF {
    constructor(){}

    private generateVerifyDigit(digits: Array<string>){
        const verify = (
            digits
                .map((digit, id) => {
                return { digit: +digit, id: id + 2 }
                })
                .reduce((prev, curr) => prev + (curr.id * curr.digit), 0) * 10
            ) % 11
        return [10, 11].includes(verify) ? 0 : verify
    }

    private generateVerifyDigits(cpf: string){
        const digitsForVerify = cpf.substring(0, 9).split('').reverse()
        const firstVerify = this.generateVerifyDigit(digitsForVerify)
        digitsForVerify.unshift(firstVerify.toString())
        const secondVerify = this.generateVerifyDigit(digitsForVerify)
        return `${firstVerify}${secondVerify}`
    }

    static validate(input: string){
        const instance = new CPF()
        const cpf = input.match(/\d/g) || []
        if(cpf.length < 11) return false
        const isAllEqual = cpf.every(digit => digit === cpf[0])
        if(isAllEqual) return false
        const verifyDigits = cpf[9].concat(cpf[10])
        return instance.generateVerifyDigits(cpf.join('')) === verifyDigits
    }

    static generate(){
        const instance = new CPF()
        const cpf = generateNumbers(11)
        const digits = instance.generateVerifyDigits(cpf.join(''))
        return cpf.slice(0,9).join('').concat(digits)
    }

    static format(input: string){
        return input.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
    }
}