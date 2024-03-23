import { HTMLInputTypeAttribute, forwardRef } from "react";

export interface InputNumberProps {
  title: string;
  name: string;
  type: HTMLInputTypeAttribute;
  message?: string;
  className: string;
  errorClassName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | readonly string[] | number | undefined;
}

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const { className, errorClassName, onChange, ...rest } = props;
    const { type, name, message, value } = rest;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (!Number(value)) return;
      onChange?.(e);
    };

    return (
      <div className="form-group mb-2">
        <input
          value={value}
          type={type}
          name={name}
          className={className}
          ref={ref}
          onChange={(e) => handleInputChange(e)}
        />
        <div className={errorClassName}>{message}</div>
      </div>
    );
  },
);

// export function InputNumber({
//   message,
//   className,
//   errorClassName,
//   ...rest
// }: InputNumberProps) {
//   const { title, name, type } = rest;
//   return (
//     <div className="form-group mb-2">
//       <input value={1} type={type} name={name} className={className} />
//       <div className={errorClassName}>{message}</div>
//     </div>
//   );
// }
