"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@gear-js/api");
const fs_1 = require("fs");
require('dotenv').config();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const gearApi = yield api_1.GearApi.create();
        const jsonKeyring = (0, fs_1.readFileSync)(process.env.PATH_TO_KEYS).toString();
        const account = api_1.GearKeyring.fromJson(jsonKeyring, process.env.PASSWORD);
        const code = (0, fs_1.readFileSync)(process.env.OPT_WASM);
        const metaFile = (0, fs_1.readFileSync)(process.env.META_WASM);
        const meta = yield (0, api_1.getWasmMetadata)(metaFile);
        console.log(process.env.LENDER);
        console.log(process.env.BORROWER);
        let initMTK = {
            name: "Geat Multitoken",
            symbol: "GMT",
            base_uri: "gear.multitoken.ipfs/"
        };
        const gas = yield gearApi.program.gasSpent.init(`0x${account.address}`, code, initMTK, 0, meta);
        console.log("GAS SPENT", gas.toNumber());
        const program = gearApi.program.submit({ code, initPayload: initMTK, gasLimit: gas }, meta);
        yield gearApi.program.signAndSend(account, (data) => {
            console.log(data.toHuman());
        });
        console.log("Program was initialized with id", program.programId);
    });
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.log(error);
    process.exit(1);
});
//# sourceMappingURL=deploy_program.js.map