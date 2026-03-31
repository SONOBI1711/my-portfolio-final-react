import Button from "./Button";
import SectionTitle from "./SectionTitle";
import { TestimonialsObject } from "./TestimonialsObject";
import TestimonialsCard from "./TestimonialsCard";

export default function Testimonials() {
  return (
    <section className="h-[740px] bg-gray-50 py-[96px]">
      <div className="max-w-[1280px] mx-auto h-auto">
        <Button variant="secondary" size="sm" className="w-[125px] h-[28px]">
          Testimonials
        </Button>
        <SectionTitle text="Nice things people have said about me:" />
        <div className="h-auto flex gap-12 justify-center mt-12">
          {TestimonialsObject.map((object) => (
            <TestimonialsCard
              key={object.id}
              avatar={object.avatar}
              description={object.description}
              name={object.name}
              job={object.job}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
