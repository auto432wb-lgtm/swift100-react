export interface Metric {
  metric: string;
  current: string;
  threshold: string;
}

export interface Asset {
  symbol: string;
  name: string;
  description: string;
  valueAccrual: string[];
  keyRisks: string[];
  metrics: Metric[];
  angle?: string;
}

export interface Sector {
  id: string;
  name: string;
  assets: Asset[];
}
