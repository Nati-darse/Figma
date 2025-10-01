import type { ReactNode } from "react";

type SectionTitleProps = {
  title: ReactNode;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>;
}
