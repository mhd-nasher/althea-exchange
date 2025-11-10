import { Bell, Search, TrendingUp, Wallet, Settings, LayoutDashboard, BarChart3, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">CryptoTrade</span>
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink
                to="/"
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
                activeClassName="text-primary bg-secondary"
              >
                <LayoutDashboard className="inline-block h-4 w-4 mr-2" />
                Dashboard
              </NavLink>
              <NavLink
                to="/markets"
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
                activeClassName="text-primary bg-secondary"
              >
                <BarChart3 className="inline-block h-4 w-4 mr-2" />
                Markets
              </NavLink>
              <NavLink
                to="/portfolio"
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
                activeClassName="text-primary bg-secondary"
              >
                <Wallet className="inline-block h-4 w-4 mr-2" />
                Portfolio
              </NavLink>
              <NavLink
                to="/settings"
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
                activeClassName="text-primary bg-secondary"
              >
                <Settings className="inline-block h-4 w-4 mr-2" />
                Settings
              </NavLink>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden lg:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search coins..."
                className="pl-10 w-64 bg-secondary border-border"
              />
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-danger rounded-full"></span>
            </Button>

            {/* User Profile */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
