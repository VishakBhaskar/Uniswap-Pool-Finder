const { ethers } = require("ethers");
const {
  abi: UniswapV3Factory,
} = require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json");
require("dotenv").config();
const ALCHEMY_URL = process.env.ALCHEMY_URL;

const address_Uni = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const address_Weth = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
const factoryAddress = "0x1F98431c8aD98523631AE4a59f267346ea31F984";

async function main() {
  const provider = new ethers.providers.JsonRpcBatchProvider(
    "https://eth-goerli.g.alchemy.com/v2/qXcqEXYfGZFIhjf-VP3Xh15FT1B_erdD"
  );
  const factoryContract = new ethers.Contract(
    factoryAddress,
    UniswapV3Factory,
    provider
  );

  const poolAddress = await factoryContract.getPool(
    address_Uni,
    address_Weth,
    3000
  );
  console.log("Pool Address: ", poolAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
