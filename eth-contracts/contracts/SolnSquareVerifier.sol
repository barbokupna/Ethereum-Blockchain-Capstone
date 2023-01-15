pragma solidity ^0.5.5;

import "./ERC721Mintable.sol";
import "./verifier.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token {
    Verifier private verifierContract;

    constructor(
        address verifierAddress,
        string memory name,
        string memory symbol,
        string memory baseTokenURI
    ) public CustomERC721Token(name, symbol, baseTokenURI) {
        verifierContract = Verifier(verifierAddress);
    }

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address solAddress;
    }
    // TODO define an array of the above struct
    Solution[] private _squareSolutionVerArr;

    // TODO define a mapping to store unique solutions submitted

    // TODO Create an event to emit when a solution is added

    // TODO Create a function to add the solutions to the array and emit the event
    function squareVerSol(address solAddress, uint256 index) external {
        _squareSolutionVerArr.push(Solution(index, solAddress));
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly

    function mintNEWNFT(address to, uint256 tokenId) public returns (bool) {
        super.mint(to, tokenId);
        super.setTokenURI(tokenId);
        return true;
    }
}
