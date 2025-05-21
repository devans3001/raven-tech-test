import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/Navbar";
import ProtectedRoute from "../auth/ProtectedRoute";

function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="md:h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </ProtectedRoute>
  );
}
export default DashboardLayout;
