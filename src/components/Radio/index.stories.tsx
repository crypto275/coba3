import React, { useState } from "react";
import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {},
};

export const Default: React.FC = () => {
  const [radio, setRadio] = useState("one");
  const [radioSm, setRadioSm] = useState("one");

  const handleChange = (evt: { target: { value: any; }; }) => {
    // eslint-disable-next-line
    // tslint:disable-next-line:no-console
    console.info("fired");
    const { value } = evt.target;
    setRadio(value);
  };

  const handleChangeSm = (evt: { target: { value: any; }; }) => {
    const { value } = evt.target;
    setRadioSm(value);
  };

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <Radio name="md" value="one" onChange={handleChange} checked={radio === "one"} />
        <Radio name="md" value="two" onChange={handleChange} checked={radio === "two"} />
      </div>
      <div>
        <Radio scale="sm" name="sm" value="one" onChange={handleChangeSm} checked={radioSm === "one"} />
        <Radio scale="sm" name="sm" value="two" onChange={handleChangeSm} checked={radioSm === "two"} />
      </div>
    </>
  );
};
