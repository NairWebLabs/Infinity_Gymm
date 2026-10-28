export interface GymService {
  id: string;
  name: string;
  category: 'strength' | 'coaching' | 'aerobics' | 'wellness';
  description: string;
  highlights: string[];
  intensity: 'Low' | 'Moderate' | 'High' | 'Elite';
  duration: string;
  targetGoal: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  reviewsCount?: number;
  isLocalGuide?: boolean;
  rating: number;
  date: string;
  comment: string;
  tags: string[];
  avatarInitial: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  description: string;
  features: string[];
}
