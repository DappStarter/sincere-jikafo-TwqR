require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note predict coin gesture cricket slot gentle'; 
let testAccounts = [
"0x09ce57288b8c681e84f553529c52aef9930a75ccf08d65e06059320206cec272",
"0x8e83f9fe91ea077dbc3e9a4a442b52569098bdbda56fc380a926403f29d214ea",
"0x798d056f16d987c514a20e4e8b7971164cdacd87d04defd312b1d95bc6abe0a6",
"0x149af3a0cff6499ef2c4ae4334cae7279655bcc97a9160a93faee8650d7be1c2",
"0x54c761c7ce8b0b758a9c6d0cf5cd60d04f107d9ec073d0d5e3a39e6425ea73ce",
"0x183e6e08344803755024705f129129555f603010af5ca10fbd3578cae7c6df12",
"0x4d9b9ecf0449055ef630152adc6b74c76a30fc217eb23aae0fef0ac8bae6522a",
"0x0fcca29fd0aa0e0ae066d6f2c0ea93f45fb1558816ba500245b33d0a05d45606",
"0xe2fcaa56b51e04138f5a717e93b738f779f92235c6c9e23974ef8f61d74d723b",
"0x10bd5aa625806f184aaa0694047dc2c0b08185b3376f5d1625ad0bddaece4362"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


