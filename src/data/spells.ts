import {range} from "./game"

export type TSpell = {
  id: string
  name: string
  tapped: boolean
  score: number
}

const oSpell: TSpell = {
  id: "",
  name: "",
  tapped: false,
  score: 0,
}

export const getSpells = (n: number) => range(n).map(i => ({
  ...oSpell, id: `Spell_${i + 1}`, name: `Spell_${i + 1}`
}))

export const spells = getSpells(7)
