import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Recommendation } from "@/data/types";
import { CheckCircle, Circle, ArrowRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecommendationCardProps {
  recommendation: Recommendation;
  onStartAction: (recommendationId: string) => void;
  className?: string;
}

const priorityConfig = {
  alta: {
    label: "Alta Prioridade",
    className: "bg-destructive/10 text-destructive border-destructive/20"
  },
  media: {
    label: "Média Prioridade", 
    className: "bg-warning/10 text-warning border-warning/20"
  },
  baixa: {
    label: "Baixa Prioridade",
    className: "bg-muted text-muted-foreground border-border"
  }
};

export function RecommendationCard({ recommendation, onStartAction, className }: RecommendationCardProps) {
  const completedActions = recommendation.actions.filter(action => action.done).length;
  const totalActions = recommendation.actions.length;
  const progress = (completedActions / totalActions) * 100;
  const priorityStyle = priorityConfig[recommendation.priority];

  return (
    <Card className={cn(
      "group hover:shadow-elegant transition-smooth hover:-translate-y-1 bg-gradient-card border-border/50",
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg group-hover:text-primary transition-smooth flex-1 pr-4">
            {recommendation.title}
          </CardTitle>
          <Badge 
            variant="outline" 
            className={cn("text-xs font-medium", priorityStyle.className)}
          >
            {priorityStyle.label}
          </Badge>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
          {recommendation.reason}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Progress Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm">Progresso das ações</h4>
            <span className="text-sm text-muted-foreground">
              {completedActions}/{totalActions} concluídas
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Actions Checklist */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Próximas ações:</h4>
          <div className="space-y-2">
            {recommendation.actions.map((action, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-smooth">
                {action.done ? (
                  <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                ) : (
                  <Circle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                )}
                <span className={cn(
                  "text-sm flex-1",
                  action.done ? "text-muted-foreground line-through" : "text-card-foreground"
                )}>
                  {action.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* KPIs Expected */}
        {recommendation.kpis.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-success" />
              Resultados esperados:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recommendation.kpis.map((kpi, index) => (
                <div key={index} className="bg-success/5 border border-success/20 rounded-lg p-3">
                  <div className="text-sm text-muted-foreground">{kpi.label}</div>
                  <div className="font-semibold text-success">{kpi.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {progress < 100 && (
          <Button 
            variant="default"
            className="w-full"
            onClick={() => onStartAction(recommendation.id)}
          >
            Começar Implementação
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}