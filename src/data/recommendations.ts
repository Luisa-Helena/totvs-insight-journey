import { Recommendation } from './types';

export const recommendations: Recommendation[] = [
  {
    id: '1',
    cluster: 'varejo',
    title: 'Ative o Advanced Analytics para Varejo',
    reason: 'Seu cluster tem alta variabilidade de demanda e necessita de análise preditiva para reduzir rupturas e otimizar o giro de estoque.',
    actions: [
      { label: 'Configurar dashboards de vendas', done: false },
      { label: 'Integrar dados de estoque', done: false },
      { label: 'Ativar alertas de ruptura', done: false },
      { label: 'Treinar equipe em análises', done: false }
    ],
    kpis: [
      { label: 'Redução de Ruptura', value: '35%' },
      { label: 'Aumento do Giro', value: '22%' },
      { label: 'Melhoria na Margem', value: '8%' }
    ],
    priority: 'alta'
  },
  {
    id: '2',
    cluster: 'varejo',
    title: 'Implemente o PDV Integrado',
    reason: 'A integração do PDV com o sistema principal eliminará divergências e proporcionará visão em tempo real das vendas.',
    actions: [
      { label: 'Instalar PDV nos pontos de venda', done: true },
      { label: 'Configurar sincronização automática', done: false },
      { label: 'Treinar operadores de caixa', done: false }
    ],
    kpis: [
      { label: 'Redução de Divergências', value: '90%' },
      { label: 'Tempo de Fechamento', value: '-60%' }
    ],
    priority: 'media'
  },
  {
    id: '3',
    cluster: 'servicos',
    title: 'Otimize seu CRM para Serviços',
    reason: 'Empresas de serviços do seu porte aumentam em 30% a produtividade com CRM especializado e gestão de projetos integrada.',
    actions: [
      { label: 'Migrar base de clientes atual', done: false },
      { label: 'Configurar pipeline de vendas', done: false },
      { label: 'Integrar gestão de projetos', done: false },
      { label: 'Automatizar follow-ups', done: false }
    ],
    kpis: [
      { label: 'Aumento Produtividade', value: '28%' },
      { label: 'Melhoria NPS', value: '1.5 pontos' },
      { label: 'Redução Tempo Projeto', value: '20%' }
    ],
    priority: 'alta'
  },
  {
    id: '4',
    cluster: 'industria',
    title: 'Implemente MRP Inteligente',
    reason: 'Seu setor apresenta complexidade de produção que pode ser otimizada com MRP avançado e controle de chão de fábrica.',
    actions: [
      { label: 'Mapear processos produtivos atuais', done: false },
      { label: 'Configurar estruturas de produto', done: false },
      { label: 'Integrar sensores IoT', done: false },
      { label: 'Treinar equipe de produção', done: false }
    ],
    kpis: [
      { label: 'Melhoria OEE', value: '15%' },
      { label: 'Redução Custo/Unidade', value: '12%' },
      { label: 'Redução Setup Time', value: '40%' }
    ],
    priority: 'alta'
  },
  {
    id: '5',
    cluster: 'saude',
    title: 'Digitalize o Prontuário Médico',
    reason: 'A digitalização completa do prontuário melhora o compliance e reduz significativamente o tempo de atendimento.',
    actions: [
      { label: 'Migrar prontuários físicos', done: false },
      { label: 'Treinar corpo médico', done: false },
      { label: 'Configurar templates por especialidade', done: false },
      { label: 'Integrar com laboratórios', done: false }
    ],
    kpis: [
      { label: 'Redução Tempo Atendimento', value: '30%' },
      { label: 'Melhoria Compliance', value: '99.5%' },
      { label: 'Satisfação Médicos', value: '+15%' }
    ],
    priority: 'alta'
  },
  {
    id: '6',
    cluster: 'educacao',
    title: 'Ative a Comunicação Digital com Pais',
    reason: 'O portal integrado para pais melhora significativamente a comunicação e reduz a carga administrativa da escola.',
    actions: [
      { label: 'Configurar portal dos pais', done: false },
      { label: 'Migrar comunicações existentes', done: false },
      { label: 'Treinar equipe pedagógica', done: false },
      { label: 'Lançar campanha de adoção', done: false }
    ],
    kpis: [
      { label: 'Aumento Satisfação Pais', value: '25%' },
      { label: 'Redução Ligações', value: '60%' },
      { label: 'Melhoria Comunicação', value: '40%' }
    ],
    priority: 'media'
  }
];