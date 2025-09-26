import { ReactNode } from "react";

type CardProps = {
  title: string;
  children?: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-gray-800/40 p-6 rounded-lg border border-gray-700/40 text-left">
      <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
      {children}
    </div>
  );
}
