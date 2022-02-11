function getLink(addr, _chainId) {
  var explorer;
  if (_chainId == 1) {
    explorer = "https://etherscan.io";
  } else if (_chainId == 3) {
    explorer = "https://ropsten.etherscan.io";
  } else if (_chainId == 4) {
    explorer = "https://rinkeby.etherscan.io";
  } else if (_chainId == 5) {
    explorer = "https://goerli.etherscan.io";
  } else if (_chainId == 137) {
    explorer = "https://polygonscan.com";
  } else if (_chainId == 80001) {
    explorer = "https://mumbai.polygonscan.com";
  } else {
    explorer = "";
    console.log("unsupported chainid " + _chainId);
  }
  var shortAddr = addr.substring(0, 6) + "...." + addr.substring(addr.length - 4);

  if (addr.length == 42) {
    return '<a target="_blank" class="leedo-address" href="' + explorer + "/address/" + addr + '">' + shortAddr + "</a>";
  } else {
    return '<a target="_blank" class="leedo-address" href="' + explorer + "/tx/" + addr + '">' + shortAddr + "</a>";
  }
}

function getWindowWidth() {
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  return width;
}

function getWindowHeight() {
  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  return height;
}

async function AddTokenToWallet(_ethereum, _chainId) {
  let token_address;
  if (_chainId === 137 || _chainId === 80001) {
    token_address = leedorianERC20Address[_chainId];
  } else {
    token_address = leedoerc20Address[_chainId];
  }

  console.log("token_address => ", token_address);

  await _ethereum
    .request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: token_address,
          symbol: "LEEDO",
          decimals: 18,
          image: "https://gosquidgame.com/leedo_icon.png",
        },
      },
    })
    .then((success) => {
      if (success) {
        console.log("LEEDO successfully added to wallet!");
      } else {
        throw new Error("Something went wrong.");
      }
    })
    .catch(console.error);
}

function gotoDiscord() {
  var popup = window.open("https://discord.com/invite/xkTxRjjhVs", "discord");
}

function goOpenSea() {
  var popup = window.open("https://opensea.io/collection/squid-game-card-nft", "opensea");
}

function goLeedoScan() {
  var popup = window.open("https://daovote.github.io/leedo", "leedoscan");
}

function goMorph() {
  var popup = window.open("https://crazybae.github.io/morph/", "Morphed Squid Game Card");
}
