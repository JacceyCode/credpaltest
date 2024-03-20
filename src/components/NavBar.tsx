const NavBar = () => {
  return (
    <nav className="flex flex-row items-center justify-between p-8">
      <section className="flex gap-8 items-center">
        <p className="cursor-pointer">
          <img src="../../public/credlogo.svg" alt="credpal logo" />
        </p>
        <p className="cursor-pointer">Personel</p>
        <p className="cursor-pointer">Retail</p>
        <p className="cursor-pointer">Business</p>
      </section>
      <section className="flex gap-8 items-center">
        <p className="cursor-pointer">FAQs</p>
        <p className="cursor-pointer">Signin</p>
        <p className="py-2 px-8 rounded-md bg-blue-600 cursor-pointer text-white">
          Get App
        </p>
      </section>
    </nav>
  );
};

export default NavBar;
