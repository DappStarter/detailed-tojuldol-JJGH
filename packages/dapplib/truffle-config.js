require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remind mistake heavy problem boil test'; 
let testAccounts = [
"0x59f80b1857898aa8205828bb95022674c10714abc80f781ba357985079a2eb85",
"0x8b72673a78d90b939086f457109448914f447947e4e89610b7dfc3a847f7b70d",
"0x93733504b6c64c15b6f9e344f3a1443bc9f4261ae5ba4f211c9eb21f44e12c47",
"0xc4b28608407b071a7198a5f4014396f16333697489a04c1b2625f7f00670502e",
"0x184cbdbb09c347942c238bd7ce53a0dd5ea696accce231ccfa0c2b23eedfd248",
"0x726e729f711f02218d8b971ed776bbaaccea39df7ac956f658d667dc71823ec0",
"0xf43c2f4d8d092e7fda913f4b1fadd72fb73ee4adbd61656c62728fbaac4630f9",
"0x6503344a27e04c3aae6406012c37d84b12d320a969f5b0f663c57f3fbeecf223",
"0xa7a7f7ef2695bd853a64633af0b552cfd4f7424d2ef52b40d047cf20855e4e47",
"0x4841c14d2353f5680d2b97589290aef0c09b1b1d01462f0247c15eb3bc079813"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

