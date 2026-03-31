type ContentItem =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

type TextProps = {
  heading: string;
  variant?: "hero" | "about";
  content: ContentItem[];
};

const Text = ({ heading, variant = "about", content }: TextProps) => {
  const headingStyle =
    variant === "hero"
      ? "text-[60px] leading-[72px] font-bold"
      : "text-[30px] leading-[36px] font-semibold";

  const paragraphStyle = "text-[16px] leading-[24px] font-normal text-gray-600";

  return (
    <div className="flex flex-col gap-4">
      {/* Heading */}
      <h1 className={headingStyle}>{heading}</h1>

      {/* Content */}
      <div className="flex flex-col gap-4">
        {content.map((block, index) => {
          if (block.type === "p") {
            return (
              <p key={index} className={paragraphStyle}>
                {block.text}
              </p>
            );
          }

          if (block.type === "list") {
            return (
              <ul
                key={index}
                className="
                  list-disc 
                  pl-5 
                  grid grid-cols-2 
                  gap-x-12 gap-y-2
                  text-[16px] leading-[24px] 
                  text-gray-600
                "
              >
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default Text;
