const NavBar = () => {
  return (
    <section className="max-w-[80rem] mx-auto">
      <nav className="flex flex-col md:flex-row gap-8 items-center justify-between p-8">
        <section className="flex gap-10 items-center">
          <p className="cursor-pointer">
            <img src="./credlogo.svg" alt="credpal logo" />
          </p>
          <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">
            Personel
          </p>
          <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">
            Retail
          </p>
          <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">
            Business
          </p>
        </section>
        <section className="flex gap-10 items-center">
          <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">
            FAQs
          </p>
          <p className="cursor-pointer hover:border-b-2 hover:border-blue-600">
            Sign In
          </p>
          <p className="py-2 px-8 rounded-md bg-blue-600 cursor-pointer hover:bg-blue-800 text-white">
            Get App
          </p>
        </section>
      </nav>
    </section>
  );
};

export default NavBar;
