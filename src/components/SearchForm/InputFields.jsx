import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const InputFields = ({ type, updateFields, handleSubmit }) => {
  const [range, setRange] = useState({
    min: '',
    max: ''
  });

  let startInput, endInput;

  const setValidDates = (e, pole) => {
    const date = e.target.value.split("-");
    const month = Number(date[1]);

    let min, max;

    if (pole === "min") {
      min = e.target.value;
      max = `${date[0]}-${month + 1}-01`;
    } else if (pole === "max") {
      min = `${date[0]}-${month-1}-01`;
      max=e.target.value
    };

    setRange(prevState => ({
      ...prevState,
      min,
      max
    }));
  };

  if (type === "date-based") {
    startInput = <Input id="start" name="start" type="date" min={range.min} max={range.max} placeholder="YYYY-MM-DD" onChange={(e) => setValidDates(e, "min")}></Input>
    endInput = <Input id="end" name="end" type="date" min={range.min} max={range.max} placeholder="YYYY-MM-DD" onChange={(e) => setValidDates(e, "max")}></Input>
  } else {
    startInput = <Input id="start" name="start" placeholder="Batch Start" onChange={(e) => updateFields(e)}></Input>
    endInput = <Input id="end" name="end" placeholder="Batch End" onChange={(e) => updateFields(e)}></Input>
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <FormGroup>
        <Label for="merchantAccount">Merchant Account</Label>
        <Input id="merchantAccount" name="merchantAccount" onChange={(e) => updateFields(e)}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="username">Report Username</Label>
        <Input id="username" name="username" placeholder="Reporting webservice user" onChange={(e) => updateFields(e)}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="password">Report Password</Label>
        <Input id="password" name="password"  onChange={(e) => updateFields(e)}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="start">Start</Label>
        {startInput}
      </FormGroup>
      <FormGroup>
        <Label for="end">End</Label>
        {endInput}
      </FormGroup>
      <FormGroup>
        <Button id="submit" type="submit">Create Report</Button>
      </FormGroup>
    </Form>
  );
};

export default InputFields;