import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  Receipt,
  ShoppingCart,
  Mail,
  Archive,
  Calendar,
  HelpCircle,
  Settings,
  Circle
} from 'lucide-react';

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  active?: boolean;
};

const mainNavItems: NavItem[] = [
  { name: 'Dashboard', href: '#', icon: LayoutGrid, active: true },
  { name: 'Leads', href: '#', icon: Users },
  { name: 'Customers', href: '#', icon: User },
  { name: 'Proposals', href: '#', icon: FileText },
  { name: 'Invoices', href: '#', icon: Receipt },
  { name: 'Items', href: '#', icon: ShoppingCart },
  { name: 'Mail', href: '#', icon: Mail },
  { name: 'Shoebox', href: '#', icon: Archive },
  { name: 'Calendar', href: '#', icon: Calendar },
];

const helpNavItems: NavItem[] = [
  { name: 'Help', href: '#', icon: HelpCircle },
  { name: 'Settings', href: '#', icon: Settings },
  { name: 'Help', href: '#', icon: HelpCircle }, // Duplicate as per image
];

const SidebarNav: React.FC = () => {
  return (
    <nav className="flex flex-col h-full bg-sidebar p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-foreground text-background p-2 rounded-lg">
          <Circle size={24} fill="currentColor" />
        </div>
      </div>
      
      <div className="flex-grow">
        <ul className="space-y-2">
          {mainNavItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  'flex items-center py-2 px-3 rounded-md text-sm font-medium',
                  item.active
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-gray-200/50 hover:text-foreground'
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="space-y-2 pt-4 border-t">
          {helpNavItems.map((item, index) => (
            <li key={`${item.name}-${index}`}>
              <a
                href={item.href}
                className="flex items-center py-2 px-3 rounded-md text-sm font-medium text-muted-foreground hover:bg-gray-200/50 hover:text-foreground"
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SidebarNav;
