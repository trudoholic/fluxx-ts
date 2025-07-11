export const Suit = {
  Blue: "Blue",
  Green: "Green",
  Red: "Red",
} as const

export type TSuit = typeof Suit[keyof typeof Suit]

export type TCardData = {
  id: string
  name: string
  rank?: number
  suit?: TSuit
}

const rawList: TCardData[] = [
  { id: 'R:1', name: 'R 1', rank: 1, suit: Suit.Red },
  { id: 'R:2', name: 'R 2', rank: 2, suit: Suit.Red },
  { id: 'R:3', name: 'R 3', rank: 3, suit: Suit.Red },
  { id: 'G:1', name: 'G 1', rank: 1, suit: Suit.Green },
  { id: 'G:2', name: 'G 2', rank: 2, suit: Suit.Green },
  { id: 'G:3', name: 'G 3', rank: 3, suit: Suit.Green },
  { id: 'B:1', name: 'B 1', rank: 1, suit: Suit.Blue },
  { id: 'B:2', name: 'B 2', rank: 2, suit: Suit.Blue },
  { id: 'B:3', name: 'B 3', rank: 3, suit: Suit.Blue },
]
const cardList = rawList.map(it => it.id)

const cardMap = new Map<string, TCardData>(rawList.map(it => [it.id, it]))
export const getCardData = (id: string) => cardMap.get(id)

export const Zone = {
  Draw: "Draw",
  Drop: "Drop",
  Hand: "Hand",
  Keep: "Keep",
} as const

export type TZone = typeof Zone[keyof typeof Zone]

export type TCardZone = {
  id: string
  player: number
  zone: TZone
}

const zoneMap = new Map<string, TCardZone>(rawList.map(it => [it.id, {id: it.id, player: 0, zone: Zone.Draw}]))
export const getZoneData = (id: string) => zoneMap.get(id)

export const shuffle = (list: string[], debug = false) => {
  const src = [...list]
  if (debug) return src

  const result: string[] = []
  while (src.length) {
    const rnd = Math.floor(Math.random() * src.length)
    result.push(src.splice(rnd, 1)[0])
  }
  return result
}

// const cb = (acc: {[key: string]: TCardData}, it) => { acc[it.id] = it; return acc }
// const cardMap = rawList.reduce(cb, {})
//
// export function getCardData(id: string) {
//   return cardMap[id] as TCardData
// }

export function test() {
  console.log('cardList:', cardList)
  console.log('shuffle:', shuffle(cardList))
  console.log('cardMap:', cardMap)
  console.log('Data:', cardList[3], getCardData(cardList[3]))
  console.log('Zone:', cardList[3], getZoneData(cardList[3]))
}
