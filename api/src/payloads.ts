export const payloads = {)
    init: function(name: string, symbol: string, base_uri: string) {
        return {
            name,
            symbol,
            base_uri,
        }
    },
    mint: function(amount: number, token_metadata: any) {
        return {
            Mint: {
                amount,
                token_metadata,
            }
        }
    },
    mintBatch: function(ids: number[], amounts: number[], tokens_metadata: any[]) {
        return {
            MintBarch: {
                ids,
                amounts,
                tokens_metadata
            }
        }
    },
    burn: function(id: number, amount: number) {
        return {
            Burn: {
                id,
                amount,
            }
        }
    },
    burnBatch: function(ids: number[], amounts: number[]) {
        return {
            BurnBatch: {
                ids,
                amounts,
            }
        }
    },
    balanceOf: function(account: string, id: number) {
        return {
            BalanceOf: {
                account,
                id,
            }
        }
    },
    balanceOfBatch: function(accounts: string[], ids: number[]) {
        return {
            BalanceOfBatch: {
                accounts,
                ids,
            }
        }
    },
    transferFrom: function(from: string, to: string, id: number, amount: number) {
        return {
            TransferFrom: {
                from,
                to,
                id,
                amount,
            }
        }
    },
    transferFromBatch: function(from: string, to: string, ids: number[], amounts: number[]) {
        return {
            BatchTransferFrom: {
                from,
                to,
                ids,
                amounts,
            }
        }
    },
    approve: function(account: string) {
        return {
            Approve: {
                account,
            }
        }
    },
    revokeApproval: function(account: string) {
        return {
            RevokeApproval: {
                account,
            }
        }
    },
    transform: function(id: number, amount: number, accounts: string[], nft_ids: number[][], nfts_metadata: any[][]) {
        return {
            Transform: {
                id,
                amount,
                accounts,
                nft_ids,
                nfts_metadata,
            }
        }
    }
};
