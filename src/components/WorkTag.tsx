export const WorkTag = ({ tags }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <span
          key={tag}
          className=" px-[20px] py-[4px] text-[14px] leading-[20px] bg-gray-200 rounded-[12px]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
