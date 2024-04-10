import * as React from "react";

interface ButtonProps {
 text: string;
 onClick?: () => void;
 type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button" }) => {
 return (
  <>
   <button
    onClick={onClick}
    type={type}
    className="bg-zinc-700 rounded-md p-3 text-slate-50 shadow-lg"
   >
    {text}
   </button>
  </>
 );
};

export default Button;
