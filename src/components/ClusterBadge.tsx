import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ClusterId } from "@/data/types";

interface ClusterBadgeProps {
  cluster: ClusterId;
  tier?: string;
  className?: string;
}

const clusterConfig = {
  varejo: {
    label: "Varejo",
    className: "bg-primary/10 text-primary border-primary/20"
  },
  servicos: {
    label: "Serviços",
    className: "bg-success/10 text-success border-success/20"
  },
  industria: {
    label: "Indústria",
    className: "bg-warning/10 text-warning border-warning/20"
  },
  saude: {
    label: "Saúde",
    className: "bg-red-500/10 text-red-600 border-red-500/20"
  },
  educacao: {
    label: "Educação",
    className: "bg-purple-500/10 text-purple-600 border-purple-500/20"
  }
};

export function ClusterBadge({ cluster, tier, className }: ClusterBadgeProps) {
  const config = clusterConfig[cluster];
  
  return (
    <Badge 
      variant="outline" 
      className={cn(
        "font-medium px-3 py-1 text-xs border transition-smooth",
        config.className,
        className
      )}
    >
      {config.label} {tier && `– ${tier}`}
    </Badge>
  );
}