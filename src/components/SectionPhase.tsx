import {Phase} from "../data/game"
import useGame from "../hooks/useGame"
import PhaseBegin from "./PhaseBegin"
import PhaseDraw from "./PhaseDraw"
import PhasePlay from "./PhasePlay"
import PhaseDiscard from "./PhaseDiscard"
import PhaseDestroy from "./PhaseDestroy"
import PhaseEnd from "./PhaseEnd"

const SectionPhase = () => {
  const {
    phase,
  } = useGame()

  return (
    <>
      {
        Phase.Begin === phase? (
          <PhaseBegin />
        ): Phase.Draw === phase? (
          <PhaseDraw />
        ): Phase.Play === phase? (
          <PhasePlay />
        ): Phase.Discard === phase? (
          <PhaseDiscard />
        ): Phase.Destroy === phase? (
          <PhaseDestroy />
        ): Phase.End === phase? (
          <PhaseEnd />
        ): null
      }
    </>
  )
}

export default SectionPhase
