import type { ReactNode } from "react";

type CardProps = {
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-gray-800/40 p-2 rounded-lg border border-gray-700/40 text-left">
      <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
      {children}
    </div>
  );
}
