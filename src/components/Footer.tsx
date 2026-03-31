export default function Footer() {
  return (
    <section className="w-full h-auto bg-gray-50 py-[24px]">
      <div className="max-w-[1280px] mx-auto h-auto">
        <div className="flex justify-center item-center gap-[8px]">
          <img
            src="src/assets/Copyright.svg"
            alt=""
            className="w-4 h-4 relative top-[2px]"
          />
          <p className="text-gray-600 font-normal text-sm leading-5 flex justify-center items-center gap-1">
            2023 |{" "}
            <a href="#" className="underline underline-offset-2">
              Designed
            </a>{" "}
            and{" "}
            <a href="#" className="underline underline-offset-2">
              coded
            </a>{" "}
            with ❤️️ by Sagar Shah
          </p>
        </div>
      </div>
    </section>
  );
}
