import ExperienceCard from "./ExperienceCard";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const Experience = () => {
  return (
    <div className="w-full h-[1140px] bg-gray-50 py-[96px]">
      <div className="max-w-[1280px] mx-auto justify-center items-center">
        <div className="flex flex-col mx-auto justify-center items-center ">
          <Button variant="secondary" size="sm" className="w-[115px] h-[28px]">
            Experience
          </Button>
        </div>
        <section className="w-full flex flex-col items-center gap-[48px]">
          <div>
            <SectionTitle text="Here is a quick summary of my most recent experiences:"></SectionTitle>
          </div>
          <ExperienceCard
            logo="src/assets/logo-upwork.svg"
            title="Sr. Frontend Developer"
            date="Nov 2021 - Present"
            points={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Ut pretium arcu et massa semper, id fringilla leo semper.",
              "Sed quis justo ac magna.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ]}
          />

          <ExperienceCard
            logo="src/assets/logo-upwork.svg"
            title="Team Lead"
            date="Jul 2017 - Oct 2021"
            points={[
              "Sed quis justo ac magna.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Sed quis justo ac magna.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ]}
          />

          <ExperienceCard
            logo="src/assets/logo-upwork.svg"
            title="Full Stack Developer"
            date="Dec 2015 - May 2017"
            points={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ]}
          />
        </section>
      </div>
    </div>
  );
};

export default Experience;
