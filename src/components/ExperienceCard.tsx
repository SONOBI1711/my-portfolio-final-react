type ExperienceCardData = {
  logo: string;
  title: string;
  date: string;
  points: string[];
};

const ExperienceCard = ({ logo, title, date, points }: ExperienceCardData) => {
  return (
    <div className="w-full max-w-[896px]  bg-white rounded-[12px] border border-gray-200 p-[32px] shadow-md">
      <div className="flex items-start justify-between ">
        {/* Logo */}
        <img src={logo} alt="company logo" className="w-[90px] h-auto" />

        {/* Title + Points */}
        <div className="flex-1 ml-[152px]">
          <h3 className="text-[20px] leading-[28px] font-semibold text-gray-900">
            {title}
          </h3>

          <ul className="mt-[12px] space-y-[6px] text-[16px] leading-[24px] font-normal text-gray-600 list-disc pl-[18px] w-[360px]">
            {points.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Date */}
        <p className="text-[16px] leading-[24px] text-gray-700 ">{date}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
