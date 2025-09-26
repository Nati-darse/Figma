type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>;
}
