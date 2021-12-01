import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import InputRange from "./InputRange";

const InputFields = ({ type, updateFields, handleSubmit }) => {
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
        <InputRange 
          name="start"
          type={type}
          updateFields={updateFields}
        />
      </FormGroup>
      <FormGroup>
        <Label for="end">End</Label>
        <InputRange 
          name="end"
          type={type}
          updateFields={updateFields}
        />
      </FormGroup>
      <FormGroup>
        <Button id="submit" type="submit">Create Report</Button>
      </FormGroup>
    </Form>
  );
};

export default InputFields;