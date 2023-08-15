import NavbarAdmin from "@/components/admin/NavbarAdmin";
import Sidebar from "@/components/admin/Sidebar";

const layout = ({ children }) => {
  
  return (
    <div className="bg-[#EDF0F1] w-full min-h-screen">
      <div className="flex justify-center">
        {/* <NavbarAdmin /> */}
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default layout;
