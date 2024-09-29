const navigation = [
  { name: "Home", href: "/" },
  { name: "Instagram", href: "https://www.instagram.com/web_codder_official/" },
  { name: "Whatsapp", href: "https://wa.me/918949666472" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@web_codder/?sub_confirmation=1",
  },
];

const Header = () => {
  return (
    <header className="flex items-center px-20 justify-end mt-4 pb-2 border-b-4 border-[#6739B7]">
      <a
        href="https://www.youtube.com/@web_codder/?sub_confirmation=1"
        className="flex items-center w-1/3 gap-2"
      >
        <img
          className="border-4 rounded-full w-14"
          src="https://yt3.googleusercontent.com/lPaZvF3j8by-h91-D8J1CH2NG94kbUhiQbYZ8ILuT5Hwt1oDtNhs11_HQzN1Po14cZksth2cHck=s160-c-k-c0x00ffffff-no-rj"
          alt="youtube"
        />
        <div>
          <h1 className="font-semibold">Web Codder</h1>
          <p className="text-xs font-semibold">Youtube@Web_Codder</p>
        </div>
      </a>

      <div className="flex-1 text-center">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="mx-4  font-bold leading-6 text-gray-900"
          >
            {item.name}
          </a>
        ))}
      </div>
      <a
        href="https://www.youtube.com/@web_codder/?sub_confirmation=1"
        className="px-6 py-1 font-semibold border-2 text-white bg-[#6739B7] rounded-md"
      >
        Subscribe Now!
      </a>
    </header>
  );
};

export default Header;
