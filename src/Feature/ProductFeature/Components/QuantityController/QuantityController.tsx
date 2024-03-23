import { useState } from "react";
import { InputNumber } from "../../../../components";

export interface QuantityProps {
  productQuantity: number | string;
  onProductQuantityChange: (newProductQuantity: number) => void;
}

const MAX = 50;

export default function QuantityController({
  productQuantity,
  onProductQuantityChange,
}: QuantityProps) {
  const [value, setValue] = useState(productQuantity || 0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onProductQuantityChange?.(+value);
    setValue(+value);
  };

  const increase = () => {
    onProductQuantityChange?.(+value + 1);
    setValue(+value + 1);
  };

  const decrease = () => {
    if (value === 0) return;
    onProductQuantityChange?.(+value - 1);
    setValue(+value - 1);
  };

  return (
    <div className="flex my-5">
      <button
        onClick={() => decrease()}
        className="flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      </button>

      <InputNumber
        className="h-8 w-12 text-center font-normal rounded-l-sm border border-gray-300 text-gray-600"
        errorClassName="hidden"
        name=""
        title=""
        type="text"
        value={value}
        onChange={handleInputChange}
      />

      <button
        onClick={() => increase()}
        className="flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
