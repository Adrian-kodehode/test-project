import React from "react";

interface TextFieldProps {
  placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({ placeholder }) => {
  return <input type="text" placeholder={placeholder} className="text-field" />;
};

export default TextField;
