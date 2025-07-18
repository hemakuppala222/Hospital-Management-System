import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Activity,
  Calendar,
  DollarSign,
  FileText,
  Home,
  Package,
  Pill,
  TestTube,
  Users,
  UserCheck,
  Bed,
  BarChart3,
  Heart,
  X,
  Settings,
  Shield,
  UserCog,
  Database
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Patients', href: '/patients', icon: Users },
  { name: 'Appointments', href: '/appointments', icon: Calendar },
  { name: 'Staff', href: '/staff', icon: UserCheck },
  { name: 'Medical Records', href: '/medical', icon: FileText },
  { name: 'Billing', href: '/billing', icon: DollarSign },
  { name: 'Pharmacy', href: '/pharmacy', icon: Pill },
  { name: 'Laboratory', href: '/laboratory', icon: TestTube },
  { name: 'Inventory', href: '/inventory', icon: Package },
  { name: 'Wards', href: '/wards', icon: Bed },
  { name: 'Reports', href: '/reports', icon: BarChart3 },
];

const adminNavigation = [
  { name: 'Admin Panel', href: '/admin', icon: Shield },
  { name: 'User Management', href: '/admin/users', icon: UserCog },
  { name: 'System Settings', href: '/admin/settings', icon: Settings },
  { name: 'Audit Logs', href: '/admin/audit', icon: Database },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose}></div>
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 flex flex-col z-50 w-64 bg-white shadow-xl transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out lg:transition-none`}>
        
        {/* Logo and close button */}
        <div className="flex items-center justify-between flex-shrink-0 px-4 py-4 bg-blue-600">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-white" />
            <div className="ml-3">
              <h1 className="text-xl font-semibold text-white">MediCare</h1>
              <p className="text-xs text-blue-100">Hospital Management</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden rounded-md p-2 text-blue-100 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {/* Main Navigation */}
          <div className="space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => window.innerWidth < 1024 && onClose()}
                className={({ isActive }) =>
                  `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                  }`
                }
              >
                <item.icon
                  className={`flex-shrink-0 h-5 w-5 mr-3 transition-colors`}
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Admin Section */}
          <div className="pt-6">
            <div className="px-3 py-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Administration
              </h3>
            </div>
            <div className="space-y-2">
              {adminNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => window.innerWidth < 1024 && onClose()}
                  className={({ isActive }) =>
                    `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-red-50 text-red-700 border-r-2 border-red-700'
                        : 'text-gray-700 hover:text-red-700 hover:bg-red-50'
                    }`
                  }
                >
                  <item.icon
                    className={`flex-shrink-0 h-5 w-5 mr-3 transition-colors`}
                    aria-hidden="true"
                  />
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        {/* System status */}
        <div className="flex-shrink-0 px-4 py-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Activity className="h-5 w-5 text-green-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">System Status</p>
              <p className="text-xs text-gray-500">All systems operational</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;