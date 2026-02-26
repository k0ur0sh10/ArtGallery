import React from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { Palette, Calendar, ShoppingCart, Mail, LayoutDashboard, LogOut } from 'lucide-react';

export const AdminLayout: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/paintings', label: 'Paintings', icon: Palette },
    { path: '/admin/events', label: 'Events', icon: Calendar },
    { path: '/admin/orders', label: 'Orders', icon: ShoppingCart },
    { path: '/admin/subscribers', label: 'Newsletter', icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden bg-[#1A1A1C] border-b border-[#F5F1EA]/10 p-4">
        <Link to="/" className="block">
          <h1 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl text-[#F5F1EA]">
            Elena Rousseau
          </h1>
          <p className="text-xs uppercase tracking-wider text-[#C6A75E] mt-1">
            Admin Dashboard
          </p>
        </Link>
      </div>

      {/* Sidebar */}
      <aside className="lg:w-64 bg-[#1A1A1C] border-r border-[#F5F1EA]/10 flex flex-col">
        <div className="hidden lg:block p-6 border-b border-[#F5F1EA]/10">
          <Link to="/" className="block">
            <h1 style={{ fontFamily: 'var(--font-serif)' }} className="text-2xl text-[#F5F1EA]">
              Elena Rousseau
            </h1>
            <p className="text-xs uppercase tracking-wider text-[#C6A75E] mt-1">
              Admin Dashboard
            </p>
          </Link>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded transition-colors text-sm lg:text-base ${isActive(item.path)
                        ? 'bg-[#C6A75E] text-[#0B0B0C]'
                        : 'text-[#F5F1EA]/70 hover:bg-[#F5F1EA]/5 hover:text-[#F5F1EA]'
                      }`}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-[#F5F1EA]/10">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 lg:px-4 py-2 lg:py-3 text-[#F5F1EA]/70 hover:bg-[#F5F1EA]/5 hover:text-[#F5F1EA] rounded transition-colors text-sm lg:text-base"
          >
            <LogOut className="w-4 h-4 lg:w-5 lg:h-5" />
            <span>Back to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};