import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition">
      {children}
    </button>
  );
}
