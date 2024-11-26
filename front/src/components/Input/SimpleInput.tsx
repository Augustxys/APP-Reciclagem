import React from "react";
import { Input } from ".";
import { Text, TextInputProps } from "react-native";

interface SimpleInputProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  isRequired?: boolean;
  error?: string;
}

const SimpleInput = ({
  label,
  value,
  onChangeText,
  isRequired = false,
  error,
  ...rest
}: SimpleInputProps) => {
  return (
    <Input.Root>
      <Input.Label isRequired={isRequired}>{label}</Input.Label>
      <Input.FieldContainer>
        <Input.FieldText
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
      </Input.FieldContainer>
      {error && <Text style={{ color: "red", fontSize: 12 }}>{error}</Text>}
    </Input.Root>
  );
};

export default SimpleInput;
