import { InputHTMLAttributes } from "react";


const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="py-3 px-4"
      {...rest}
    />
  );
}

export default Input;