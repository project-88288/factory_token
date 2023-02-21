import type { Env } from "@terra-money/terrain";
import { FactoryTokenClient } from './clients/FactoryTokenClient';

export class Lib extends FactoryTokenClient {
  env: Env;

  constructor(env: Env) {
    super(env.client, env.defaultWallet, env.refs['factory_token'].contractAddresses.default);
    this.env = env;
  }
};

export default Lib;
