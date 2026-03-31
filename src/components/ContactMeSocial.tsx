export default function ContactMeSocial({ description, social }) {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <span className="block w-auto h-auto text-gray-600 font-normal text-[16px] leading-6">
        {description}
      </span>
      <div className="w-auto h-auto flex justify-center">{social}</div>
    </div>
  );
}
