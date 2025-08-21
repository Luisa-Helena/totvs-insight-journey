import { User } from './types';

export const users: User[] = [
  {
    id: '1',
    name: 'Marina Silva',
    email: 'marina@fashionstore.com.br',
    company: 'Fashion Store Ltda',
    cluster: 'varejo',
    tier: 'Alto Potencial',
    goals: ['reduzir ruptura', 'aumentar giro', 'melhorar margem'],
    avatar: 'MS'
  },
  {
    id: '2',
    name: 'Carlos Roberto',
    email: 'carlos@consultoriatech.com.br',
    company: 'Consultoria Tech',
    cluster: 'servicos',
    tier: 'Crescimento',
    goals: ['aumentar produtividade', 'melhorar CRM', 'expandir vendas'],
    avatar: 'CR'
  },
  {
    id: '3',
    name: 'Ana Beatriz',
    email: 'ana@metalurgicasp.com.br',
    company: 'Metalúrgica SP',
    cluster: 'industria',
    tier: 'Maturidade',
    goals: ['otimizar produção', 'controle MRP', 'reduzir custos'],
    avatar: 'AB'
  },
  {
    id: '4',
    name: 'Dr. Fernando',
    email: 'fernando@clinicasaude.com.br',
    company: 'Clínica Saúde+',
    cluster: 'saude',
    tier: 'Crescimento',
    goals: ['gestão de pacientes', 'compliance', 'relatórios médicos'],
    avatar: 'DF'
  },
  {
    id: '5',
    name: 'Professora Lucia',
    email: 'lucia@colegiofuturo.edu.br',
    company: 'Colégio Futuro',
    cluster: 'educacao',
    tier: 'Alto Potencial',
    goals: ['gestão acadêmica', 'comunicação pais', 'relatórios pedagógicos'],
    avatar: 'PL'
  }
];

// Demo password for all users
export const DEMO_PASSWORD = 'demo123';