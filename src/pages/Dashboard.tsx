import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { ClusterBadge } from "@/components/ClusterBadge";
import { ProductCard } from "@/components/ProductCard";
import { RecommendationCard } from "@/components/RecommendationCard";
import { UserMenu } from "@/components/UserMenu";
import { products } from "@/data/products";
import { recommendations } from "@/data/recommendations";
import { clusters } from "@/data/clusters";
import { useToast } from "@/hooks/use-toast";
import { 
  Target, 
  TrendingUp, 
  BarChart3, 
  Zap,
  ArrowRight,
  Filter,
  Sparkles,
  Award
} from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [showTour, setShowTour] = useState(false);

  const userCluster = clusters.find(c => c.id === user?.cluster);
  const userRecommendations = recommendations.filter(r => r.cluster === user?.cluster);
  const recommendedProducts = products.filter(p => p.fit.includes(user?.cluster || 'varejo'));

  useEffect(() => {
    // Show welcome tour for first-time users
    const hasSeenTour = localStorage.getItem(`tour_seen_${user?.id}`);
    if (!hasSeenTour) {
      setShowTour(true);
      localStorage.setItem(`tour_seen_${user?.id}`, 'true');
    }
  }, [user?.id]);

  const handleRequestProposal = (productId: string) => {
    const product = products.find(p => p.id === productId);
    toast({
      title: "Proposta solicitada!",
      description: `Nossa equipe entrará em contato sobre ${product?.name} em breve.`,
    });
  };

  const handleStartAction = (recommendationId: string) => {
    toast({
      title: "Ação iniciada!",
      description: "Um especialista TOTVS entrará em contato para auxiliar na implementação.",
    });
  };

  if (!user || !userCluster) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p>Carregando seu dashboard personalizado...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <div>
                <h1 className="font-bold text-xl">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Bem-vindo, {user.name}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <ClusterBadge cluster={user.cluster} tier={user.tier} />
              <UserMenu />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-hero text-white rounded-2xl p-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <span className="text-lg font-medium">Seu próximo passo</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Otimize seu negócio com recomendações inteligentes
            </h2>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Com base no perfil <strong>{userCluster.name}</strong> da sua empresa {user.company}, 
              identificamos oportunidades específicas para acelerar seus resultados.
            </p>
            <div className="flex flex-wrap gap-4">
              {user.goals.map((goal, index) => (
                <Badge key={index} variant="secondary" className="bg-white/10 text-white border-white/20">
                  <Target className="w-3 h-3 mr-1" />
                  {goal}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userCluster.metrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth bg-gradient-card border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  {metric.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
                <p className="text-sm text-muted-foreground">Seu cluster atual</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Priority Recommendations */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-success" />
                Ações Prioritárias
              </h3>
              <p className="text-muted-foreground mt-2">
                Recomendações baseadas no seu cluster e objetivos de negócio
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {userRecommendations.slice(0, 2).map((recommendation) => (
              <RecommendationCard 
                key={recommendation.id}
                recommendation={recommendation}
                onStartAction={handleStartAction}
              />
            ))}
          </div>
        </section>

        {/* Recommended Products */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                Produtos Recomendados
              </h3>
              <p className="text-muted-foreground mt-2">
                Soluções selecionadas especialmente para o segmento {userCluster.name.split(' – ')[0]}
              </p>
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtrar
            </Button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {recommendedProducts.slice(0, 6).map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onRequestProposal={handleRequestProposal}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg">
              Ver Todos os Produtos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Insights Section */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <Zap className="w-6 h-6 text-warning" />
            Insights do seu Cluster
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Desafios Comuns</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {userCluster.challenges.slice(0, 3).map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">KPIs Sugeridos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {userCluster.suggestedKpis.slice(0, 3).map((kpi, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{kpi}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}