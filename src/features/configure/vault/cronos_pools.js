export const cronosPools = [
  {
    id: 'cronos-bifi-maxi',
    logo: 'single-assets/BIFI.png',
    name: 'BIFI Maxi',
    token: 'BIFI',
    tokenDescription: 'Beefy.Finance',
    tokenAddress: '0xe6801928061CDbE32AC5AD0634427E140EFd05F9',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronosBIFI',
    earnedTokenAddress: '0xBa5041B1c06e8c9cFb5dDB4b82BdC52E41EA5FC5',
    earnContractAddress: '0xBa5041B1c06e8c9cFb5dDB4b82BdC52E41EA5FC5',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'BIFI',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beefy.Finance',
    assets: ['BIFI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'SingleStake',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?inputCurrency=0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23&outputCurrency=0xe6801928061cdbe32ac5ad0634427e140efd05f9',
  },
  {
    id: 'vvs-cro-btc',
    name: 'CRO-BTC',
    token: 'CRO-BTC LP',
    tokenDescription: 'VVS',
    tokenAddress: '0x8F09fFf247B8fDB80461E5Cf5E82dD1aE2EBd6d7',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsCRO-BTC',
    earnedTokenAddress: '0x25DE69dA4469A96974FaE79d0C41366A63317FDC',
    earnContractAddress: '0x25DE69dA4469A96974FaE79d0C41366A63317FDC',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-cro-btc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['CRO', 'WBTC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0x062E66477Faf219F25D27dCED647BF57C3107d52',
    addLiquidityUrl: 'https://vvs.finance/add/CRO/0x062E66477Faf219F25D27dCED647BF57C3107d52',
  },
  {
    id: 'vvs-tonic-usdc',
    name: 'TONIC-USDC',
    token: 'TONIC-USDC LP',
    tokenDescription: 'VVS',
    tokenAddress: '0x2f12D47Fe49B907d7a5Df8159C1CE665187F15c4',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsTONIC-USDC',
    earnedTokenAddress: '0x15c0a37ee6fDA217f0f10dC88df02e7A52e377CA',
    earnContractAddress: '0x15c0a37ee6fDA217f0f10dC88df02e7A52e377CA',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-tonic-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['TONIC', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0xDD73dEa10ABC2Bff99c60882EC5b2B81Bb1Dc5B2',
    addLiquidityUrl:
      'https://vvs.finance/add/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59/0xDD73dEa10ABC2Bff99c60882EC5b2B81Bb1Dc5B2',
  },
  {
    id: 'liq-liq-cro',
    name: 'LIQ-CRO',
    token: 'LIQ-CRO LP',
    tokenDescription: 'CronaSwap (Liquidus)',
    tokenAddress: '0x3295007761C290741B6b363b86dF9ba3467F0754',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooLiquidusLIQ-CRO',
    earnedTokenAddress: '0x9E75f8298e458B76382870982788988A0799195b',
    earnContractAddress: '0x9E75f8298e458B76382870982788988A0799195b',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'liq-liq-cro',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Liquidus',
    assets: ['LIQ', 'CRO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
    addLiquidityUrl: 'https://app.cronaswap.org/add/CRO/0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
  },
  {
    id: 'vvs-cro-atom',
    name: 'ATOM-CRO',
    token: 'ATOM-CRO LP',
    tokenDescription: 'VVS',
    tokenAddress: '0x9e5bd780dff875Dd85848a65549791445AE25De0',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsCRO-ATOM',
    earnedTokenAddress: '0x36ca23aa859dd66486619ae7150C842F035a5c51',
    earnContractAddress: '0x36ca23aa859dd66486619ae7150C842F035a5c51',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-cro-atom',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['ATOM', 'CRO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0xB888d8Dd1733d72681b30c00ee76BDE93ae7aa93',
    addLiquidityUrl: 'https://vvs.finance/add/CRO/0xB888d8Dd1733d72681b30c00ee76BDE93ae7aa93',
  },
  {
    id: 'vvs-cro-doge',
    name: 'DOGE-CRO',
    token: 'DOGE-CRO LP',
    tokenDescription: 'VVS',
    tokenAddress: '0x2A560f2312CB56327AD5D65a03F1bfEC10b62075',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsCRO-DOGE',
    earnedTokenAddress: '0x56E899E56F6B8635B4A01b724db23674a64A7231',
    earnContractAddress: '0x56E899E56F6B8635B4A01b724db23674a64A7231',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-cro-doge',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['DOGE', 'CRO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0x1a8E39ae59e5556B56b76fCBA98d22c9ae557396',
    addLiquidityUrl: 'https://vvs.finance/add/CRO/0x1a8E39ae59e5556B56b76fCBA98d22c9ae557396',
  },
  {
    id: 'crona-wbtc-eth',
    name: 'WBTC-ETH',
    token: 'WBTC-ETH CLP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0x285a569EDD6210a0410883d2E29471A6B0c7790d',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaWBTC-ETH',
    earnedTokenAddress: '0xE138F2c7D4262b3f4009a8c254872bB6d57A39d0',
    earnContractAddress: '0xE138F2c7D4262b3f4009a8c254872bB6d57A39d0',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-wbtc-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['WBTC', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0x062E66477Faf219F25D27dCED647BF57C3107d52',
    addLiquidityUrl:
      'https://app.cronaswap.org/add/0x062E66477Faf219F25D27dCED647BF57C3107d52/0xe44Fd7fCb2b1581822D0c862B68222998a0c299a',
  },
  {
    id: 'crona-usdc-eth',
    name: 'ETH-USDC',
    token: 'ETH-USDC CLP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0x5cc953f278bf6908B2632c65D6a202D6fd1370f9',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaUSDC-ETH',
    earnedTokenAddress: '0xB28785D75bcC71e84A1300B488F0DB0b4277C81b',
    earnContractAddress: '0xB28785D75bcC71e84A1300B488F0DB0b4277C81b',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-usdc-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['ETH', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0xe44Fd7fCb2b1581822D0c862B68222998a0c299a',
    addLiquidityUrl:
      'https://app.cronaswap.org/add/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59/0xe44Fd7fCb2b1581822D0c862B68222998a0c299a',
  },
  {
    id: 'crona-wbtc-usdc',
    name: 'WBTC-USDC',
    token: 'WBTC-USDC CLP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0xea7fc6A39B0d0344e1662E6ABF2FEcD19Bf3D029',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaWBTC-USDC',
    earnedTokenAddress: '0xa0c108B0f66B8c9390F250e6519F53BDa468358F',
    earnContractAddress: '0xa0c108B0f66B8c9390F250e6519F53BDa468358F',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-wbtc-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['WBTC', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0x062E66477Faf219F25D27dCED647BF57C3107d52',
    addLiquidityUrl:
      'https://app.cronaswap.org/add/0x062E66477Faf219F25D27dCED647BF57C3107d52/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
  },
  {
    id: 'vvs-cro-bifi',
    name: 'BIFI-CRO',
    token: 'BIFI-CRO LP',
    tokenDescription: 'VVS',
    tokenAddress: '0x1803E360393A472beC6E1A688BDF7048d3076b1A',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsCRO-BIFI',
    earnedTokenAddress: '0xc1Ef52C61f3981EB615B4f7d2365c2Ec75abc5a4',
    earnContractAddress: '0xc1Ef52C61f3981EB615B4f7d2365c2Ec75abc5a4',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-cro-bifi',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['BIFI', 'CRO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0xe6801928061CDbE32AC5AD0634427E140EFd05F9',
    addLiquidityUrl: 'https://vvs.finance/add/CRO/0xe6801928061CDbE32AC5AD0634427E140EFd05F9',
  },
  {
    id: 'vvs-cro-dai',
    name: 'CRO-DAI',
    token: 'CRO-DAI LP',
    tokenDescription: 'VVS',
    tokenAddress: '0x3Eb9FF92e19b73235A393000C176c8bb150F1B20',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsCRO-DAI',
    earnedTokenAddress: '0x3979ed0a99C63A8be8E031cfF0226A07421D524B',
    earnContractAddress: '0x3979ed0a99C63A8be8E031cfF0226A07421D524B',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-cro-dai',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['CRO', 'DAI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0xF2001B145b43032AAF5Ee2884e456CCd805F677D',
    addLiquidityUrl: 'https://vvs.finance/add/CRO/0xF2001B145b43032AAF5Ee2884e456CCd805F677D',
  },
  {
    id: 'crona-crona-usdc',
    name: 'CRONA-USDC',
    token: 'CRONA-USDC CLP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0x482E0eEb877091cfca439D131321bDE23ddf9bB5',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaCRONA-USDC',
    earnedTokenAddress: '0x91B712FAb398Fa1f16Bc0B43D41bB3EEC0d73045',
    earnContractAddress: '0x91B712FAb398Fa1f16Bc0B43D41bB3EEC0d73045',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-crona-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['CRONA', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0xadbd1231fb360047525BEdF962581F3eee7b49fe',
    addLiquidityUrl:
      'https://app.cronaswap.org/add/0xadbd1231fb360047525BEdF962581F3eee7b49fe/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
  },
  {
    id: 'crona-usdt-crona',
    name: 'CRONA-USDT',
    token: 'CRONA-USDT CLP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0x0427F9C304b0028f67A5fD61ffdD613186c1894B',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaUSDT-CRONA',
    earnedTokenAddress: '0xedEb044BC7Ce11Dfa436CFA8Be43e6eB0d601814',
    earnContractAddress: '0xedEb044BC7Ce11Dfa436CFA8Be43e6eB0d601814',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-usdt-crona',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['CRONA', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0x66e428c3f67a68878562e79A0234c1F83c208770',
    addLiquidityUrl:
      'https://app.cronaswap.org/add/0xadbd1231fb360047525BEdF962581F3eee7b49fe/0x66e428c3f67a68878562e79A0234c1F83c208770',
  },
  {
    id: 'crona-usdc-dai',
    name: 'USDC-DAI',
    token: 'USDC-DAI CLP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0xaEbaFDbe975DB0bfbF4e95a6493CB93d02cc86aE',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaUSDC-DAI',
    earnedTokenAddress: '0x0DEc64E574D1C5bc15bbFc88E6D35B8c829c1396',
    earnContractAddress: '0x0DEc64E574D1C5bc15bbFc88E6D35B8c829c1396',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-usdc-dai',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['USDC', 'DAI'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0xF2001B145b43032AAF5Ee2884e456CCd805F677D',
    addLiquidityUrl:
      'https://app.cronaswap.org/add/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59/0xF2001B145b43032AAF5Ee2884e456CCd805F677D',
  },
  {
    id: 'crona-busd-bnb',
    name: 'BNB-BUSD',
    token: 'BNB-BUSD CLP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0xe8B18116040acf83D6e1f873375adF61103AB45c',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaBUSD-BNB',
    earnedTokenAddress: '0xc4903232e027b61C587D110cB2DBd0079F9f5eB8',
    earnContractAddress: '0xc4903232e027b61C587D110cB2DBd0079F9f5eB8',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-busd-bnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['BNB', 'BUSD'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0xfA9343C3897324496A05fC75abeD6bAC29f8A40f',
    addLiquidityUrl:
      'https://app.cronaswap.org/add/0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8/0xfA9343C3897324496A05fC75abeD6bAC29f8A40f',
  },
  {
    id: 'vvs-cro-usdt',
    name: 'CRO-USDT',
    token: 'CRO-USDT LP',
    tokenDescription: 'VVS',
    tokenAddress: '0x3d2180DB9E1B909f35C398BC39EF36108C0FC8c3',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsCRO-USDT',
    earnedTokenAddress: '0x3bDA6f10af7911F40C761eE7B1607ECe9ee99Aa4',
    earnContractAddress: '0x3bDA6f10af7911F40C761eE7B1607ECe9ee99Aa4',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-cro-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['CRO', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0x66e428c3f67a68878562e79A0234c1F83c208770',
    addLiquidityUrl: 'https://vvs.finance/add/CRO/0x66e428c3f67a68878562e79A0234c1F83c208770',
  },
  {
    id: 'vvs-cro-usdc',
    name: 'CRO-USDC',
    token: 'CRO-USDC LP',
    tokenDescription: 'VVS',
    tokenAddress: '0xe61Db569E231B3f5530168Aa2C9D50246525b6d6',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsCRO-USDC',
    earnedTokenAddress: '0x6bBdC5cacB4e72884432E3d63745cc8e7A4392Ca',
    earnContractAddress: '0x6bBdC5cacB4e72884432E3d63745cc8e7A4392Ca',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-cro-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['CRO', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
    addLiquidityUrl: 'https://vvs.finance/add/CRO/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
  },
  {
    id: 'vvs-cro-shib',
    name: 'SHIB-CRO',
    token: 'SHIB-CRO LP',
    tokenDescription: 'VVS',
    tokenAddress: '0xc9eA98736dbC94FAA91AbF9F4aD1eb41e7fb40f4',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsCRO-SHIB',
    earnedTokenAddress: '0x65BF4169Df9De114c7222cf23cCF012305e58bd0',
    earnContractAddress: '0x65BF4169Df9De114c7222cf23cCF012305e58bd0',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-cro-shib',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['SHIB', 'CRO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0xbED48612BC69fA1CaB67052b42a95FB30C1bcFee',
    addLiquidityUrl: 'https://vvs.finance/add/CRO/0xbED48612BC69fA1CaB67052b42a95FB30C1bcFee',
  },
  {
    id: 'vvs-vvs-usdt',
    name: 'VVS-USDT',
    token: 'VVS-USDT LP',
    tokenDescription: 'VVS',
    tokenAddress: '0x280aCAD550B2d3Ba63C8cbff51b503Ea41a1c61B',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsVVS-USDT',
    earnedTokenAddress: '0x2425d707a5C63ff5De83eB78f63e06c3f6eEaA1c',
    earnContractAddress: '0x2425d707a5C63ff5De83eB78f63e06c3f6eEaA1c',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-vvs-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['VVS', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0x66e428c3f67a68878562e79A0234c1F83c208770',
    addLiquidityUrl:
      'https://vvs.finance/add/0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03/0x66e428c3f67a68878562e79A0234c1F83c208770',
  },
  {
    id: 'vvs-usdt-usdc',
    name: 'USDT-USDC',
    token: 'USDT-USDC LP',
    tokenDescription: 'VVS',
    tokenAddress: '0x39cC0E14795A8e6e9D02A21091b81FE0d61D82f9',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsUSDT-USDC',
    earnedTokenAddress: '0xB38D32336538559Ce6680952B0Be4917ed015c39',
    earnContractAddress: '0xB38D32336538559Ce6680952B0Be4917ed015c39',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-usdt-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['USDT', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0x66e428c3f67a68878562e79A0234c1F83c208770',
    addLiquidityUrl:
      'https://vvs.finance/add/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59/0x66e428c3f67a68878562e79A0234c1F83c208770',
  },
  {
    id: 'vvs-vvs',
    logo: 'single-assets/VVS.svg',
    name: 'VVS',
    token: 'VVS',
    tokenDescription: 'VVS',
    tokenAddress: '0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvs',
    earnedTokenAddress: '0xb29cCE04365400409d476e95410547275D1F86Cf',
    earnContractAddress: '0xb29cCE04365400409d476e95410547275D1F86Cf',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'VVS',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['VVS'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_SMALL',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'SingleStake',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
  },
  {
    id: 'vvs-vvs-usdc',
    name: 'VVS-USDC',
    token: 'VVS-USDC LP',
    tokenDescription: 'VVS',
    tokenAddress: '0x814920D1b8007207db6cB5a2dD92bF0b082BDBa1',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsVVS-USDC',
    earnedTokenAddress: '0x78757cdC2124A34aC5382602a95B4776D6111549',
    earnContractAddress: '0x78757cdC2124A34aC5382602a95B4776D6111549',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-vvs-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['VVS', 'USDC'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_SMALL',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
    addLiquidityUrl:
      'https://vvs.finance/add/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59/0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
  },
  {
    id: 'vvs-vvs-cro',
    name: 'VVS-CRO',
    token: 'VVS-CRO LP',
    tokenDescription: 'VVS',
    tokenAddress: '0xbf62c67eA509E86F07c8c69d0286C0636C50270b',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsVVS-CRO',
    earnedTokenAddress: '0x2fbB1caF6271A14b13F3432f3aB2D6aF102560fA',
    earnContractAddress: '0x2fbB1caF6271A14b13F3432f3aB2D6aF102560fA',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-vvs-cro',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['VVS', 'CRO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_SMALL',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
    addLiquidityUrl: 'https://vvs.finance/add/CRO/0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
  },
  {
    id: 'vvs-cro-eth',
    name: 'CRO-ETH',
    token: 'CRO-ETH LP',
    tokenDescription: 'VVS',
    tokenAddress: '0xA111C17f8B8303280d3EB01BBcd61000AA7F39F9',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooVvsCRO-ETH',
    earnedTokenAddress: '0xB5F0fF997BEc850b11792ed07b2B5AbDEa869B84',
    earnContractAddress: '0xB5F0fF997BEc850b11792ed07b2B5AbDEa869B84',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'vvs-cro-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'VVS',
    assets: ['CRO', 'ETH'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://vvs.finance/swap?outputCurrency=0xe44Fd7fCb2b1581822D0c862B68222998a0c299a',
    addLiquidityUrl: 'https://vvs.finance/add/CRO/0xe44Fd7fCb2b1581822D0c862B68222998a0c299a',
  },
  {
    id: 'crona-crona',
    logo: 'single-assets/CRONA.svg',
    name: 'CRONA',
    token: 'CRONA',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0xadbd1231fb360047525BEdF962581F3eee7b49fe',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCrona',
    earnedTokenAddress: '0x0a2289a7eE8A1f2A6B0E2320f47D8d0ff143f436',
    earnContractAddress: '0x0a2289a7eE8A1f2A6B0E2320f47D8d0ff143f436',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'CRONA',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['CRONA'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'SingleStake',
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0xadbd1231fb360047525BEdF962581F3eee7b49fe',
  },
  {
    id: 'crona-cro-crona',
    name: 'CRONA-CRO',
    token: 'CRONA-CRO LP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0xeD75347fFBe08d5cce4858C70Df4dB4Bbe8532a0',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaCRO-CRONA',
    earnedTokenAddress: '0x8a3030e494a9c0FF12F46D0ce3F1a610dCe9B2eD',
    earnContractAddress: '0x8a3030e494a9c0FF12F46D0ce3F1a610dCe9B2eD',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-cro-crona',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['CRONA', 'CRO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_MICRO',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0xadbd1231fb360047525BEdF962581F3eee7b49fe',
    addLiquidityUrl: 'https://app.cronaswap.org/add/CRO/0xadbd1231fb360047525BEdF962581F3eee7b49fe',
  },
  {
    id: 'crona-cro-usdc',
    name: 'USDC-CRO',
    token: 'USDC-CRO LP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0x0625A68D25d304aed698c806267a4e369e8Eb12a',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaCRO-USDC',
    earnedTokenAddress: '0x8920E4d28Cd2DF033a18803d2081662b3b30B40b',
    earnContractAddress: '0x8920E4d28Cd2DF033a18803d2081662b3b30B40b',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-cro-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['USDC', 'CRO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
    addLiquidityUrl: 'https://app.cronaswap.org/add/CRO/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
  },
  {
    id: 'crona-cro-usdt',
    name: 'USDT-CRO',
    token: 'USDT-CRO LP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0x19Dd1683e8c5F6Cc338C1438f2D25EBb4e0b0b08',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaCRO-USDT',
    earnedTokenAddress: '0xdc036Ab31d2f105E15c1896f88D13B7bcF3e9292',
    earnContractAddress: '0xdc036Ab31d2f105E15c1896f88D13B7bcF3e9292',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-cro-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['USDT', 'CRO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
    addLiquidityUrl: 'https://app.cronaswap.org/add/CRO/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
  },
  {
    id: 'crona-cro-eth',
    name: 'ETH-CRO',
    token: 'ETH-CRO LP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0x8232aA9C3EFf79cd845FcDa109B461849Bf1Be83',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaCRO-ETH',
    earnedTokenAddress: '0x40324434a0b53dd1ED167Ba30dcB6B4bd7a9536d',
    earnContractAddress: '0x40324434a0b53dd1ED167Ba30dcB6B4bd7a9536d',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-cro-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['ETH', 'CRO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0xe44Fd7fCb2b1581822D0c862B68222998a0c299a',
    addLiquidityUrl: 'https://app.cronaswap.org/add/CRO/0xe44Fd7fCb2b1581822D0c862B68222998a0c299a',
  },
  {
    id: 'crona-wbtc-cro',
    name: 'WBTC-CRO',
    token: 'WBTC-CRO LP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0xb4684F52867dC0dDe6F931fBf6eA66Ce94666860',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaWBTC-CRO',
    earnedTokenAddress: '0xc7024B02a3C3893C482F5DD03193CFD1DBEC604f',
    earnContractAddress: '0xc7024B02a3C3893C482F5DD03193CFD1DBEC604f',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-wbtc-cro',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['WBTC', 'CRO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0x062E66477Faf219F25D27dCED647BF57C3107d52',
    addLiquidityUrl: 'https://app.cronaswap.org/add/CRO/0x062E66477Faf219F25D27dCED647BF57C3107d52',
  },
  {
    id: 'crona-cro-dai-eol',
    name: 'DAI-CRO',
    token: 'DAI-CRO LP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0xDA2FC0fE4B03deFf09Fd8CFb92d14e7ebC1F9690',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaCRO-DAI',
    earnedTokenAddress: '0x38002A6456D995AAc598bf59049151631D37689F',
    earnContractAddress: '0x38002A6456D995AAc598bf59049151631D37689F',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-cro-dai',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    retireReason: 'rewards',
    platform: 'CronaSwap',
    assets: ['DAI', 'CRO'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?outputCurrency=0xF2001B145b43032AAF5Ee2884e456CCd805F677D',
    addLiquidityUrl: 'https://app.cronaswap.org/add/CRO/0xF2001B145b43032AAF5Ee2884e456CCd805F677D',
  },
  {
    id: 'crona-usdt-busd',
    name: 'BUSD-USDT',
    token: 'BUSD-USDT LP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0x503d56B2f535784B7f2bcD6581F7e1b46DC0e60c',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaUSDT-BUSD',
    earnedTokenAddress: '0x26be7875EE1738d8ae77ae6Bf1603beA11D525E2',
    earnContractAddress: '0x26be7875EE1738d8ae77ae6Bf1603beA11D525E2',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-usdt-busd',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['BUSD', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?inputCurrency=0x66e428c3f67a68878562e79A0234c1F83c208770&outputCurrency=0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8',
    addLiquidityUrl:
      'https://app.cronaswap.org/add/0x66e428c3f67a68878562e79A0234c1F83c208770/0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8',
  },
  {
    id: 'crona-usdt-matic-eol',
    name: 'MATIC-USDT',
    token: 'MATIC-USDT LP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0x394080F7c770771B6EE4f4649bC477F0676ceA5C',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaUSDT-MATIC',
    earnedTokenAddress: '0xbFBF98294243ff91e6B8dDcAD5eeB107e3677481',
    earnContractAddress: '0xbFBF98294243ff91e6B8dDcAD5eeB107e3677481',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-usdt-matic',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    retireReason: 'rewards',
    platform: 'CronaSwap',
    assets: ['MATIC', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?inputCurrency=0x66e428c3f67a68878562e79A0234c1F83c208770&outputCurrency=0xc9BAA8cfdDe8E328787E29b4B078abf2DaDc2055',
    addLiquidityUrl:
      'https://app.cronaswap.org/add/0x66e428c3f67a68878562e79A0234c1F83c208770/0xc9BAA8cfdDe8E328787E29b4B078abf2DaDc2055',
  },
  {
    id: 'crona-usdt-ftm',
    name: 'FTM-USDT',
    token: 'FTM-USDT LP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0xDee7A79bb414FFB248EF4d4c5560AdC91F547F41',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaUSDT-FTM',
    earnedTokenAddress: '0xc07E03eE5E7c61F7EeCB5FF6FaBE2eA307433bD7',
    earnContractAddress: '0xc07E03eE5E7c61F7EeCB5FF6FaBE2eA307433bD7',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-usdt-ftm',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['FTM', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_LOW',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?inputCurrency=0x66e428c3f67a68878562e79A0234c1F83c208770&outputCurrency=0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
    addLiquidityUrl:
      'https://app.cronaswap.org/add/0x66e428c3f67a68878562e79A0234c1F83c208770/0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
  },
  {
    id: 'crona-usdt-usdc',
    name: 'USDC-USDT',
    token: 'USDC-USDT LP',
    tokenDescription: 'CronaSwap',
    tokenAddress: '0x968fE4C06fdD503E278d89d5dFe29935A111476C',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCronaUSDT-USDC',
    earnedTokenAddress: '0x3586DaCe267C48436ED12BFdF665C2E63DEeb199',
    earnContractAddress: '0x3586DaCe267C48436ED12BFdF665C2E63DEeb199',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'crona-usdt-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'CronaSwap',
    assets: ['USDC', 'USDT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP',
    buyTokenUrl:
      'https://app.cronaswap.org/swap?inputCurrency=0x66e428c3f67a68878562e79A0234c1F83c208770&outputCurrency=0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
    addLiquidityUrl:
      'https://app.cronaswap.org/add/0x66e428c3f67a68878562e79A0234c1F83c208770/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
  },
];
