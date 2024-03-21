import SideNav from '@/app/ui/dashboard/sidenav';
 

//  DASHBOARD LAYOUT 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-none md:flex h-screen  md:flex-row md:overflow-hidden">
      {/* left  */}
      <div className="w-full absolute left-0 top-0 md:relative flex-none md:w-64">
        <SideNav />
      </div>
      {/* Right  */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}