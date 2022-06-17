export const payloads = {
    mint: function(amount: number, metadata: any) {
        return {
            Mint: {
                amount,
                token_metadata: metadata,
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
    balanceOf: function(account: string, id: number) {
        return {
            BalanceOf: {
                account, id,
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
    mintBatch: function(ids: number[], amounts: number[], metadata: any[]) {
        return {
            MintBatch: {
                ids,
                amounts,
                token_metadata: metadata,
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
    batchTransferFrom: function(from: string, to: string, ids: number[], amounts: number[]) {
        return {
            BatchTransferFrom: {
                from,
                to,
                ids,
                amounts,
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
};
