import NavbarRoutes from "@/components/navbar_routes";

const Navbar = () => {
  return (
    <div className="flex items-center h-full p-4 bg-white border-b shadow-sm">
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
