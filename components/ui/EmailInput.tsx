import { useMemo } from "react";
import { Input } from "@nextui-org/react";
import { MailIcon } from "lucide-react";

const EmailInput = ({
  email,
  onEmailChange,
  placeholder = "example@email.com",
}: {
  email: string;
  onEmailChange: (email: string) => void;
  placeholder?: string;
}) => {
  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  return (
    <Input
      value={email}
      type="email"
      label="Email"
      variant="bordered"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "secondary"}
      errorMessage="Please enter a valid email"
      onValueChange={onEmailChange}
      labelPlacement="outside"
      className="w-full text-secondary-400"
      placeholder={placeholder}
      startContent={<MailIcon color="#cbacf9" />}
    />
  );
};

export default EmailInput;
