import {
  FaGooglePlay,
  FaApple,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black md:p-20 p-8">
      <section className="max-w-[80rem] mx-auto">
        <section className="flex xl:flex-row w-full flex-col items-start justify-between gap-10">
          {/* 1st */}
          <section className="flex flex-col max-w-96 gap-5">
            <h4>
              <img src="./logo-white.png" alt="logo" />
            </h4>
            <p className="text-sm text-white/60">
              CredPal is a revolutionary credit solution geared towards
              providing seamless credit access for businesses and individuals
              across developing economies.
            </p>

            <div className="flex items-center gap-5">
              <div className="mt-10 py-2 px-4 w-40 bg-gradient-to-r from-rose-300 via-amber-400 to-lime-500 rounded-sm text-black flex items-center gap-4">
                <FaGooglePlay size={24} />

                <div className="flex flex-col">
                  <span className="text-xs">Downlaod on</span>
                  <span className="text-sm font-medium">Google Play</span>
                </div>
              </div>

              <div className="mt-10 px-4 py-2 w-40 bg-gradient-to-r from-rose-300 via-amber-400 to-lime-500 rounded-sm text-black flex items-center gap-4">
                <FaApple size={24} />

                <div className="flex flex-col">
                  <span className="text-xs">Downlaod on</span>
                  <span className="text-base font-medium">App Store</span>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col md:flex-row justify-between w-full">
            {/* 2nd */}
            <section className="flex flex-col gap-5">
              <h4 className="text-white text-lg">Products</h4>
              <p className="text-sm text-white/60">Personal Credit Cards</p>
              <p className="text-sm text-white/60">Business Credit Cards</p>
              <p className="text-sm text-white/60">Expense Management</p>
            </section>

            {/* 3rd */}
            <section className="flex flex-col gap-5">
              <h4 className="text-white text-lg">Legal</h4>
              <p className="text-sm text-white/60">
                Merchants terms of service
              </p>
              <p className="text-sm text-white/60">Customer's terms of use</p>
              <p className="text-sm text-white/60">Privacy policy</p>
            </section>

            {/* 4th */}
            <section className="flex flex-col gap-5">
              <h4 className="text-white text-lg">Support</h4>
              <p className="text-sm text-white/60">FAQs</p>
              <p className="text-sm text-white/60">Blog</p>
            </section>

            {/* 5th */}
            <section className="flex flex-col gap-5">
              <h4 className="text-white text-lg">Connect with us</h4>
              <div className="flex items-center gap-3 text-white/60">
                <FaFacebook />
                <FaTwitter />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
                <FaYoutube />
              </div>

              <h4 className="text-white mt-8 text-lg">Contact</h4>
              <p className="text-sm text-white/60">hello@credpal.com</p>
            </section>
          </section>
        </section>

        <section className="border-t-2 border-gray-600 mt-20 py-10 w-full justify-between items-center flex">
          <p className="text-gray-500">
            Copyright &copy; 2020 &bull; All Rights Reserved
          </p>
          <span
            onClick={goToTop}
            className="text-gray-500 hover:text-gray-100 cursor-pointer md:pr-20 flex items-center gap-2"
          >
            <IoIosArrowUp /> Back to Top
          </span>
        </section>
      </section>
    </section>
  );
};

export default Footer;
