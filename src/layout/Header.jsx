import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate()
  return (
    <header  className="w-full bg-amber-700 py-4 md:px-10 px-4 flex items-center h-[82px]">
      <div className="text-white text-3xl font-medium md:flex text-center justify-between w-full "
      onClick={() => navigate("/")}>
        <h1 className="hover:scale-110 duration-200 cursor-pointer">Forms Fusion</h1>
      </div>
    </header>
  );
}

export default Header;
