import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const LabelsPage = () => {
  return (
    <div className="h-screen">
      <Navbar />

      <main className="flex ">
        <Sidebar />
      </main>
    </div>
  );
};
