import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={
        "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition shadow-md " +
        "bg-gradient-to-b from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 " +
        "shadow-purple-700/30 " +
        className
      }
    >
      {children}
    </button>
  );
}
