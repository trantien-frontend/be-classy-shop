import * as React from "react";

export interface QuantityProps {}

export default function QuantityController(props: QuantityProps) {
  return (
    <div className="flex">
      <button className="flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      </button>
      <input
        type="text"
        className="flex h-8 w-12 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600"
      />
      <button className="flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
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
