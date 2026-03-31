export default function Button({ children, variant, size, className = "" }) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-[12px] transition";

  const variants = {
    primary: "bg-gray-900 text-gray-50 hover:bg-gray-700",
    secondary: "bg-gray-200 text-gray-600 hover:bg-gray-500",
  };

  const sizes = {
    sm: "px-[20px] py-[4px] text-[14px] leading-[20px]",
    md: "px-[16px] py-[6px] text-[16px] leading-[24px]",
  };

  return (
    <div className="flex justify-center">
      <button
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
