import { describe, expect, it } from 'vitest'
import { CNPJ } from'./'

const validCNPJs = [
    '66.696.268/0001-18', 
    '39.684.847/0001-78',
    '28.906.598/0001-00',
    '68.271.259/0001-00',
    '57.871.481/0001-28',
    '93.073.354/0001-47',
    '29.559.682/0001-59',
    '56713033000133',
    '58976422000187'
]

const formatedExpected = [
    '66.696.268/0001-18', 
    '39.684.847/0001-78',
    '28.906.598/0001-00',
    '68.271.259/0001-00',
    '57.871.481/0001-28',
    '93.073.354/0001-47',
    '29.559.682/0001-59',
    '56.713.033.0001-33',
    '58.976.422.0001-87'
]

const invalidCNPJs = [
    '66.696.268/0001-28', 
    '39.684.847/0001-88',
    '28.906.598/0001-01',
    '68.271.259/0001-10',
    '57.871.481/0001-29',
    '93.073.354/0001-48',
    '29.559.682/0001-69',
    '56713033000123',
    '55813033000123',
    '58976422000197'
]

describe('CNPJ', () => {
    describe.each(validCNPJs)('valid CNPJs', (cnpj) => {
        it(`should return true for valid CNPJ: ${cnpj}`, () => {
            const validation = CNPJ.validate(cnpj)
            expect(validation).toBeTruthy()
        });
        
        it(`should return true for genereted CNPJ`, () => {
            const generated = CNPJ.generate()
            const validation = CNPJ.validate(generated)
            expect(validation).toBeTruthy()
        }); 

        it(`should return a formated CNPJ`, () => {
            const formated = CNPJ.format(cnpj)
            expect(formated).toBe(formatedExpected[validCNPJs.indexOf(cnpj)])
        }); 
    });

    describe.each(invalidCNPJs)('invalid CNPJs', (cnpj) => {
        it('should return false for invalid CNPJ', () => {
            const validation = CNPJ.validate(cnpj)
            expect(validation).toBeFalsy()
        });  
    });
});