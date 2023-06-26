# br-document-utils

## Installation
```shell
$ npm i br-document-utils
```

## Example

#### CNPJ
```typescript
import { CNPJ } from 'br-document-utils'

// Gerar um CNPJ
CNPJ.generate()

// Verificar se um CNPJ é válido
CNPJ.validate('66.696.268/0001-18') // true
CNPJ.validate('66.696.268/0001-29') // false

// Formatar um CNPJ
CNPJ.format('56713033000133') // '56.713.033.0001-33'

```

#### CPF
```typescript
import { CPF } from 'br-document-utils'

// Gerar um CPF
CPF.generate()

// Verificar se um CPF é válido
CPF.validate('29715575021') // true
CPF.validate('297.155.750-42') // false

// Formatar um CPF
CPF.format('29715575021') // '297.155.750-21'

```