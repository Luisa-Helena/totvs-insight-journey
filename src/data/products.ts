import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Enterprise Suite',
    category: 'ERP',
    priceModel: 'sob_consulta',
    highlights: [
      'API ilimitada para integração',
      'SLA de 99,9% de disponibilidade',
      'Suporte técnico 24/7',
      'Módulos personalizáveis',
      'Backup automático'
    ],
    badges: ['Destaque', 'Mais Vendido'],
    fit: ['varejo', 'servicos', 'industria', 'saude'],
    description: 'Solução ERP completa com módulos integrados para gestão empresarial avançada.'
  },
  {
    id: '2',
    name: 'Advanced Analytics',
    category: 'BI',
    priceModel: 'mensal',
    priceBRL: 2500,
    highlights: [
      'Dashboards executivos personalizáveis',
      'Relatórios automáticos por email',
      'Análise preditiva com IA',
      'Integração com múltiplas fontes',
      'Alertas inteligentes'
    ],
    badges: ['Destaque'],
    fit: ['varejo', 'industria', 'saude'],
    description: 'Plataforma de Business Intelligence com análise avançada e relatórios inteligentes.'
  },
  {
    id: '3',
    name: 'Dedicated Support',
    category: 'ERP',
    priceModel: 'mensal',
    priceBRL: 1200,
    highlights: [
      'Gerente de conta dedicado',
      'Suporte prioritário via chat',
      'Consultoria técnica inclusiva',
      'Treinamentos personalizados',
      'Revisões trimestrais'
    ],
    badges: ['Premium'],
    fit: ['servicos', 'industria', 'saude', 'educacao'],
    description: 'Suporte dedicado com gerente de conta e consultoria técnica especializada.'
  },
  {
    id: '4',
    name: 'Retail Pro',
    category: 'ERP',
    priceModel: 'mensal',
    priceBRL: 1800,
    highlights: [
      'Gestão de estoque em tempo real',
      'PDV integrado e moderno',
      'Controle de ruptura automático',
      'Análise de giro por produto',
      'Integração com e-commerce'
    ],
    badges: ['Especialista Varejo'],
    fit: ['varejo'],
    description: 'ERP especializado para varejo com controle avançado de estoque e vendas.'
  },
  {
    id: '5',
    name: 'Service Hub',
    category: 'CRM',
    priceModel: 'mensal',
    priceBRL: 890,
    highlights: [
      'CRM completo para serviços',
      'Gestão de projetos integrada',
      'Controle de horas e produtividade',
      'Portal do cliente personalizado',
      'Faturamento automatizado'
    ],
    badges: ['Especialista Serviços'],
    fit: ['servicos'],
    description: 'Hub completo para gestão de empresas de serviços com CRM e projetos integrados.'
  },
  {
    id: '6',
    name: 'Manufacturing Suite',
    category: 'ERP',
    priceModel: 'anual',
    priceBRL: 48000,
    highlights: [
      'MRP avançado com IA',
      'Controle de chão de fábrica',
      'OEE em tempo real',
      'Rastreabilidade completa',
      'Manutenção preditiva'
    ],
    badges: ['Indústria 4.0'],
    fit: ['industria'],
    description: 'Suite completa para manufatura com MRP inteligente e controle de produção avançado.'
  },
  {
    id: '7',
    name: 'Healthcare Manager',
    category: 'ERP',
    priceModel: 'mensal',
    priceBRL: 3200,
    highlights: [
      'Prontuário eletrônico integrado',
      'Agendamento inteligente',
      'Compliance LGPD/ANVISA',
      'Faturamento TISS automatizado',
      'Relatórios médicos automáticos'
    ],
    badges: ['Certificado ANVISA'],
    fit: ['saude'],
    description: 'Sistema de gestão hospitalar com prontuário eletrônico e compliance total.'
  },
  {
    id: '8',
    name: 'Education Plus',
    category: 'ERP',
    priceModel: 'mensal',
    priceBRL: 1450,
    highlights: [
      'Gestão acadêmica completa',
      'Portal dos pais integrado',
      'Boletim digital automático',
      'Controle financeiro estudantil',
      'Relatórios pedagógicos'
    ],
    badges: ['Educação Digital'],
    fit: ['educacao'],
    description: 'Plataforma completa para gestão educacional com portal integrado para pais e alunos.'
  }
];