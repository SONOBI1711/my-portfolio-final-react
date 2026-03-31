export default function ContactMeInfo({ icon, description, symbol }) {
  return (
    <div className="flex justify-center gap-5 items-center self-center">
      <div className="flex items-center justify-center">
        <img src={icon} alt="icon" className="w-8 h-8 relative top-[4px]" />
      </div>
      <div className="text-gray-900 font-semibold text-[36px] leading-[40px]">
        {description}
      </div>
      <div className="flex items-center justify-center">
        <img
          src={symbol}
          alt="copy-icon"
          className="w-8 h-8 relative top-[4px] "
        />
      </div>
    </div>
  );
}
