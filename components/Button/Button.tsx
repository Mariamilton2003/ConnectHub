interface Props {
  text: string;
  varient: string;
  className?: string;
}

const Button = ({ text, varient, className }: Props) => {
  return (
    <button
      className={`${
        varient === "primary" ? "bg-violet-950 hover:bg-violet-600" :  "bg-violet-500 hover:bg-violet-950" 
      } text-white px-8 py-2 rounded-md ${className} `}
    >
      {text}
    </button>
  );
};

export default Button;
