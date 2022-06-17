"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payloads = void 0;
exports.payloads = {
    mint: function (amount, metadata) {
        return {
            Mint: {
                amount,
                token_metadata: metadata,
            }
        };
    },
    burn: function (id, amount) {
        return {
            Burn: {
                id,
                amount,
            }
        };
    }
};
//# sourceMappingURL=payloads.js.map