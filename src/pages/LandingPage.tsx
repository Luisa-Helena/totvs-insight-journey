import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  Settings, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export default function LandingPage() {
  const navigate = useNavigate();

  const clusterBenefits = [
    {
      icon: Target,
      title: "Varejo – Alto Potencial",
      description: "Reduza rupturas, otimize giro e melhore margens com análise preditiva.",
      highlights: ["35% menos rupturas", "22% mais giro", "8% mais margem"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Users,
      title: "Serviços – Crescimento", 
      description: "Aumente produtividade e melhore relacionamento com clientes.",
      highlights: ["28% mais produtividade", "NPS +1.5 pontos", "20% menos tempo"],
      color: "bg-success/10 text-success"
    },
    {
      icon: Settings,
      title: "Indústria – Maturidade",
      description: "Otimize produção e controle custos com MRP inteligente.",
      highlights: ["15% melhor OEE", "12% menos custo", "40% menos setup"],
      color: "bg-warning/10 text-warning"
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "IA Personalizada",
      description: "Recomendações inteligentes baseadas no seu cluster e objetivos de negócio."
    },
    {
      icon: TrendingUp,
      title: "Resultados Mensuráveis", 
      description: "KPIs claros e métricas de impacto para cada implementação sugerida."
    },
    {
      icon: Shield,
      title: "Confiança TOTVS",
      description: "Mais de 30 anos de experiência em soluções empresariais no Brasil."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-xl text-foreground">TOTVS</span>
            </div>
            <Button variant="outline" onClick={() => navigate('/login')}>
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-accent/20 to-primary/5 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="TOTVS Marketplace Dashboard" 
            className="w-full h-full object-cover opacity-10 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20" />
        </div>
        
        <div className="container mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2" />
              Marketplace Inteligente
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent animate-slide-up">
              Marketplace Inteligente
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                TOTVS
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Descubra soluções personalizadas para o seu negócio com recomendações 
              inteligentes baseadas no seu cluster e objetivos específicos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate('/login')}
              className="text-lg"
            >
              Entrar na Plataforma
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/login')}
              className="text-lg"
            >
              Ver Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Por que escolher nossa plataforma?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tecnologia avançada para recomendações precisas e resultados comprovados.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-smooth border-border/50 bg-gradient-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clusters Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Soluções por Cluster
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada segmento tem necessidades únicas. Veja como podemos ajudar o seu.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {clusterBenefits.map((cluster, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth border-border/50 bg-background">
                <CardHeader>
                  <div className={`w-14 h-14 ${cluster.color} rounded-xl flex items-center justify-center mb-4`}>
                    <cluster.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl">{cluster.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{cluster.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Resultados típicos:</h4>
                    <ul className="space-y-1">
                      {cluster.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-success flex items-center gap-2">
                          <TrendingUp className="w-3 h-3" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Faça login e descubra recomendações personalizadas para o seu cluster.
            </p>
          </div>
          
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/login')}
            className="text-lg bg-white text-primary hover:bg-white/90"
          >
            Começar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 TOTVS. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}