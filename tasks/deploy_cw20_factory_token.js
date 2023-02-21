const { task } = require("@terra-money/terrain");

console.log(" deploy cw20_factory_token");

task(async ({ wallets, deploy, refs }) => {
  //
  // console.log(refs.factory_token.contractAddresses.default);
  // First deploy the 'cw20_factory_token' smart contract.
  const codeid1 = await deploy
    .storeCode(wallets.test, "cw20_factory_token")
    .then()
    .catch((e) => console.log(e.message));
  console.log(`smart contract [cw20_factory_token] codeid: ${codeid1}`);

  let instantid = "default";
  const cw20baseAddress = await deploy
    .instantiate(wallets.test, "cw20_factory_token", codeid1,{
      instantId:0,
      admin:wallets.test.key.accAddress,
      init :{
     
      }
    })
    .then()
    .catch((e) => console.log(e.message));

  console.log(
    `cw20_factory_token'-Address: ${cw20baseAddress}, cw20_factory_token-codeid: ${codeid1}`
  );
});
