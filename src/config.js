// Configure UI on checkout modal
// https://docs.unlock-protocol.com/unlock/developers/paywall/configuring-checkout
export const paywallConfig = {
  locks: {
    '0x3047d11c462fE63688bBd417a46Bf8Fa19ff3294': {
      network: 4,
    },
  },
  pessimistic: true,
}

// Enter RPC providers
export const providers = {
  1: '',
  4: 'https://rinkeby.infura.io/v3/3aff00ce0f72420bb670eb204fddd083',
  100: '',
  10: '',
  // ...
}

// (in seconds) Forces re-authentication after maxSignatureTime
export const maxSignatureTime = 60 * 60 * 24 // 1 day
