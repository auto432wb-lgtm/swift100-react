import type { Asset } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, TrendingUp, DollarSign, Activity } from 'lucide-react';

interface AssetCardProps {
  asset: Asset;
}

export function AssetCard({ asset }: AssetCardProps) {
  return (
    <Card className="mb-8 border-l-4 border-l-blue-500 shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
            {asset.symbol.slice(0, 2)}
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">{asset.symbol}</CardTitle>
            <p className="text-muted-foreground text-sm">{asset.name}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Description */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-2">
            <Activity className="w-4 h-4" />
            What it does
          </h4>
          <p className="text-foreground leading-relaxed">{asset.description}</p>
        </div>

        {/* Value Accrual */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Value Accrual
          </h4>
          <ul className="space-y-2">
            {asset.valueAccrual.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span className="text-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Risks */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Key Risks
          </h4>
          <ul className="space-y-2">
            {asset.keyRisks.map((risk, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span className="text-foreground text-sm leading-relaxed">{risk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics Table */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Metrics to Watch
          </h4>
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Metric</TableHead>
                  <TableHead className="font-semibold">Current</TableHead>
                  <TableHead className="font-semibold">Threshold</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {asset.metrics.map((metric, idx) => (
                  <TableRow key={idx} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{metric.metric}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-mono">
                        {metric.current}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {metric.threshold}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Angle/Notes */}
        {asset.angle && (
          <div className="bg-muted/30 rounded-lg p-4 border-l-2 border-l-amber-500">
            <p className="text-sm text-muted-foreground italic">{asset.angle}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
