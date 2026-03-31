import Button from "./Button";
import SectionTitle from "./SectionTitle";
import SkillsLogo from "./SkillsLogo";

export default function Skills() {
  return (
    <section className="w-full h-[560px] ">
      <div className="max-w-[1280px] mx-auto py-[96px] px-[32px] flex flex-col items-center">
        <div>
          <Button variant="secondary" size="sm" className="w-[75px] h-[28px]">
            Skills
          </Button>
        </div>
        <div>
          <SectionTitle text="The skills, tools and technologies I am really good at:"></SectionTitle>
        </div>
        <div className="mt-12">
          <SkillsLogo />
        </div>
      </div>
    </section>
  );
}
