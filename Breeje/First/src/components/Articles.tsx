import SectionTitle from "./UI/SectionTitle";
import Card from "./UI/Card";

export default function Articles() {
  return (
    <section className="py-20 px-6 text-center">
      <SectionTitle title="Take a look at our latest articles" />
      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3].map((a) => (
          <Card key={a} title={`Article Title ${a}`}>
            <p className="text-gray-400 text-sm">
              A short preview of the article goes here.
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
