import React, { useState } from "react";
import {Text} from "@chakra-ui/react";

const DynamicText = () => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  return <Text>{value}</Text>;
};

export default DynamicText;
