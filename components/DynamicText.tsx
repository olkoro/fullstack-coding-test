import React, {forwardRef, useImperativeHandle, useState} from "react";
import {Text} from "@chakra-ui/react";

const DynamicText = forwardRef((_, ref) => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  useImperativeHandle(ref, () => ({
    changeValue
  }));

  return <Text>{value}</Text>;
});

export default DynamicText;
