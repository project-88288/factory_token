const { task } = require("@terra-money/terrain");
//
console.log(" deploy cw20_factory_token");
//
task(async ({ wallets, deploy, refs }) => {
  //
  console.log(refs)
  // console.log(refs.factory_token.contractAddresses.default);
  // First deploy the 'cw20_factory_token' smart contract.
  const codeid1 = await deploy
    .storeCode(wallets.test, "cw20_factory_token")
    .then()
    .catch((e) => console.log(e.message));
  //
  console.log(`smart contract [cw20_factory_token] codeid: ${codeid1}`);
  refs.cw20_factory_token.codeId = codeid1;
  console.log(refs)
  //deploy.refs.codeid1
  let instantid = "default";
  const cw20Address = await deploy
    .instantiate(wallets.test, "cw20_factory_token", codeid1, instantid,
      wallets.test1.key.accAddress,
      {
        // Custom instantiation message.
        // with no message provided the default from config.terrain will be used.
        name: "counter",
        symbol: "CTR",
        decimals: 6,
        initial_balances: [],
        mint: {
          minter: wallets.test1.key.accAddress,
        },
      })
    .then()
    .catch((e) => console.log('error: ', e.message));
  // 
  console.log(
    `cw20_factory_token'-Address: ${cw20Address}, cw20_factory_token-codeid: ${codeid1}`
  )
});
