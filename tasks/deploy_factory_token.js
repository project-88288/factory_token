const { task } = require("@terra-money/terrain");
//const { saveRefs } = require("@terra-money/terrain/lib/config");
//
console.log(" deploy factory_token");
//
task(async ({ wallets, deploy, refs, sync }) => {
  console.log(refs)
  //refs.factory_token={}
  //
  const codeid1 = await deploy
    .storeCode(wallets.test, "factory_token")
    .then()
    .catch((e) => console.log(e.message));
  //
  console.log(`smart contract [factory_token] codeid: ${codeid1}`);
  refs.factory_token.codeId = codeid1;
  //
  let instantid = "default";
  const cw20Address = await deploy
    .instantiate(wallets.test, "factory_token", codeid1, instantid,
      wallets.test1.key.accAddress,
      {
        "stable_denom": "uluna",
        "token_contract_code_id": 38
      }
    )
    .then()
    .catch((e) => console.log('error: ', e.message));
  // 
  console.log(
    `factory_token'-Address: ${cw20Address}, cw20_factory_token-codeid: ${codeid1}`
  )
});