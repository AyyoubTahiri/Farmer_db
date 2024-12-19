export interface User {
  id: number;
  username: string;
  email: string;
  user_type: 'farmer' | 'company' | 'expert' | 'university';
}

export interface Product {
  id: number;
  owner_id: number;
  product_name: string;
  category: string;
  price: number;
}

export interface Discussion {
  id: number;
  topic: string;
  created_by: number;
  created_at: string;
}