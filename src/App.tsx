import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { AssetCard } from '@/components/AssetCard';
import { sectors } from '@/data/research';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

function App() {
  const [activeSector, setActiveSector] = useState('rwa');
  
  const currentSector = sectors.find(s => s.id === activeSector);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeSector={activeSector} onSectorChange={setActiveSector} />
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 border-b bg-card/50 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">{currentSector?.name}</h2>
            <Badge variant="outline" className="font-mono">
              {currentSector?.assets.length} Assets
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Research Portal</span>
          </div>
        </header>
        
        {/* Content */}
        <ScrollArea className="flex-1">
          <main className="p-6 max-w-5xl mx-auto">
            {currentSector && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      {currentSector.name} Analysis
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Deep dive research notes with value accrual, risks, and key metrics
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-6">
                  {currentSector.assets.map((asset) => (
                    <AssetCard key={asset.symbol} asset={asset} />
                  ))}
                </div>
                
                {/* Footer */}
                <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
                  <p>
                    Research notes structured for institutional analysis. 
                    Metrics and thresholds subject to market conditions.
                  </p>
                </div>
              </div>
            )}
          </main>
        </ScrollArea>
      </div>
    </div>
  );
}

export default App;
