import { TotalTalksBar, TotalTalksDetectedBar, TotalTalksDetectedBarLine, TotalTalksDetectedBarValue } from "./styles";

function GradeTalksProgress({
  calls,
  recognized,
  byScript
}) {
  return (
    <>
        <TotalTalksBar>
          <div>{calls}</div>
          <hr></hr>
        </TotalTalksBar>
        <TotalTalksDetectedBar>
            <TotalTalksDetectedBarValue byScript={byScript}>
              <div>{recognized}</div>
              {"/"}
              <div>{byScript}</div>
            </TotalTalksDetectedBarValue>
            <TotalTalksDetectedBarLine byScript={byScript}>
              <hr></hr>
            </TotalTalksDetectedBarLine>
        </TotalTalksDetectedBar>
    </>
  );
}

export default GradeTalksProgress;
