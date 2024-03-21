import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  return (
    <section className="max-w-[80rem] mx-auto">
      <section className="flex flex-col gap-6 items-center justify-center py-10 px-2">
        <h2 className="text-5xl text-center font-bold">
          Have questions? We’re here to help!
        </h2>
        <p className="text-center text-lg">
          Our customers frequently ask these questions about our fixed deposit.
        </p>

        <section className="flex flex-col items-center mt-10 w-full max-w-[55rem] px-10">
          <div className="py-4 border-b-2 border-black flex items-center justify-between w-full">
            <p>How safe is my investment with Credpal?</p>

            <IoIosArrowDown color="black" />
          </div>
          <div className="py-4 border-b-2 border-black flex items-center justify-between w-full">
            <p>How does Credpal offer higher interests?</p>

            <IoIosArrowDown color="black" />
          </div>
          <div className="py-4 border-b-2 border-black flex items-center justify-between w-full">
            <p>Is CredPal regulated by the CBN or protected by the NDIC?</p>

            <IoIosArrowDown color="black" />
          </div>
          <div className="py-4 border-b-2 border-black flex items-center justify-between w-full">
            <p>Can I liquidate before the end of my investment tenure?</p>

            <IoIosArrowDown color="black" />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Faq;
