import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { users } from "@/data/users";
import { ClusterBadge } from "@/components/ClusterBadge";
import { ArrowLeft, LogIn, Users, Eye } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedDemoUser, setSelectedDemoUser] = useState<string>("");
  const { login, loginAsDemo, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await login(email, password);
    
    if (result.success) {
      toast({
        title: "Login realizado com sucesso!",
        description: "Redirecionando para seu dashboard personalizado...",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Erro no login",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  const handleDemoLogin = () => {
    if (selectedDemoUser) {
      loginAsDemo(selectedDemoUser);
      toast({
        title: "Login demo realizado!",
        description: "Explorando dashboard do usuário demo...",
      });
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Button>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <span className="font-bold text-2xl text-foreground">TOTVS</span>
          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-foreground">Entrar na Plataforma</h1>
            <p className="text-muted-foreground">
              Acesse seu dashboard personalizado
            </p>
          </div>
        </div>

        {/* Login Form */}
        <Card className="border-border/50 shadow-elegant bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              <LogIn className="w-5 h-5" />
              Login
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="transition-smooth focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Sua senha"
                  required
                  className="transition-smooth focus:ring-primary"
                />
                <p className="text-xs text-muted-foreground">
                  Use "demo123" para qualquer usuário
                </p>
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
                variant="default"
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
            </form>

            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background px-2 text-sm text-muted-foreground">
                  ou
                </span>
              </div>
            </div>

            {/* Demo Login */}
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="font-medium text-sm flex items-center justify-center gap-2 mb-3">
                  <Eye className="w-4 h-4" />
                  Acesso Demo
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Explore diferentes perfis de usuário para ver como a plataforma se adapta
                </p>
              </div>
              
              <Select value={selectedDemoUser} onValueChange={setSelectedDemoUser}>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha um perfil demo" />
                </SelectTrigger>
                <SelectContent>
                  {users.map((user) => (
                    <SelectItem key={user.id} value={user.id}>
                      <div className="flex items-center gap-3 py-2">
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.company}</div>
                          <ClusterBadge cluster={user.cluster} tier={user.tier} className="mt-1" />
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                onClick={handleDemoLogin}
                disabled={!selectedDemoUser}
                className="w-full"
              >
                <Users className="w-4 h-4 mr-2" />
                Entrar como Demo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* User List */}
        <Card className="border-border/50 bg-background/60 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-center">Usuários Disponíveis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {users.map((user) => (
              <div 
                key={user.id} 
                className="text-xs p-2 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-smooth"
                onClick={() => setEmail(user.email)}
              >
                <div className="font-medium">{user.email}</div>
                <div className="text-muted-foreground">{user.name} • {user.company}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}