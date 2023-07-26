import NavbarAdmin from "@/components/admin/NavbarAdmin";

const layout = ({ children }) => {
  return (
    <div className="bg-[#EDF0F1] w-full min-h-screen">
      <div className="flex flex-col items-center">
        <NavbarAdmin />
        {children}
      </div>
    </div>
  );
};

export default layout;
