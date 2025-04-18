import type { LucideIcon } from 'lucide-react';
import ConnectorsIcon from '../components/icons/ConnectorsIcon';
import CoreIcon from '../components/icons/CoreIcon';
import FavoritesIcon from '../components/icons/FavoritesIcon';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

import { Package2 } from 'lucide-react';

export const mainNavItems: NavItem[] = [
  { id: 'all', label: 'All', icon: Package2 },
  { id: 'core', label: 'Built-in', icon: CoreIcon },
  { id: 'connectors', label: 'Connectors', icon: ConnectorsIcon },
  { id: 'favorites', label: 'Favorites', icon: FavoritesIcon },
];