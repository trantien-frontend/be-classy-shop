export interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <>
      <button
        className="uppercase font-light border-[1px] border-color-primary px-[28px] py-[14px] bg-color-primary text-white hover:bg-white hover:text-color-primary"
        type="submit"
      >
        {text}
      </button>
    </>
  );
}
