import { Button } from "./index";

const ButtonBox = () => {
  const buttons = [
    "c",
    "+-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  return (
    <div className="buttonBox">
      {buttons.map((btn, i) => (
        <Button value={btn} key={i} />
      ))}
    </div>
  );
};

export default ButtonBox;
