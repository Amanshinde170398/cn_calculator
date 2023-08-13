import { useCal } from "../hooks/calHook";

const opt = {
  "/": "opt",
  x: "opt",
  "-": "opt",
  "+": "opt",
  "=": "equal",
};

const Button = ({ value }) => {
  const { cal, setCal } = useCal();

  // handle reset
  const handleReset = () => {
    setCal({ num: 0, res: 0, sign: "" });
  };

  // handle comma click
  const commaClick = () => {
    setCal({
      ...cal,
      num: !cal.num.toString().includes(".") ? cal.num + value : cal.num,
    });
  };

  // handle number btn click
  const handleClickBtn = () => {
    const numString = value.toString();
    let numVal;
    if (numString == 0 && cal.num == 0) {
      numVal = 0;
    } else {
      numVal = Number(cal.num + numString);
    }

    setCal({ ...cal, num: numVal });
  };

  // handle sign click
  const signClick = () => {
    setCal({
      sign: value,
      res: !cal.res && cal.num ? cal.num : cal.res,
      num: 0,
    });
  };

  // handle equal to click
  const equalToClick = () => {
    const math = (a, b, sign) => {
      const operator = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        x: (a, b) => a * b,
        "/": (a, b) => a / b,
      };
      return operator[sign](a, b);
    };
    setCal({ res: math(cal.res, cal.num, cal.sign), num: 0, sign: "" });
  };

  // handle Invert click
  const clickInvert = () => {
    setCal({ ...cal, num: -cal.num });
  };

  // handle percentage
  const clickPercentage = () => {
    setCal({ ...cal, num: cal.num / 100 });
  };

  // handle btn click
  const handleBtnEvent = () => {
    let event = {
      ".": commaClick,
      c: handleReset,
      "/": signClick,
      "+": signClick,
      x: signClick,
      "-": signClick,
      "=": equalToClick,
      "+-": clickInvert,
      "%": clickPercentage,
    };
    if (event[value]) {
      return event[value]();
    } else {
      handleClickBtn();
    }
  };
  return (
    <div className={`button ${opt[value]}`} onClick={handleBtnEvent}>
      {value}
    </div>
  );
};

export default Button;
