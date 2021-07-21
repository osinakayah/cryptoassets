import { Chain, ChainId } from './types';
declare const chains: {
    [key in ChainId]: Chain;
};
declare function isEthereumChain(chain: ChainId): boolean;
export { chains, isEthereumChain };
