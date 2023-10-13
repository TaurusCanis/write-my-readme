// components/Navbar.tsx

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-white border-b border-gray-200">
      <div className="text-2xl font-bold text-gray-900">
        {/* <Link href="/"> */}
            Write My README
        {/* </Link> */}
      </div>
      {/* <div>
        <Link href="https://www.buymeacoffee.com/adole" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-emerald-500 text-white rounded-lg">
            Buy Me A Coffee
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
