import { Input } from "reactstrap";

const InputRange = ({ name, type, updateFields }) => {
  const placeholder = type === "date" ? "YYYY-MM-DD" : `Batch ${name}`;

  return (
    <Input 
      id={name}
      type={type}
      placeholder={placeholder}
      onChange={e => updateFields(e, name)}
    />
  )
};

export default InputRange;