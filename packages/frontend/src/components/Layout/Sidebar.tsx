import {
  LayoutDashboard,
  Calendar,
  CreditCard,
  Tag,
  Target,
  BarChart3,
  Settings,
} from 'lucide-react';
import { ElementType } from 'react';
import { Button } from '../ui/Button/Button';

interface NavItem {
  icon: ElementType;
  label: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Calendar, label: 'Planner' },
  { icon: CreditCard, label: 'Transactions' },
  { icon: Tag, label: 'Categories' },
  { icon: Target, label: 'Goals' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 h-[calc(100vh-64px)] sticky top-16 border-gray-700 hidden lg:block">
      <nav className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                  item.active
                    ? 'bg-primary-50 text-primary-600  '
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <Button className="w-full font-medium hover:shadow-lg transition-shadow">
          + Add Transaction
        </Button>
      </div>
    </aside>
  );
};
