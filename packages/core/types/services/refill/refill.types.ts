export interface WalletRefillInputs {
  amount: string;
  landing_redirect_url: string;
}

export interface WalletRefresh {
  status: boolean;
  message: string;
  data: {
    balance: number;
  };
}

export interface WalletRefresh {
  status: boolean;
  message: string;
  data: {
    balance: number;
  };
}