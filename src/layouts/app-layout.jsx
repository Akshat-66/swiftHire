import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid-background fixed inset-0 -z-10" />

      <Header />

      <main className="flex-1 w-full">
        {/* wider max width + small side padding */}
        <div className="mx-auto max-w-screen-xl px-2 sm:px-3 lg:px-4 py-4">
          <div className="min-h-[60vh]">
            <Outlet />
          </div>
        </div>
      </main>

      <footer className="p-6 sm:p-8 text-center bg-gray-800">
        © Akshat || Apply. Hire. Grow.
      </footer>
    </div>
  );
};

export default AppLayout;
