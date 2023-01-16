var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require("Verifier");

contract('SolnSquareVerifier', accounts => {


    let baseTokenURI = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/';

    beforeEach(async function () {
        let contractVerifier = await Verifier.new({ from: accounts[0] })
        this.contract = await SolnSquareVerifier.new(contractVerifier.address, "TestBO", "BO", baseTokenURI, { from: accounts[0] })
    })

    const account_one = accounts[0];

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('new solution can be added for contract', async function () {

        let proof = {
            "proof": {
                "a": [
                    "0x2f6bfe3c103a03b761a78b5cd0e34f76195ae0730cb755a20df987acf3596ac3",
                    "0x2a8fcb26b01690cc3c7a687053f3a44fe3a74a152db63d513309b5fdf15ccaf8"
                ],
                "b": [
                    [
                        "0x1a860c5326dafd5f5dff4e1ad5e8862765cc38c42bed7563c1a3ec88b5b73243",
                        "0x0a13a77652225541aee5d777d9b80eaf93b7c2a0a22638605ed020c5f5841cb5"
                    ],
                    [
                        "0x0dcc1fa9037af7b491041070263229d31e8139e7f478804427cc3fffac851fba",
                        "0x12d483abeb0d684ca041699caeacc46b27052e37b2c516f8e3472362b5a63534"
                    ]
                ],
                "c": [
                    "0x129a4d98fdd75f05b045deae52a3f6cdb0f119745ed805307b512bdbfc931f23",
                    "0x1c2bf96713c04e619525b92b70f98fd0108a145d595f17d9c558e116e8aa61ca"
                ]
            },
            "inputs": [
                "0x0000000000000000000000000000000000000000000000000000000000000009",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ]
        };

        let key = await this.contract._getKey(proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs);
        // console.log("key: " + key);
        let tokenId = 123;
        await this.contract._addSolution(key.tx, account_one, tokenId);
      

        let addressRet = await this.contract.getUniqueSquareSolution(key.tx);
        // console.log("addressRet: " + addressRet);
        assert.equal(addressRet, account_one, "Solution NOT added.");


    })

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('ERC721 token can be minted for contract', async function () {

        let proof = {
            "proof": {
                "a": [
                    "0x2f6bfe3c103a03b761a78b5cd0e34f76195ae0730cb755a20df987acf3596ac3",
                    "0x2a8fcb26b01690cc3c7a687053f3a44fe3a74a152db63d513309b5fdf15ccaf8"
                ],
                "b": [
                    [
                        "0x1a860c5326dafd5f5dff4e1ad5e8862765cc38c42bed7563c1a3ec88b5b73243",
                        "0x0a13a77652225541aee5d777d9b80eaf93b7c2a0a22638605ed020c5f5841cb5"
                    ],
                    [
                        "0x0dcc1fa9037af7b491041070263229d31e8139e7f478804427cc3fffac851fba",
                        "0x12d483abeb0d684ca041699caeacc46b27052e37b2c516f8e3472362b5a63534"
                    ]
                ],
                "c": [
                    "0x129a4d98fdd75f05b045deae52a3f6cdb0f119745ed805307b512bdbfc931f23",
                    "0x1c2bf96713c04e619525b92b70f98fd0108a145d595f17d9c558e116e8aa61ca"
                ]
            },
            "inputs": [
                "0x0000000000000000000000000000000000000000000000000000000000000009",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ]
        };
        let tokenId = 123;
        let result = await this.contract.mintNewNFT(account_one, tokenId, proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs);
        // console.log("result: " + result.receipt.status);
        assert.equal(result.receipt.status, true, "Token NOT Minted.");
    })
})
