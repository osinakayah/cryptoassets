import * as ethUtil from 'ethereumjs-util'
import validateBitcoinAddress from 'bitcoin-address-validation'

export default {
  'btc': {
    name: 'Bitcoin',
    type: 'network',
    code: 'BTC',
    color: '#f7931a',
    decimals: 8,
    fees: {
      unit: 'sat/b'
    },
    // TODO: include network types in validation
    isValidAddress: (address) => !!validateBitcoinAddress(address),
    formatAddress: address => address
  },
  'eth': {
    name: 'Ether',
    type: 'network',
    code: 'ETH',
    color: '#627eea',
    decimals: 18,
    fees: {
      unit: 'gwei'
    },
    isValidAddress: ethUtil.isValidAddress,
    formatAddress: ethUtil.toChecksumAddress
  }
}