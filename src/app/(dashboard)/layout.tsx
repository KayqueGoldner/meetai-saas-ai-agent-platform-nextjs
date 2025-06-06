import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="bg-muted flex h-screen w-screen flex-col">
        {children}
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
