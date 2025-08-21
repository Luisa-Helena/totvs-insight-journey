export type ClusterId = 'varejo' | 'servicos' | 'industria' | 'saude' | 'educacao';
export type Tier = 'Alto Potencial' | 'Crescimento' | 'Maturidade';
export type ProductCategory = 'ERP' | 'BI' | 'RH' | 'CRM' | 'Logística' | 'Fiscal';
export type PriceModel = 'mensal' | 'anual' | 'sob_consulta';

export interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  cluster: ClusterId;
  tier: Tier;
  goals: string[];
  avatar?: string;
}

export interface Cluster {
  id: ClusterId;
  name: string;
  description: string;
  challenges: string[];
  metrics: { label: string; value: string }[];
  suggestedKpis: string[];
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  priceModel: PriceModel;
  priceBRL?: number;
  highlights: string[];
  badges?: string[];
  fit: ClusterId[];
  description: string;
}

export interface Recommendation {
  id: string;
  cluster: ClusterId;
  title: string;
  reason: string;
  actions: { label: string; done?: boolean }[];
  kpis: { label: string; value: string }[];
  priority: 'alta' | 'media' | 'baixa';
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  message?: string;
}