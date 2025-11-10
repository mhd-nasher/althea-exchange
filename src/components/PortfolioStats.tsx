import { Card } from "@/components/ui/card";
import { TrendingUp, Wallet, DollarSign, PieChart } from "lucide-react";

const stats = [
  {
    label: "Total Balance",
    value: "$124,567.89",
    change: "+12.5%",
    icon: Wallet,
    positive: true,
  },
  {
    label: "24h P&L",
    value: "+$4,234.56",
    change: "+3.52%",
    icon: TrendingUp,
    positive: true,
  },
  {
    label: "Portfolio Value",
    value: "$98,432.10",
    change: "+8.2%",
    icon: PieChart,
    positive: true,
  },
  {
    label: "Available",
    value: "$26,135.79",
    change: "21%",
    icon: DollarSign,
    positive: true,
  },
];

export const PortfolioStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-foreground mb-2">{stat.value}</h3>
                <span className={`text-sm font-medium ${stat.positive ? 'text-success' : 'text-danger'}`}>
                  {stat.change}
                </span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
