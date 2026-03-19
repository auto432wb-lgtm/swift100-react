import { sectors } from '@/data/research';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { 
  Landmark, 
  TrendingUp, 
  Brain, 
  Wifi, 
  Gamepad2, 
  Layers, 
  Settings, 
  Laugh,
  ChevronRight
} from 'lucide-react';

const sectorIcons: Record<string, React.ReactNode> = {
  rwa: <Landmark className="w-4 h-4" />,
  defi: <TrendingUp className="w-4 h-4" />,
  ai: <Brain className="w-4 h-4" />,
  depin: <Wifi className="w-4 h-4" />,
  gaming: <Gamepad2 className="w-4 h-4" />,
  l1l2: <Layers className="w-4 h-4" />,
  infra: <Settings className="w-4 h-4" />,
  meme: <Laugh className="w-4 h-4" />,
};

interface SidebarProps {
  activeSector: string;
  onSectorChange: (sectorId: string) => void;
}

export function Sidebar({ activeSector, onSectorChange }: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-card border-r flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Crypto Research
        </h1>
        <p className="text-xs text-muted-foreground mt-1">Institutional Grade Analysis</p>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
            Sectors
          </p>
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => onSectorChange(sector.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all duration-200",
                activeSector === sector.id
                  ? "bg-primary text-primary-foreground font-medium shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <span className={cn(
                "transition-colors",
                activeSector === sector.id ? "text-primary-foreground" : "text-muted-foreground"
              )}>
                {sectorIcons[sector.id]}
              </span>
              <span className="flex-1 text-left">{sector.name}</span>
              <ChevronRight className={cn(
                "w-3 h-3 transition-transform",
                activeSector === sector.id ? "rotate-90" : "opacity-0"
              )} />
            </button>
          ))}
        </div>
        
        <Separator className="my-3" />
        
        <div className="px-6 py-3">
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Total Assets: {sectors.reduce((acc, s) => acc + s.assets.length, 0)}</p>
            <p>Sectors: {sectors.length}</p>
          </div>
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t text-xs text-muted-foreground">
        <p>Last updated: March 2025</p>
      </div>
    </div>
  );
}
