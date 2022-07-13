import { contractAddress } from "./constants";

const tronweb = require("tronweb");

const fullNode = "https://api.shasta.trongrid.io";
const solidityNode = "https://api.shasta.trongrid.io";
const eventServer = "https://api.shasta.trongrid.io";
const tronWeb = new tronweb(fullNode, solidityNode, eventServer);

export const contract = {
  contract: "",
  async setContract() {
    this.contract = await tronWeb.contract().at(contractAddress);
  },
};
