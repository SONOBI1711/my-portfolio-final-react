import { WorkPhoto } from "./WorkPhoto";
import { WorkTag } from "./WorkTag";
import { WorkIcon } from "./WorkIcon";

export const WorkCard = ({
  title,
  description,
  image,
  tags,
  icon,
  reverse = false,
}) => {
  return (
    <div
      className={`
        flex w-[1152px]
        mx-auto  
        justify-center
        
        rounded-[12px] overflow-hidden
        shadow-md bg-white
        ${reverse ? "flex-row-reverse" : ""}
      `}
    >
      {/* Left - Gray Image Area */}
      <div className="w-[576px] bg-gray-100 flex justify-center items-center  pt-[48px] pb-[34px]">
        <WorkPhoto src={image} alt={title} />
      </div>

      {/* Right - White Text Area */}
      <div className="w-[576px] bg-white  px-[48px] pt-[48px] pb-[34px]">
        <div className="flex flex-col gap-[24px]">
          <h3 className="text-[20px] leading-[28px] font-semibold text-gray-900">
            {title}
          </h3>

          <p className=" text-gray-600 text-[16px] font-normal leading-[24px] w-[440px] h-[96px]">
            {description}
          </p>

          <WorkTag tags={tags} />

          <WorkIcon icon={icon} />
        </div>
      </div>
    </div>
  );
};
