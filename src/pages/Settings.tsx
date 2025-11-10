import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Bell, Lock, User, Globe, Mail } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-2xl font-bold text-foreground mb-6">Settings</h1>

        <div className="space-y-6">
          {/* Profile Settings */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Profile Settings</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-foreground">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-foreground">Email Verification</Label>
                  <p className="text-sm text-muted-foreground">Verify your email address</p>
                </div>
                <Button variant="outline" size="sm">Verify</Button>
              </div>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-foreground">Price Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified when prices change</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-foreground">Trade Confirmations</Label>
                  <p className="text-sm text-muted-foreground">Receive trade execution alerts</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-foreground">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Get updates via email</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          {/* Preferences */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Preferences</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-foreground">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                    <SelectItem value="jpy">JPY (¥)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Security */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Security</h2>
            </div>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Manage API Keys
              </Button>
              <Button variant="outline" className="w-full justify-start text-danger border-danger hover:bg-danger/10">
                Delete Account
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;
