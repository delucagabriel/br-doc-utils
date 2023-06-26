import { describe, expect, it } from 'vitest'
import { CPF } from '.';

const validCPFs = [
    '765.118.380-05', 
    '984.035.880-46',
    '972.223.860-41',
    '661.423.600-88',
    '091.648.420-37',
    '47689791069',
    '48727547000',
    '49041480021',
    '29715575021'
]

const validFormatedCPFs = [
    '765.118.380-05', 
    '984.035.880-46',
    '972.223.860-41',
    '661.423.600-88',
    '091.648.420-37',
    '476.897.910-69',
    '487.275.470-00',
    '490.414.800-21',
    '297.155.750-21'
]

const invalidCPFs = [
    '11111111111', 
    '96625823041',
    '96625823051',
    '07390158010',
    '52236909072',
    '013.006.720-31',
    '816.766.330-42',
    '827.968.200-86',
    '962.651.820-06',
    '962.553.820-16',
    '406.239.230-61'
]

describe('CPF', () => {
    describe.each(validCPFs)('valid CPFs', (cpf) => {
        it(`should return true for a valid CPF: ${cpf}`, () => {
            const validation = CPF.validate(cpf)
            expect(validation).toBeTruthy()
        });

        it(`should return true for a valid generated CPF`, () => {
            const generated = CPF.generate();
            const validation = CPF.validate(generated)
            expect(validation).toBeTruthy()
        });

        it(`should return a formated CPF`, () => {
            const formated = CPF.format(cpf)
            expect(formated).toBe(validFormatedCPFs[validCPFs.indexOf(cpf)])
        });
    })
    describe.each(invalidCPFs)('invalid CPFs', (cpf) => {
        it(`should return false for a invalid CPF : ${cpf}`, () => {
            const validation = CPF.validate(cpf)
            expect(validation).toBeFalsy()
        });
    })
});