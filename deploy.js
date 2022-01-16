const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");
const provider = new HDWalletProvider(
    "learn seven orphan donor sad patch cube earn loop unaware lottery onion",
  "https://rinkeby.infura.io/v3/1e3ca67afab74e86ba0bbffae5626033"
);
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("attwmping too deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["HOO HOOO BOYA"] })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
