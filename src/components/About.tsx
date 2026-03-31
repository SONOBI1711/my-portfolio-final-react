import Avatar from "./Avatar";
import Text from "./Text";
import Button from "./Button";

const About = () => {
  return (
    <>
      <section className="w-full h-[962px]  py-[96px] bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-[32px] h-[770px] flex flex-col gap-[48px] items-center">
          <div>
            <Button
              variant="secondary"
              size="sm"
              className="w-[105px] h-[28px]"
            >
              About me
            </Button>
          </div>
          <div className="flex justify-between  w-full ">
            <div className="image-section w-[584px]">
              <Avatar
                src="src/assets/About-Avatar.png"
                alt="About-Avatar"
                className="w-[440px] h-[520px]"
              />
            </div>
            <div className="text-section flex flex-col justify-start w-[545px] ">
              <Text
                variant="about"
                heading="Curious about me? Here you have it:"
                content={[
                  {
                    type: "p",
                    text: "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.",
                  },
                  {
                    type: "p",
                    text: "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.",
                  },
                  {
                    type: "p",
                    text: "I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.",
                  },

                  {
                    type: "p",
                    text: "When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.",
                  },
                  {
                    type: "p",
                    text: "Finally, some quick bits about me.",
                  },

                  {
                    type: "list",
                    items: [
                      "B.E. in Computer Engineering",
                      "Full time freelancer",
                      "Avid learner",
                      "Aspiring indie hacker",
                    ],
                  },

                  {
                    type: "p",
                    text: "One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
