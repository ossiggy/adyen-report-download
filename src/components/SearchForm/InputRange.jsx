import { Input } from "reactstrap";

const InputRange = ({ name, type, min, max, setValidDates }) => {
  const placeholder = type === "date" ? "YYYY-MM-DD" : `Batch ${name}`;

  return (
    <Input 
      id={name}
      type={type}
      min={min}
      max={max}
      placeholder={placeholder}
      onChange={e => setValidDates(e, name)}
    />
  )
};

export default InputRange;