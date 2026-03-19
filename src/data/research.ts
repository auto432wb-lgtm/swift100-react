import type { Sector } from '@/types';

export const sectors: Sector[] = [
  {
    id: 'rwa',
    name: 'RWA Sector',
    assets: [
      {
        symbol: 'ONDO',
        name: 'Ondo Finance',
        description: 'Tokenized treasury products for crypto-native investors. OUSG = BlackRock BUIDL fund wrapper (treasuries), USDY = yield-bearing stablecoin backed by repo/MMF. Institutional-grade compliance with 24/7 DeFi composability.',
        valueAccrual: [
          'Fees: 0.15% annual management on OUSG, spread on USDY yield (currently ~4.5% APY, Ondo keeps ~50bps)',
          'Real usage: OUSG AUM >$500M (as of Q1 2025), primary collateral for DeFi lending (Morpho, Euler)',
          'Token utility: ONDO governs fee switches, product whitelisting, and BlackRock relationship terms. Staking for governance power (no yield yet)'
        ],
        keyRisks: [
          'Regulatory: SEC classification of tokenized treasuries as securities. Ondo has strict KYC/accredited investor walls—if these fail, product shuts',
          'Counterparty: BlackRock BUIDL dependency. If BUIDL NAV breaks or BlackRock exits crypto, OUSG is wrapper around nothing',
          'Competition: Superstate, Securitize, and eventually Fidelity/Vanguard direct tokenization'
        ],
        metrics: [
          { metric: 'OUSG AUM', current: '$500M+', threshold: '$1B = institutional validation' },
          { metric: 'USDY supply', current: '$300M+', threshold: '$1B = retail adoption' },
          { metric: 'DeFi collateral utilization', current: '60%+', threshold: '80%+ = composability success' },
          { metric: 'Average holder size', current: '$50K+', threshold: '<$10K = retail bleed, >$500K = whale concentration' }
        ],
        angle: 'Category: Tokenized Treasuries (not private credit). Legal: SPV structure, bankruptcy remote, qualified custodian (BNY Mellon). Redemption: T+0 via Ondo bridge to BUIDL, T+2 to fiat.'
      },
      {
        symbol: 'CFG',
        name: 'Centrifuge',
        description: 'On-chain structured credit. Originates real-world loans (invoices, mortgages, revenue-based financing) as NFT collateral pools. Tinlake = investment dapp for tranched risk exposure.',
        valueAccrual: [
          'Fees: 0.5-2% origination, ongoing asset servicing fees',
          'Real usage: $500M+ originated historically, ~$100M active TVL (post-crypto winter defaults)',
          'Token utility: CFG governs pool whitelisting, risk parameters, and protocol fees. Staking for validator set (Centrifuge Chain = Polkadot parachain)'
        ],
        keyRisks: [
          'Default risk: 2022-2023 saw multiple pool defaults (Paperchain, others). On-chain legal enforcement untested',
          'Liquidity risk: Tinlake investments lock capital for loan duration (6-24 months). Secondary markets illiquid',
          'Polkadot dependency: Parachain slot costs, ecosystem decline vs. Ethereum L2s'
        ],
        metrics: [
          { metric: 'Active pool TVL', current: '$100M', threshold: '$200M+ = recovery' },
          { metric: 'Default rate', current: '8-12%', threshold: '>15% = model broken' },
          { metric: 'Origination velocity', current: '$10M/quarter', threshold: '$50M/quarter = scale' },
          { metric: 'Junior tranche yield', current: '12-15%', threshold: '<8% = risk mispriced' }
        ],
        angle: 'Category: Private Credit / Asset-Backed Securities. Legal: SPV per pool, bankruptcy remote, off-chain trustee. Unique: Tokenized B tranches (first-loss) trade on DEXs.'
      }
    ]
  },
  {
    id: 'defi',
    name: 'DeFi Sector',
    assets: [
      {
        symbol: 'HYPE',
        name: 'Hyperliquid',
        description: 'Perpetuals DEX with CEX-level UX. Custom L1 (Hyperliquid L1) optimized for orderbook matching. Vaults = copy-trading strategies, native spot market launching.',
        valueAccrual: [
          'Fees: 100% of trading fees to HYPE stakers (no treasury, no team cut post-genesis)',
          'Real usage: $500M+ daily volume, #1 perp DEX by open interest growth',
          'Token utility: Staking for fee share (real yield, currently 15-30% APY), governance for spot listings, validator rewards'
        ],
        keyRisks: [
          'Centralization: Single validator set currently, team runs most infrastructure',
          'Regulatory: Perps = derivatives. CFTC/SEC jurisdiction, no KYC currently',
          'Competition: dYdX v4 (Cosmos), GMX (Arbitrum), CEXs (Binance, Bybit)'
        ],
        metrics: [
          { metric: 'Daily volume', current: '$500M-1B', threshold: '<$200M = declining relevance' },
          { metric: 'Open interest', current: '$300M+', threshold: '$1B+ = institutional flow' },
          { metric: 'Staking APY', current: '15-30%', threshold: '<5% = fee compression' },
          { metric: 'Validator count', current: '10', threshold: '50+ = decentralization' }
        ]
      },
      {
        symbol: 'ENA',
        name: 'Ethena',
        description: 'Synthetic dollar (USDe) backed by delta-neutral ETH staking yield + funding rate arbitrage. "Internet bond" = sUSDe (staked USDe) earns yield from basis trade.',
        valueAccrual: [
          'Fees: 10-50% of yield to ENA stakers (variable), rest to sUSDe holders',
          'Real usage: USDe supply $3B+ (3rd largest stablecoin), integrated across DeFi',
          'Token utility: Governance for risk parameters (collateral assets, exchange exposure), staking for fee share and "sponsorship" rewards'
        ],
        keyRisks: [
          'Funding rate risk: If perp funding goes deeply negative for extended period, basis trade loses money. Reserve fund ($50M+) backstop',
          'Custody risk: Off-exchange custody via Copper/Ceffu, but exchange exposure (Binance, Bybit, OKX) = counterparty risk',
          'Regulatory: Stablecoin issuer regulation (MiCA, US bills). Ethena Labs is centralized entity'
        ],
        metrics: [
          { metric: 'USDe supply', current: '$3B+', threshold: '<$1B = confidence collapse' },
          { metric: 'Reserve fund / supply', current: '1.5%', threshold: '<0.5% = undercapitalized' },
          { metric: 'Negative funding duration', current: '<7 days', threshold: '>30 days = reserve drain' },
          { metric: 'sUSDe APY', current: '5-15%', threshold: '>20% = unsustainable risk' }
        ]
      },
      {
        symbol: 'MORPHO',
        name: 'Morpho',
        description: 'Permissionless lending markets. Morpho Blue = base layer (isolated markets), MetaMorpho = vault curation (risk management). "Uniswap for lending"—any collateral, any oracle, any parameters.',
        valueAccrual: [
          'Fees: Currently 0% (growth phase), MORPHO governs future fee switch',
          'Real usage: $2B+ deposits, fastest growing lending protocol (stealing Aave share)',
          'Token utility: Governance for fee parameters, market whitelisting, Morpho DAO treasury'
        ],
        keyRisks: [
          'Smart contract risk: Isolated markets reduce contagion but individual markets can be exploited (oracle attacks)',
          'Governance risk: Fee switch timing—if delayed too long, token value accrual questioned',
          'Competition: Aave v4 (unified liquidity), Compound v3, Euler v2'
        ],
        metrics: [
          { metric: 'Total deposits', current: '$2B+', threshold: '$5B = Aave challenger' },
          { metric: 'Markets created', current: '100+', threshold: '500+ = true permissionless' },
          { metric: 'Bad debt', current: '<0.1%', threshold: '>1% = oracle failure' },
          { metric: 'Top vault APY vs. Aave', current: '+2-5%', threshold: 'Negative = no edge' }
        ]
      }
    ]
  },
  {
    id: 'ai',
    name: 'AI Sector',
    assets: [
      {
        symbol: 'TAO',
        name: 'Bittensor',
        description: 'Decentralized machine learning network. Subnets = specialized markets for AI tasks (text gen, image gen, trading, etc.). Miners compete to produce best outputs, validators rank them, TAO inflation rewards winners.',
        valueAccrual: [
          'Fees: Subnet registration costs (burn TAO), transaction fees minimal',
          'Real usage: Subnet 1 (Nous, text generation) has real API consumers. Others speculative',
          'Token utility: Staking for validator/miner registration, governance for subnet parameters'
        ],
        keyRisks: [
          'Concentration: Founders control large TAO stake, emission schedule favors early miners',
          'Tokenomics: 7.5% annual inflation, no fee burn = supply overhang',
          'Technical: Subnet coordination is complex; many subnets have fake activity (wash mining)'
        ],
        metrics: [
          { metric: 'Active subnets', current: '32', threshold: '64 (max) = capacity' },
          { metric: 'Subnet 1 API calls', current: '1M+/day', threshold: '10M+ = real demand' },
          { metric: 'Validator decentralization', current: 'Gini 0.6', threshold: 'Gini 0.4 = healthy' },
          { metric: 'Emission per subnet', current: '1000 TAO/day', threshold: '<500 = marginalization' }
        ]
      },
      {
        symbol: 'VIRTUALS',
        name: 'Virtuals',
        description: 'AI agent launchpad on Base. Create agents with tokenized ownership (shares). Agents perform services (trade, create content, manage communities), revenue flows to shareholders.',
        valueAccrual: [
          'Fees: VIRTUAL required to launch agents (burned), transaction fees on agent activity',
          'Real usage: 1000+ agents launched, top agents (Luna, AIXBT) have $10M+ market caps',
          'Token utility: Launch gas, governance for platform fees, staking for curation rewards'
        ],
        keyRisks: [
          'Ponzinomics: Most agents have no sustainable revenue; early buyers rely on later buyers',
          'Regulatory: Agent shares = investment contracts? SEC scrutiny likely',
          'Base dependency: Single chain risk, Coinbase policy changes'
        ],
        metrics: [
          { metric: 'Agents launched', current: '1000+', threshold: '10,000+ = platform' },
          { metric: 'Top agent revenue', current: '$100K/month', threshold: '$1M/month = sustainability' },
          { metric: 'VIRTUAL burn rate', current: '100K/day', threshold: '1M/day = deflationary' },
          { metric: 'Agent retention (30d)', current: '20%', threshold: '50% = quality' }
        ]
      }
    ]
  },
  {
    id: 'depin',
    name: 'DePIN Sector',
    assets: [
      {
        symbol: 'RENDER',
        name: 'Render Network',
        description: 'Decentralized GPU rendering for 3D graphics, AI training, and media production. OctaneRender integration, migrators from Ethereum to Solana for speed/cost.',
        valueAccrual: [
          'Fees: RENDER tokens pay for GPU time; node operators stake RENDER as collateral',
          'Real usage: 10M+ frames rendered, partnerships with Apple (Octane), Stability AI',
          'Token utility: Payment, staking for node operation, governance for job pricing'
        ],
        keyRisks: [
          'Competition: Akash (general compute), centralized clouds (AWS GPU instances)',
          'Migration risk: Ethereum→Solana transition complete but smart contract risk in bridge',
          'Demand volatility: Crypto/NFT winter reduced 3D rendering demand; AI training pivot unproven'
        ],
        metrics: [
          { metric: 'Frames rendered/month', current: '1M+', threshold: '10M+ = scale' },
          { metric: 'Node operators', current: '1000+', threshold: '5000+ = decentralization' },
          { metric: 'Job pricing vs. AWS', current: '50% cheaper', threshold: 'Parity = no edge' },
          { metric: 'AI training jobs', current: '10% of total', threshold: '50%+ = pivot success' }
        ]
      },
      {
        symbol: 'HNT',
        name: 'Helium',
        description: 'Decentralized wireless networks. Original = IoT (LoRaWAN), now 5G (Helium Mobile) via Nova Labs partnership. Proof-of-coverage rewards for hotspot operators.',
        valueAccrual: [
          'Fees: Data credits (DC) burned for network usage, HNT required to onboard hotspots',
          'Real usage: 15K+ 5G hotspots, Helium Mobile $20/month plan has 100K+ subscribers',
          'Token utility: Burn for DC, staking for consensus, governance for network parameters'
        ],
        keyRisks: [
          'Sustainability: Helium Mobile growth subsidized by Nova Labs; unit economics unclear',
          'Technical: 5G spectrum licensing complex, carrier partnerships (T-Mobile) dependency',
          'Tokenomics: High inflation early years, now decreasing but supply overhang'
        ],
        metrics: [
          { metric: '5G hotspots', current: '15K', threshold: '50K = coverage' },
          { metric: 'Helium Mobile subs', current: '100K', threshold: '1M = viability' },
          { metric: 'DC burn rate', current: '$100K/month', threshold: '$1M/month = demand' },
          { metric: 'HNT staked', current: '50% supply', threshold: '70% = supply squeeze' }
        ]
      }
    ]
  },
  {
    id: 'gaming',
    name: 'Gaming Sector',
    assets: [
      {
        symbol: 'BEAM',
        name: 'Beam',
        description: 'Gaming-focused subnet on Avalanche (now independent L1). Merit Circle DAO pivot from gaming guild to infrastructure. Beam SDK for game developers, Beam swap for in-game economies.',
        valueAccrual: [
          'Fees: BEAM for gas on Beam L1, fees from Beam swap and NFT marketplace',
          'Real usage: 50+ games building, Beam swap $10M+ daily volume',
          'Token utility: Gas, staking for validator rewards, governance for treasury ($100M+)'
        ],
        keyRisks: [
          'Avalanche dependency: Subnet model less proven than Ethereum L2s for gaming',
          'Game quality: Most Beam games unproven; hits needed for sustainable demand',
          'DAO execution: Merit Circle history of pivots; treasury management questioned'
        ],
        metrics: [
          { metric: 'Games launched', current: '50+', threshold: '5 hits (DAU 10K+)' },
          { metric: 'Beam swap volume', current: '$10M/day', threshold: '$100M/day = DeFi success' },
          { metric: 'Daily active gamers', current: '50K', threshold: '500K = ecosystem' },
          { metric: 'Treasury runway', current: '3 years', threshold: '5 years = security' }
        ]
      },
      {
        symbol: 'RON',
        name: 'Ronin',
        description: 'Ethereum sidechain (now L2) built by Sky Mavis for Axie Infinity. Expanded to general gaming with Pixels, Lumiterra. Proof-of-authority validators (trusted set).',
        valueAccrual: [
          'Fees: RON for gas, DEX fees, staking rewards (10-15% APY)',
          'Real usage: 500K+ daily transactions, Pixels 100K+ DAU, Axie migration complete',
          'Token utility: Gas, staking for validators, governance for chain upgrades'
        ],
        keyRisks: [
          'Centralization: Proof-of-authority = 10 validators, mostly Sky Mavis partners',
          'Security history: $600M bridge hack 2022 (reimbursed), reputation damage',
          'Game concentration: Pixels success, but next hits? Axie decline continues'
        ],
        metrics: [
          { metric: 'Daily transactions', current: '500K', threshold: '2M = scale' },
          { metric: 'Pixels DAU', current: '100K', threshold: '500K = sustainability' },
          { metric: 'Unique games', current: '10', threshold: '50 = diversification' },
          { metric: 'Bridge TVL', current: '$100M', threshold: '$500M = security' }
        ]
      }
    ]
  },
  {
    id: 'l1l2',
    name: 'L1/L2 Sector',
    assets: [
      {
        symbol: 'SUI',
        name: 'Sui',
        description: 'Move language L1, object-centric model for parallel execution. Mysticeti consensus (low latency). Focus on consumer/gaming apps.',
        valueAccrual: [
          'Fees: SUI for gas, staking rewards (3-5% APY), storage fund (deflationary mechanism)',
          'Real usage: 100M+ transactions/month, Cetus DEX $100M+ TVL, gaming apps (Sui 8192)',
          'Token utility: Gas, staking, governance, storage economics'
        ],
        keyRisks: [
          'Token unlocks: Heavy vesting schedule through 2025, inflation pressure',
          'Move adoption: New language = developer friction, smaller talent pool than Solidity',
          'Competition: Solana dominance in consumer/gaming, Ethereum L2s for DeFi'
        ],
        metrics: [
          { metric: 'Daily transactions', current: '3M+', threshold: '10M+ = usage' },
          { metric: 'Cetus/Aftermath TVL', current: '$200M+', threshold: '$1B+ = DeFi success' },
          { metric: 'Move developers', current: '1000+', threshold: '10,000+ = ecosystem' },
          { metric: 'Token unlock pressure', current: '10%/year', threshold: '<5%/year = manageable' }
        ]
      },
      {
        symbol: 'TIA',
        name: 'Celestia',
        description: 'Modular data availability (DA) layer. Rollups post data to Celestia instead of Ethereum for cheaper fees. Light clients verify data availability sampling.',
        valueAccrual: [
          'Fees: TIA for blobspace (data posting), staking rewards (15-20% APY currently)',
          'Real usage: 20+ rollups live, Arbitrum Orbit chains using Celestia DA',
          'Token utility: DA fees, staking for consensus, governance for block size/ pricing'
        ],
        keyRisks: [
          'EIP-4844 competition: Ethereum blob transactions reduce Celestia cost advantage',
          'Technical: DA sampling still theoretical at scale; fraud proofs incomplete',
          'Tokenomics: High inflation (20%+) to bootstrap security, unclear if fee revenue sustains'
        ],
        metrics: [
          { metric: 'Blobspace revenue', current: '$10K/day', threshold: '$100K/day = sustainability' },
          { metric: 'Rollups using TIA', current: '20+', threshold: '100+ = standard' },
          { metric: 'Data posted (MB/day)', current: '100MB', threshold: '1GB = scale' },
          { metric: 'Staking ratio', current: '60%', threshold: '70% = security' }
        ]
      }
    ]
  },
  {
    id: 'infra',
    name: 'Infra/Other',
    assets: [
      {
        symbol: 'EIGEN',
        name: 'EigenLayer',
        description: 'Restaking infrastructure. ETH stakers restake to secure Actively Validated Services (AVS)—oracles, bridges, rollups. Shared security model.',
        valueAccrual: [
          'Fees: EIGEN for AVS security payments, slashing insurance, governance',
          'Real usage: $15B+ restaked, 15+ AVS live (EigenDA, Lagrange, etc.)',
          'Token utility: Staking for AVS validation, slashing conditions, governance for AVS whitelisting'
        ],
        keyRisks: [
          'Slashing risk: AVS bugs can slash restaked ETH (unproven in production)',
          'Centralization: Lido dominance in restaking = systemic risk',
          'Complexity: AVS interdependencies create cascade failure modes'
        ],
        metrics: [
          { metric: 'Total restaked', current: '$15B', threshold: '$50B = systemic' },
          { metric: 'AVS slashing events', current: '0', threshold: 'Any = test of system' },
          { metric: 'Unique operators', current: '100+', threshold: '1000+ = decentralization' },
          { metric: 'EIGEN staked', current: '30%', threshold: '60% = governance security' }
        ]
      },
      {
        symbol: 'LINK',
        name: 'Chainlink',
        description: 'Decentralized oracle network. Data feeds (prices, randomness, proof of reserve) for DeFi. CCIP = cross-chain interoperability protocol.',
        valueAccrual: [
          'Fees: LINK for oracle payments, staking for node reputation (v0.2)',
          'Real usage: Secures $20T+ in DeFi TVL historically, 1000+ partnerships',
          'Token utility: Payment, staking for data feed security, governance for node selection'
        ],
        keyRisks: [
          'Competition: Pyth (Solana-native, faster), API3, Band. Chainlink = incumbent but slower',
          'Tokenomics: Team/early investor supply large, emission schedule opaque',
          'Staking adoption: v0.2 staking minimal vs. total supply; value accrual weak'
        ],
        metrics: [
          { metric: 'Secured value', current: '$20T+', threshold: 'Growth rate matters more' },
          { metric: 'CCIP volume', current: '$1B+', threshold: '$10B+ = interoperability leader' },
          { metric: 'Staking participation', current: '10%', threshold: '50% = security model' },
          { metric: 'Data feed updates/day', current: '1M+', threshold: '10M+ = usage' }
        ]
      }
    ]
  },
  {
    id: 'meme',
    name: 'Meme Sector',
    assets: [
      {
        symbol: 'PEPE',
        name: 'Pepe',
        description: 'Pure meme coin. No utility, no roadmap, no team. "Most memeable memecoin in existence."',
        valueAccrual: [
          'Cultural relevance: Survived 2+ years, $3B+ market cap, top 3 meme',
          'Liquidity: Deep CEX listings (Binance, Coinbase), tight spreads',
          'Community: Organic growth, no VC backing, fair launch'
        ],
        keyRisks: [
          'Concentration: Top 10 holders control 20%+ supply',
          'No fundamentals: Pure sentiment, zero cash flow',
          'Competition: Newer memes (WIF, BONK) capture attention'
        ],
        metrics: [
          { metric: 'Market cap', current: '$3B+', threshold: '<$500M = decline' },
          { metric: 'Holder count', current: '200K+', threshold: 'Growth rate' },
          { metric: 'Exchange listings', current: '50+', threshold: 'Delisting = death' },
          { metric: 'Social volume', current: 'Top 10', threshold: 'Top 3 = relevance' }
        ]
      }
    ]
  }
];
