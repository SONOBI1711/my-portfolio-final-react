export const WorkPhoto = ({ src, alt }) => {
  return (
    <div className="w-[480px] h-[384px] rounded-[12px] overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};
