export declare const payloads: {
    mint: (amount: number, metadata: any) => {
        Mint: {
            amount: number;
            token_metadata: any;
        };
    };
    burn: (id: number, amount: number) => {
        Burn: {
            id: number;
            amount: number;
        };
    };
};
