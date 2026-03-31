export default function HeroLocation() {
  return (
    <div className="flex flex-col justify-start pb-[8px]">
      <div className="flex items-center text-[16px] leading-[24px] text-gray-600 gap-2">
        <img src="src/assets/Location-Icon.svg" alt="Location-icon" />
        <span>Ahmedabad, India</span>
      </div>
      <div className="flex items-center text-[16px] leading-[24px] text-gray-600 gap-2">
        <img src="src/assets/Green-Dot.svg" alt="Green-Dot-icon" />
        <span>Available for new projects</span>
      </div>
    </div>
  );
}
