import { v4 as uuidv4 } from 'uuid'
import expressoTradicional from '../assets/expresso-tradicional.svg'
import expressoAmericano from '../assets/expresso-americano.svg'
import expressoCremoso from '../assets/expresso-cremoso.svg'
import expressoGelado from '../assets/expresso-gelado.svg'
import cafeComLeite from '../assets/cafe-com-leite.svg'
import latte from '../assets/latte.svg'
import capuccino from '../assets/capuccino.svg'
import macchiato from '../assets/macchiato.svg'
import mocaccino from '../assets/mocaccino.svg'
import chocolateQuente from '../assets/chocolate-quente.svg'
import cubano from '../assets/cubano.svg'
import havaiano from '../assets/havaiano.svg'
import arabe from '../assets/arabe.svg'
import irlandes from '../assets/irlandes.svg'

export const dataCoffee = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    thumbnail: expressoTradicional,
    tags: ['Tradicional'],
  },
  {
    id: uuidv4(),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    thumbnail: expressoAmericano,
    tags: ['Tradicional'],
  },
  {
    id: uuidv4(),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    thumbnail: expressoCremoso,
    tags: ['Tradicional'],
  },
  {
    id: uuidv4(),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    thumbnail: expressoGelado,
    tags: ['Tradicional', 'Gelado'],
  },
  {
    id: uuidv4(),
    name: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    thumbnail: cafeComLeite,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: uuidv4(),
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    thumbnail: latte,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: uuidv4(),
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    thumbnail: capuccino,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: uuidv4(),
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    thumbnail: macchiato,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: uuidv4(),
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    thumbnail: mocaccino,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: uuidv4(),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    thumbnail: chocolateQuente,
    tags: ['Especial', 'Com leite'],
  },
  {
    id: uuidv4(),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    thumbnail: cubano,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
  },
  {
    id: uuidv4(),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    thumbnail: havaiano,
    tags: ['Especial'],
  },
  {
    id: uuidv4(),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    thumbnail: arabe,
    tags: ['Especial'],
  },
  {
    id: uuidv4(),
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    thumbnail: irlandes,
    tags: ['Especial', 'Alcoólico'],
  },
]
