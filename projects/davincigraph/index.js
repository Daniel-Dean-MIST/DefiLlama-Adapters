const { fetchURL } = require("../helper/utils");

async function hedera() {
  const response = await fetchURL(
    "https://davincigraph.network/api/v1/locks/statistics"
  );

  return response.data.tvl.locked.liquidity;
};
async function fetch() {
  return await hedera()
};

module.exports = {
  timetravel: false,
  methodology:
    "The displayed value represents the Total Value Locked (TVL) in USD of all assets secured within the davincigraph token locker smart contracts, accessible at https://davincigraph.io/devs/locks/contracts",
  hedera: {
    fetch: hedera
    },
    fetch
};
