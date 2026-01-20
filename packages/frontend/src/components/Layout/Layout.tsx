import { ReactNode, useState } from 'react';
import { MobileMenu } from './MobileMenu';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header toggleMobileMenu={toggleMobileMenu} />
      <div className="flex">
        <div className="lg:block">
          <Sidebar />
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
          </div>
        )}
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
};
