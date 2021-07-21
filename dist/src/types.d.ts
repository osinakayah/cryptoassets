export interface Chain {
    name: string;
    code: string;
    nativeAsset: string;
    fees: {
        unit: string;
    };
    safeConfirmations: number;
    isValidAddress: (address: string) => boolean;
    formatAddress: (address: string) => string;
    isValidTransactionHash: (hash: string) => boolean;
    formatTransactionHash: (hash: string) => string;
}
export declare type AssetType = 'native' | 'erc20';
export declare enum ChainId {
    Bitcoin = "bitcoin",
    BitcoinCash = "bitcoin_cash",
    Ethereum = "ethereum",
    Rootstock = "rsk",
    BinanceSmartChain = "bsc",
    Near = "near",
    Polygon = "polygon",
    Arbitrum = "arbitrum"
}
export interface Asset {
    name: string;
    chain: ChainId;
    type: AssetType;
    code: string;
    decimals: number;
    coinGeckoId?: string;
    color?: string;
    contractAddress?: string;
    matchingAsset?: string;
}
