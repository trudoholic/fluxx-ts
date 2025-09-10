import {
  Separator
} from "@chakra-ui/react"
import SectionRules from "./SectionRules"
import SectionSpells from "./SectionSpells"
import SectionCommon from "./SectionCommon"
import SectionFlow from "./SectionFlow"
import SectionPhase from "./SectionPhase"
import SectionTest from "./SectionTest"
import SectionPlayers from "./SectionPlayers"
import SectionOver from "./SectionOver"

const PageMain = () => {

  return (
    <>
      <SectionRules/>
      <SectionSpells/>
      <SectionCommon/>
      <Separator width="100%" borderColor={'green.800'} />
      <SectionFlow/>
      <Separator width="100%" borderColor={'green.800'} />
      <SectionPhase/>
      <Separator width="100%" borderColor={'green.800'} />
      <SectionTest/>
      <Separator width="100%" borderColor={'green.800'} />
      {/*<Code px={2}>{deck.join('|')}</Code>*/}
      <SectionPlayers/>
      <SectionOver/>
    </>
  )
}

export default PageMain
