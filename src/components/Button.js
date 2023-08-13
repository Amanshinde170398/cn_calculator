const Button = ({ value }) => {
  const opt = {
    "/": "opt",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "=": "equal",
  };
  return <div className={`button ${opt[value]}`}>{value}</div>;
};

export default Button;
