const SkillLogo = () => {
  const skills = [
    { name: "JavaScript", icon: "src/assets/icon-javscript.svg" },
    { name: "TypeScript", icon: "src/assets/icon-typescript.svg" },
    { name: "React", icon: "src/assets/icon-react.svg" },
    { name: "Next.js", icon: "src/assets/icon-nextjs.svg" },
    { name: "Node.js", icon: "src/assets/icon-nodejs.svg" },
    { name: "Express.js", icon: "src/assets/icon-express.svg" },
    { name: "Nest.js", icon: "src/assets/icon-nest.svg" },
    { name: "Socket.io", icon: "src/assets/icon-socket.svg" },

    { name: "PostgreSQL", icon: "src/assets/icon-postgresql.svg" },
    { name: "MongoDB", icon: "src/assets/icon-mongodb.svg" },
    { name: "Sass/Scss", icon: "src/assets/icon-sass.svg" },
    { name: "Tailwindcss", icon: "src/assets/icon-tailwindcss.svg" },
    { name: "Figma", icon: "src/assets/icon-figma.svg" },
    { name: "Cypress", icon: "src/assets/icon-cypress.svg" },
    { name: "Storybook", icon: "src/assets/icon-storybook.svg" },
    { name: "Git", icon: "src/assets/icon-git.svg" },
  ];

  return (
    <>
      {/* Grid 2 hàng */}
      <div className="grid grid-cols-8 gap-x-[86px] gap-y-[48px] justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-[64px] h-[64px]"
            />

            <p className="text-[18px] leading-[28px] font-normal text-gray-600">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillLogo;
