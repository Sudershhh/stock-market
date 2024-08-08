"use client";

import { useState } from "react";
import { Input } from "@nextui-org/react";
import { VenetianMask, Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onValueChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="my-10">
      <Input
        value={value}
        label={label}
        variant="bordered"
        onValueChange={onValueChange}
        className="w-full text-secondary-400"
        color="secondary"
        labelPlacement="outside"
        startContent={<VenetianMask color="#cbacf9" />}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={togglePasswordVisibility}
            aria-label="toggle password visibility"
          >
            {isPasswordVisible ? (
              <EyeOff className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <Eye className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isPasswordVisible ? "text" : "password"}
      />
    </div>
  );
};

export default PasswordInput;
