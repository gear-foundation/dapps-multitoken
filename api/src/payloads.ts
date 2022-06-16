export const payloads = {
    mint: {
        Mint: {
            amount: 10,
            token_metadata: {
                title: "Token #0",
                description: "Just a random description",
                media: "Just a random media",
                reference: "Just a random reference",
            }
        },
    },
    burn: {
        Burn: {
            id: 0,
            amount: 2,
        },
    },
    balanceOf: {
        BalanceOf: {
            account: `0x5FxowUbNWoiZBavDB2gCq7JtjDX4KhNRH8ZNAGq7p6gDcbZY`,
            id: 0,
        },
    },
    balanceOfBatch: {
        BalanceOfBatch: {
            accounts: [`0x5FxowUbNWoiZBavDB2gCq7JtjDX4KhNRH8ZNAGq7p6gDcbZY`],
            ids: [0],
        },
    },
    mintBatch: {
        MintBatch: {
            ids: [1, 2],
            amounts: [10, 20],
            tokens_metadata: [
                {
                    title: "Token #1",
                    description: "Just a random description",
                    media: "Just a random media",
                    reference: "Just a random reference",
                },
                {
                    title: "Token #2",
                    description: "Just a random description",
                    media: "Just a random media",
                    reference: "Just a random reference",
                }
            ],
        },
    },
    transferFrom: {
        TransferFrom: {
            from: `0x5FxowUbNWoiZBavDB2gCq7JtjDX4KhNRH8ZNAGq7p6gDcbZY`,
            to: `0x8260b9aae93a8486064217041d5ee6b81a9f716ba428ce20692061a7b3b35662`,
            id: 0,
            amount: 2,
        },
    },
    batchTransferFrom: {
        BatchTransferFrom: {
            from: `0x5FxowUbNWoiZBavDB2gCq7JtjDX4KhNRH8ZNAGq7p6gDcbZY`,
            to: `0x8260b9aae93a8486064217041d5ee6b81a9f716ba428ce20692061a7b3b35662`,
            ids: [0],
            amounts: [0],
        },
    },
    burnBatch: {
        BurnBatch: {
            ids: [0],
            amounts: [1],
        },
    },
    approve: {
        Approve: {
            account: `0x8260b9aae93a8486064217041d5ee6b81a9f716ba428ce20692061a7b3b35662`,
        },
    },
    revokeApproval: {
        RevokeApproval: {
            account: `0x8260b9aae93a8486064217041d5ee6b81a9f716ba428ce20692061a7b3b35662`,
        }
    }
};
