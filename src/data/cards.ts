export const ALL = 1024
export const NO = -1

export const Suit = {
  Blue: "Blue",
  Green: "Green",
  Red: "Red",
  Rule: "Rule",
} as const

type TSuit = typeof Suit[keyof typeof Suit]

const suitColors = new Map<TSuit, string>([
  [Suit.Blue, "blue.500"],
  [Suit.Green, "green.500"],
  [Suit.Red, "red.500"],
  [Suit.Rule, "orange.500"],
])

export const suitColor = (suit: TSuit|undefined) => {
  return (suit? suitColors.get(suit): "gray.900")
}

type TCardData = {
  id: string
  name: string
  rank?: number
  suit?: TSuit
  kind?: string
}

const range = (n: number) => Array.from(Array(n).keys())
const rawList1: TCardData[] = range(9).map(i => ({ id: 'B:'+i, name: 'B '+i, rank: i, suit: Suit.Blue }))
const rawList2: TCardData[] = [
  // { id: 'D:2', name: 'D 2', rank: 2, suit: Suit.Rule, kind: "Draw" },
  // { id: 'D:3', name: 'D 3', rank: 3, suit: Suit.Rule, kind: "Draw" },
  // { id: 'D:4', name: 'D 4', rank: 4, suit: Suit.Rule, kind: "Draw" },

  // { id: 'P:2', name: 'P 2', rank: 2, suit: Suit.Rule, kind: "Play" },
  // { id: 'P:3', name: 'P 3', rank: 3, suit: Suit.Rule, kind: "Play" },
  // { id: 'P:4', name: 'P 4', rank: 4, suit: Suit.Rule, kind: "Play" },

  // { id: 'G:1', name: 'G 1', rank: 1, suit: Suit.Green },
  // { id: 'G:2', name: 'G 2', rank: 2, suit: Suit.Green },
  // { id: 'G:3', name: 'G 3', rank: 3, suit: Suit.Green },
  // { id: 'B:1', name: 'B 1', rank: 1, suit: Suit.Blue },
  // { id: 'B:2', name: 'B 2', rank: 2, suit: Suit.Blue },
  // { id: 'B:3', name: 'B 3', rank: 3, suit: Suit.Blue },
]

const rawList = [...rawList1, ...rawList2]
const cardList = rawList.map(it => it.id)

const cardMap = new Map<string, TCardData>(rawList.map(it => [it.id, it]))
export const getCardData = (id: string) => cardMap.get(id)

export const Zone = {
  Draw: "Draw",
  Drop: "Drop",
  Hand: "Hand",
  Keep: "Keep",
  Rule: "Rule",
} as const

export type TZone = typeof Zone[keyof typeof Zone]

export type TCardZone = {
  id: string
  player: number
  zone: TZone
}

const zoneMap = new Map<string, TCardZone>(rawList.map(it => [it.id, {id: it.id, player: 0, zone: Zone.Draw}]))
// const getZoneData = (id: string) => zoneMap.get(id)

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

export type TDeck = {deck: string[], deckData: {[id: string]: TCardZone}}
export function resetDeck() {
  return {
    deck: shuffle(cardList, true),
    deckData: Object.fromEntries(zoneMap),
  }
}

export const initDeck = resetDeck()

// export function test() {
//   console.log('cardList:', cardList)
//   console.log('shuffle:', shuffle(cardList))
//   console.log('cardMap:', cardMap)
//   console.log('Data:', cardList[3], getCardData(cardList[3]))
//   console.log('Zone:', cardList[3], getZoneData(cardList[3]))
// }
