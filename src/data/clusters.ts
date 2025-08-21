import { Cluster } from './types';

export const clusters: Cluster[] = [
  {
    id: 'varejo',
    name: 'Varejo – Alto Potencial',
    description: 'Empresas de varejo com alto potencial de crescimento e necessidade de otimização de vendas e estoque.',
    challenges: [
      'Ruptura de produtos em estoque',
      'Baixo giro de mercadorias',
      'Dificuldade em análise de margem',
      'Falta de integração entre canais'
    ],
    metrics: [
      { label: 'Giro Médio', value: '4.2x/ano' },
      { label: 'Ruptura', value: '12%' },
      { label: 'Margem Bruta', value: '28%' }
    ],
    suggestedKpis: ['Giro de estoque', 'Margem por categoria', 'Ticket médio', 'Conversão de vendas']
  },
  {
    id: 'servicos',
    name: 'Serviços – Crescimento',
    description: 'Empresas de serviços em fase de crescimento com foco em produtividade e relacionamento com clientes.',
    challenges: [
      'Baixa produtividade da equipe',
      'Dificuldade em gestão de CRM',
      'Processos manuais excessivos',
      'Falta de controle de projetos'
    ],
    metrics: [
      { label: 'Produtividade', value: '75%' },
      { label: 'Satisfação Cliente', value: '8.2/10' },
      { label: 'Tempo Resposta', value: '4h' }
    ],
    suggestedKpis: ['Horas produtivas', 'NPS', 'Tempo de projeto', 'Recorrência de clientes']
  },
  {
    id: 'industria',
    name: 'Indústria – Maturidade',
    description: 'Indústrias estabelecidas com foco em otimização de processos produtivos e controle de custos.',
    challenges: [
      'Ineficiência no chão de fábrica',
      'Controle de MRP inadequado',
      'Custos elevados de produção',
      'Falta de rastreabilidade'
    ],
    metrics: [
      { label: 'OEE', value: '65%' },
      { label: 'Custo/Unidade', value: 'R$ 12,50' },
      { label: 'Setup Time', value: '45min' }
    ],
    suggestedKpis: ['OEE', 'Custo por unidade', 'Tempo de setup', 'Índice de qualidade']
  },
  {
    id: 'saude',
    name: 'Saúde – Crescimento',
    description: 'Instituições de saúde em crescimento com necessidade de gestão eficiente de pacientes e compliance.',
    challenges: [
      'Gestão complexa de pacientes',
      'Compliance regulatório',
      'Integração de sistemas',
      'Relatórios médicos manuais'
    ],
    metrics: [
      { label: 'Tempo Atendimento', value: '25min' },
      { label: 'Satisfação', value: '9.1/10' },
      { label: 'Compliance', value: '98%' }
    ],
    suggestedKpis: ['Tempo médio de atendimento', 'Taxa de ocupação', 'Satisfação do paciente', 'Compliance regulatório']
  },
  {
    id: 'educacao',
    name: 'Educação – Alto Potencial',
    description: 'Instituições educacionais com alto potencial de digitalização e melhoria na gestão acadêmica.',
    challenges: [
      'Gestão acadêmica fragmentada',
      'Comunicação com pais inadequada',
      'Relatórios pedagógicos manuais',
      'Controle financeiro estudantil'
    ],
    metrics: [
      { label: 'Aprovação', value: '92%' },
      { label: 'Evasão', value: '8%' },
      { label: 'Satisfação Pais', value: '8.8/10' }
    ],
    suggestedKpis: ['Taxa de aprovação', 'Índice de evasão', 'Satisfação dos pais', 'Performance acadêmica']
  }
];