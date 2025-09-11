// import {range} from "./game"

export type TSpell = {
  id: string
  idCard: string
  name: string
  tapped: boolean
  score: number
}

export const getSpell = (id: string, idCard: string): TSpell => ({
  id,
  idCard,
  name: id,
  tapped: false,
  score: 0,
})

// const oSpell: TSpell = {
//   id: "",
//   idCard: "",
//   name: "",
//   tapped: false,
//   score: 0,
// }

// export const getSpells = (n: number) => range(n).map(i => ({
//   ...oSpell,
//   id: `Spell_${i + 1}`,
//   idCard: `Spell_${i + 1}`,
//   name: `Spell_${i + 1}`
// }))

// export const spells = getSpells(7)
