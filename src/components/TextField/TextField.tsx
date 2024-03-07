import {} from "react";
import type { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface TextFieldProps {
  title: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  message?: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
}

export function TextField({
  title,
  type,
  name,
  message,
  rules,
  register,
}: TextFieldProps) {
  const nameCapitalize = title.charAt(0).toLocaleUpperCase() + title.slice(1);

  return (
    <div className="form-group mb-2">
      <label
        className="uppercase text-xs tracking-wider block mb-2 font-normal"
        htmlFor={name}
      >
        {title}
        <span className="text-orange-600">*</span>
      </label>
      <input
        type={type}
        {...register(name, { ...rules, onChange: (e) => {} })}
        className="w-full border-[1px] p-3 border-gray-300 bg-gray-200 font-normal outline-none focus:border-gray-500 rounded-sm focus: shadow-sm"
        placeholder={`Nhập ${nameCapitalize}`}
      />
      <div className="mt-1 text-red-600 font-normal error-message min-h-[1rem] text-xs">
        {message}
      </div>
    </div>
  );
}
