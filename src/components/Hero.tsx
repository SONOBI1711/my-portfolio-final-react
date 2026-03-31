import Avatar from "./Avatar";
import Text from "./Text";
import HeroLocation from "./HeroLocation";
import HeroSocial from "./HeroSocial";

const Hero = () => {
  return (
    <section className="w-full h-[552px]  py-[96px]">
      <div className="max-w-[1280px] mx-auto px-[32px] h-[360px] flex justify-between items-center">
        <div className="text-section flex flex-col justify-start w-[720px] gap-[48px]">
          <Text
            variant="hero"
            heading="Hi, I'm Sagar 👋"
            content={[
              {
                type: "p",
                text: "I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.",
              },
            ]}
          />
          <div>
            <HeroLocation />
          </div>

          <div>
            <HeroSocial />
          </div>
        </div>
        <div className="image-section">
          <Avatar
            src="src/assets/Hero-Avatar.png"
            alt="Hero-Avatar"
            className="w-[320px] h-[360px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
