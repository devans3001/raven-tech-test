import Navbar from "@/components/molecules/Navbar"


function DashboardLayout({children}) {
  return (
    <div
    >
          <Navbar />

        {children}
    </div>
  )
}
export default DashboardLayout