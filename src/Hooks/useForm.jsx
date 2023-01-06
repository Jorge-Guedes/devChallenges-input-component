import React from "react";

const useForm = (valueText="") => {
  const [value, setValue] = React.useState(valueText);
  const [box, setBox] = React.useState(false);

  function onChange({ target }) {
    setValue(target.value);
  }

  return { value, setValue, onChange, box, setBox };
};

export default useForm;
