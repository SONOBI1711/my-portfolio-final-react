import { WorkCard } from "./WorkCard";
import { WorkObject } from "./WorkObject";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
 const Work = () => {
  return (
    <section className="py-[96px] h-[1800px]">
      <div className="max-w-[1280px] mx-auto flex flex-col justify-center items-center">
        {/* Title */}
        <Button variant="secondary" size="sm" className="w-[75px] h-[28px]">
          Work
        </Button>

        <SectionTitle text="Some of the noteworthy projects I have built:"></SectionTitle>

        {/* Cards */}
        <div className="mt-12 flex flex-col gap-12">
          {WorkObject.map((object, index) => (
            <WorkCard
              key={object.id}
              title={object.title}
              description={object.description}
              image={object.image}
              tags={object.tags}
              reverse={index % 2 === 1}
              icon={object.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;