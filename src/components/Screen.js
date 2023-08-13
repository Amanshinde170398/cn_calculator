import { Textfit } from "react-textfit";
import { useCal } from "../hooks/calHook";

const Screen = () => {
  const { cal } = useCal();
  return (
    <Textfit className="screen" mode="single">
      {cal.num ? cal.num : cal.res}
    </Textfit>
  );
};

export default Screen;
