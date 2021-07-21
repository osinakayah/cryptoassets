import BigNumber from 'bignumber.js';
import assets from './assets';
import { chains, isEthereumChain } from './chains';
import { Asset } from './types';
declare function unitToCurrency(asset: Asset, value: number | BigNumber): BigNumber;
declare function currencyToUnit(asset: Asset, value: number | BigNumber): BigNumber;
export { assets, chains, isEthereumChain, unitToCurrency, currencyToUnit };
