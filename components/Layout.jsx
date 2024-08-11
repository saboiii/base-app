import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  );
}
