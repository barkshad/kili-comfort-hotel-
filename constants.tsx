
import React from 'react';
import { 
  Wifi, 
  Car, 
  Wind, 
  Tv, 
  Utensils, 
  ShieldCheck, 
  Briefcase, 
  MapPin,
  Phone,
  Mail,
  Facebook
} from 'lucide-react';
import { Amenity, Attraction, NavItem } from './types';

export const HOTEL_INFO = {
  name: "Kili Comfort Hotel",
  location: "Mabirikani, Kilifi North, Kilifi County, Kenya",
  tagline: "Comfort Away From Home",
  contact: {
    phone: "+254 745 557 057",
    whatsapp: "https://wa.me/254745557057",
    email: "kilicomforthotel@gmail.com",
    facebook: "https://www.facebook.com/kilicomfort.hotel/",
    airbnb: "https://www.airbnb.com/rooms/782927001933959913"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Rooms & Amenities", path: "/rooms" },
  { label: "Explore Kilifi", path: "/explore" },
  { label: "Contact", path: "/contact" }
];

export const AMENITIES: Amenity[] = [
  { icon: 'Wind', title: "Air-conditioned Rooms" },
  { icon: 'Wifi', title: "Free Wi-Fi" },
  { icon: 'Car', title: "Free On-site Parking" },
  { icon: 'Briefcase', title: "Dedicated Workspace" },
  { icon: 'Tv', title: "Flat Screen TV" },
  { icon: 'Utensils', title: "Kitchen Access" },
  { icon: 'ShieldCheck', title: "Safe & Quiet Area" },
  { icon: 'MapPin', title: "Close to Kilifi Town" }
];

export const ATTRACTIONS: Attraction[] = [
  {
    title: "Kilifi Beaches",
    description: "Pristine white sands and turquoise waters, perfect for relaxation and water sports.",
    imageUrl: "https://picsum.photos/id/1011/800/600"
  },
  {
    title: "Kilifi Creek",
    description: "A stunning natural inlet offering breathtaking sunsets and dhow cruises.",
    imageUrl: "https://picsum.photos/id/1015/800/600"
  },
  {
    title: "Mnarani Ruins",
    description: "Historical 14th-century ruins overlooking the creek, rich in coastal heritage.",
    imageUrl: "https://picsum.photos/id/1019/800/600"
  },
  {
    title: "Local Markets",
    description: "Vibrant markets showcasing local crafts, fresh produce, and coastal culture.",
    imageUrl: "https://picsum.photos/id/1020/800/600"
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Wifi: <Wifi className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  Wind: <Wind className="w-6 h-6" />,
  Tv: <Tv className="w-6 h-6" />,
  Utensils: <Utensils className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Phone: <Phone className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />,
  Facebook: <Facebook className="w-6 h-6" />
};
