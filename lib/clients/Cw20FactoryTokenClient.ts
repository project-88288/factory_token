/**
* This file was automatically generated by @octalmage/terra-cosmwasm-typescript-gen@0.2.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @octalmage/terra-cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { LCDClient, Coins, Wallet, MsgExecuteContract, TxInfo, WaitTxBroadcastResult } from "@terra-money/terra.js";
import { ConnectedWallet } from "@terra-money/wallet-provider";
function isConnectedWallet(x: Wallet | ConnectedWallet): x is ConnectedWallet {
  return typeof (x as Wallet).key === "undefined";
};
async function waitForInclusionInBlock(lcd: LCDClient, txHash: string): Promise<TxInfo | undefined> {
  let res;
  for (let i = 0; i <= 50; i++) {
    try {
      res = await lcd.tx.txInfo(txHash);
    } catch (error) {
      // NOOP
    }
      
    if (res) {
      break;
    }
      
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
      
  return res;
};
export type Cw20ExecuteMsg = {
  transfer: {
    amount: Uint128;
    recipient: string;
    [k: string]: unknown;
  };
} | {
  burn: {
    amount: Uint128;
    [k: string]: unknown;
  };
} | {
  send: {
    amount: Uint128;
    contract: string;
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  increase_allowance: {
    amount: Uint128;
    expires?: Expiration | null;
    spender: string;
    [k: string]: unknown;
  };
} | {
  decrease_allowance: {
    amount: Uint128;
    expires?: Expiration | null;
    spender: string;
    [k: string]: unknown;
  };
} | {
  transfer_from: {
    amount: Uint128;
    owner: string;
    recipient: string;
    [k: string]: unknown;
  };
} | {
  send_from: {
    amount: Uint128;
    contract: string;
    msg: Binary;
    owner: string;
    [k: string]: unknown;
  };
} | {
  burn_from: {
    amount: Uint128;
    owner: string;
    [k: string]: unknown;
  };
} | {
  mint: {
    amount: Uint128;
    recipient: string;
    [k: string]: unknown;
  };
} | {
  update_marketing: {
    description?: string | null;
    marketing?: string | null;
    project?: string | null;
    [k: string]: unknown;
  };
} | {
  upload_logo: Logo;
};
export type Uint128 = string;
export type Binary = string;
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {
    [k: string]: unknown;
  };
};
export type Timestamp = Uint64;
export type Uint64 = string;
export type Logo = {
  url: string;
} | {
  embedded: EmbeddedLogo;
};
export type EmbeddedLogo = {
  svg: Binary;
} | {
  png: Binary;
};
export interface InstantiateMsg {
  decimals: number;
  initial_balances: Cw20Coin[];
  marketing?: InstantiateMarketingInfo | null;
  mint?: MinterResponse | null;
  name: string;
  symbol: string;
  [k: string]: unknown;
}
export interface Cw20Coin {
  address: string;
  amount: Uint128;
  [k: string]: unknown;
}
export interface InstantiateMarketingInfo {
  description?: string | null;
  logo?: Logo | null;
  marketing?: string | null;
  project?: string | null;
  [k: string]: unknown;
}
export interface MinterResponse {
  cap?: Uint128 | null;
  minter: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  balance: {
    address: string;
    [k: string]: unknown;
  };
} | {
  token_info: {
    [k: string]: unknown;
  };
} | {
  minter: {
    [k: string]: unknown;
  };
} | {
  allowance: {
    owner: string;
    spender: string;
    [k: string]: unknown;
  };
} | {
  all_allowances: {
    limit?: number | null;
    owner: string;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  all_accounts: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  marketing_info: {
    [k: string]: unknown;
  };
} | {
  download_logo: {
    [k: string]: unknown;
  };
};
export interface Cw20FactoryTokenReadOnlyInterface {
  contractAddress: string;
  balanceQuery: ({
    address
  }: {
    address: string;
  }) => Promise<BalanceResponse>;
  tokenInfoQuery: () => Promise<TokenInfoResponse>;
  minterQuery: () => Promise<MinterResponse>;
  allowanceQuery: ({
    owner,
    spender
  }: {
    owner: string;
    spender: string;
  }) => Promise<AllowanceResponse>;
  allAllowancesQuery: ({
    limit,
    owner,
    startAfter
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }) => Promise<AllAllowancesResponse>;
  allAccountsQuery: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<AllAccountsResponse>;
  marketingInfoQuery: () => Promise<MarketingInfoResponse>;
  downloadLogoQuery: () => Promise<DownloadLogoResponse>;
}
export class Cw20FactoryTokenQueryClient implements Cw20FactoryTokenReadOnlyInterface {
  client: LCDClient;
  contractAddress: string;

  constructor(client: LCDClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.balanceQuery = this.balanceQuery.bind(this);
    this.tokenInfoQuery = this.tokenInfoQuery.bind(this);
    this.minterQuery = this.minterQuery.bind(this);
    this.allowanceQuery = this.allowanceQuery.bind(this);
    this.allAllowancesQuery = this.allAllowancesQuery.bind(this);
    this.allAccountsQuery = this.allAccountsQuery.bind(this);
    this.marketingInfoQuery = this.marketingInfoQuery.bind(this);
    this.downloadLogoQuery = this.downloadLogoQuery.bind(this);
  }

  balanceQuery = async ({
    address
  }: {
    address: string;
  }): Promise<BalanceResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      balance: {
        address
      }
    });
  };
  tokenInfoQuery = async (): Promise<TokenInfoResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      token_info: {}
    });
  };
  minterQuery = async (): Promise<MinterResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      minter: {}
    });
  };
  allowanceQuery = async ({
    owner,
    spender
  }: {
    owner: string;
    spender: string;
  }): Promise<AllowanceResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      allowance: {
        owner,
        spender
      }
    });
  };
  allAllowancesQuery = async ({
    limit,
    owner,
    startAfter
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }): Promise<AllAllowancesResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      all_allowances: {
        limit,
        owner,
        start_after: startAfter
      }
    });
  };
  allAccountsQuery = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<AllAccountsResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      all_accounts: {
        limit,
        start_after: startAfter
      }
    });
  };
  marketingInfoQuery = async (): Promise<MarketingInfoResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      marketing_info: {}
    });
  };
  downloadLogoQuery = async (): Promise<DownloadLogoResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      download_logo: {}
    });
  };
}