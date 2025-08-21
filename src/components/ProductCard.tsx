import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/types";
import { Star, Zap, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onRequestProposal: (productId: string) => void;
  className?: string;
}

const categoryIcons = {
  ERP: Zap,
  BI: Star,
  RH: Award,
  CRM: Star,
  Logística: Zap,
  Fiscal: Award
};

export function ProductCard({ product, onRequestProposal, className }: ProductCardProps) {
  const CategoryIcon = categoryIcons[product.category];
  
  const formatPrice = () => {
    if (product.priceModel === 'sob_consulta') {
      return 'Sob consulta';
    }
    
    if (!product.priceBRL) return 'Consulte preço';
    
    const formatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(product.priceBRL);
    
    return `${formatted}/${product.priceModel === 'mensal' ? 'mês' : 'ano'}`;
  };

  return (
    <Card className={cn(
      "group hover:shadow-elegant transition-smooth hover:-translate-y-1 bg-gradient-card border-border/50",
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <CategoryIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-smooth">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {product.category}
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="font-semibold text-lg text-primary">
              {formatPrice()}
            </div>
          </div>
        </div>
        
        {product.badges && product.badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {product.badges.map((badge) => (
              <Badge 
                key={badge} 
                variant="secondary"
                className={cn(
                  "text-xs",
                  badge === 'Destaque' && "bg-warning/10 text-warning border-warning/20",
                  badge === 'Mais Vendido' && "bg-success/10 text-success border-success/20",
                  badge === 'Premium' && "bg-purple-500/10 text-purple-600 border-purple-500/20"
                )}
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {product.description}
        </p>
        
        <div className="space-y-2 mb-6">
          <h4 className="font-medium text-sm text-card-foreground">Principais benefícios:</h4>
          <ul className="space-y-1">
            {product.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          variant="default" 
          className="w-full"
          onClick={() => onRequestProposal(product.id)}
        >
          Solicitar Proposta
        </Button>
      </CardContent>
    </Card>
  );
}