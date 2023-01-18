# Ethereum-Blockchain-Capstone
 ![BTCPay Server](images/townhouses.jpeg)

 Management of property titles creates opportuities for fraud and errors as well as innovation. Since current process is papaer based it is prone to errors which makes it illigal to trnsfer the property to the buyer untill the defects are rectified. This incures additional fees and delays proprty transfer. 
 In countries where the land is unregistered it is hard to prove legal ownership which imposes risk of having the land being seized from the owner.
 The project present solution for the mitigating title management issues by using the blockchain technology. It is implelemnted by tokenizing the property title. Before minting each token property ownership is verified using verification process based on zk-snarks. Once the properties are tokenized, they are listed on the openSea where users can transasact. 


 Link below present additional uses cases for utitzing blockchain for Real Estate
 https://media.licdn.com/dms/document/C4D1FAQGy_fK3LHDiOQ/feedshare-document-pdf-analyzed/0/1674038451669?e=1674691200&v=beta&t=wSE4TvoJbrVqMH7o8EOkwsnRbLR8Cb8hXt4RxSO-RtA
 ## 💼 Table of Contents

* [Features](#-features)
* [Contributing](#-contributing)
* [Developing](#-developing)
  * [API](#-api)
* [Community](#-community)
* [License](#-license)
* [Supporters](#-supporters)


## 🎨 Features

* Direct, peer-to-peer property title transfer
* No transaction fees (other than the network fee)
* Example of ERC721 contract implementation


## 🧑‍💻 Developing
* Local Environemnt: 
    - Truffle v5.7.1 (core: 5.7.1)
    - Ganache v7.6.0
    - Solidity v0.5.16 (solc-js)
    - Node v14.21.2
    - Web3.js v1.8.1

* How To Build Localy:
    - npm install
    - truffle compile
    - truffle migrate -reset

* How To Test Localy:
    - truffle test ./TestERC721Mintable.js
    - truffle test ./TestSolnSquareVerifier.js
    - truffle test ./TestSquareVerifier.js


  





1. MIgrations:
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x7b30857c8c5ae484dec495d9e477313c2bb81761840114f63d2d75eaad7384d7
   > Blocks: 0            Seconds: 24
   > contract address:    0x8B0d1F4A3e6F12964D2D56308AFBD37df9b3FBeE
   > block number:        8323892
   > block timestamp:     1673912424
   > account:             0x7A989d1dceC1F1745FB6193A155F8D7baa9dFA61
   > balance:             0.096309400052740429
   > gas used:            224581 (0x36d45)
   > gas price:           0.031016489 gwei
   > value sent:          0 ETH
   > total cost:          0.000006965714116109 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000006965714116109 ETH


2_deploy_contracts.js
=====================

   Replacing 'CustomERC721Token'
   -----------------------------
   > transaction hash:    0x5decbaefd7a3bebd40807ee7e8aaebd5a71a32349d4360284f493dea73f205df
   > Blocks: 0            Seconds: 4
   > contract address:    0xB4d1Bf7946224D7f2C67CB36f68FA883ee80A9C3
   > block number:        8323895
   > block timestamp:     1673912460
   > account:             0x7A989d1dceC1F1745FB6193A155F8D7baa9dFA61
   > balance:             0.096222399820113017
   > gas used:            2759238 (0x2a1a46)
   > gas price:           0.031016108 gwei
   > value sent:          0 ETH
   > total cost:          0.000085580823805704 ETH


   Replacing 'Verifier'
   --------------------
   > transaction hash:    0x5b01165364d8ee34169ff2e675493f2f9d350e05c55aacc64a07881bef133b1c
   > Blocks: 0            Seconds: 20
   > contract address:    0xbe1Ac277928fbbdf3B17d0573B17521286862C6D
   > block number:        8323896
   > block timestamp:     1673912484
   > account:             0x7A989d1dceC1F1745FB6193A155F8D7baa9dFA61
   > balance:             0.096191177917904289
   > gas used:            1006628 (0xf5c24)
   > gas price:           0.031016326 gwei
   > value sent:          0 ETH
   > total cost:          0.000031221902208728 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xe22eddddaff870708b8ef2d2082276b996d9864bdcbb490e2fd683716dd5a916
   > Blocks: 0            Seconds: 12
   > contract address:    0xDB7103e5c6BceF1C1db3FAC38Cba02391aCa9C7d
   > block number:        8323897
   > block timestamp:     1673912496
   > account:             0x7A989d1dceC1F1745FB6193A155F8D7baa9dFA61
   > balance:             0.09607941150412813
   > gas used:            3603491 (0x36fc23)
   > gas price:           0.031016149 gwei
   > value sent:          0 ETH
   > total cost:          0.000111766413776159 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000228569139790591 ETH

Summary
=======
> Total deployments:   4
> Final cost:          0.0002355348539067 ETH

SETUP
=======
1. Setup: 
    - Truffle v5.7.1 (core: 5.7.1)
    - Ganache v7.6.0
    - Solidity v0.5.16 (solc-js)
    - Node v14.21.2
    - Web3.js v1.8.1

2. Deploy : 
    - npm install

3. Test: 
    - truffle test ./TestERC721Mintable.js
    - truffle test ./TestSolnSquareVerifier.js
    - truffle test ./TestSquareVerifier.js

4. Deploy:  
    - truffle migrate --network goerli --reset

5. Contract in goerli:
    - https://goerli.etherscan.io/address/0xDB7103e5c6BceF1C1db3FAC38Cba02391aCa9C7d

6. Mint: 
    folder: mint-nft: 
    - npm install
    - node mint-goerli.js

7. OpenSea: 
    - https://testnets.opensea.io/collection/boreal-estate-marketplace

8.  Used: https://github.com/andresaaap/mint-ntf

9. I made no transactions bc fees are too high. 

