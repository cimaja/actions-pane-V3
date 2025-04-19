import type { LucideIcon } from 'lucide-react';
import FavoritesIcon from '../components/icons/FavoritesIcon';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

import { Package2, Plug } from 'lucide-react';

export const mainNavItems: NavItem[] = [
  { id: 'core', label: 'Built-in', icon: Package2 },
  { id: 'connectors', label: 'Connectors', icon: Plug },
  { id: 'favorites', label: 'Favorites', icon: FavoritesIcon },
];