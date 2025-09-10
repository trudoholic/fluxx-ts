import {range} from "./game"

export type TSpell = {
  id: number
  name: string
  tapped: boolean
  score: number
}

const oSpell: TSpell = {
  id: 0,
  name: "",
  tapped: false,
  score: 0,
}

export const getSpells = (n: number) => range(n).map(i => ({
  ...oSpell, id: i + 1, name: `Spell_${i + 1}`, tapped: !(i % 2)
}))

export const spells = getSpells(7)
