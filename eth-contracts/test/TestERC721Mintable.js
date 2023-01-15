var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];

    //let account_one_token = 3;
    let account_two_token = 3;
    let account_three_token = 25;

    let baseTokenURI = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/';

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new("TestBO", "BO", baseTokenURI, { from: account_one });

            // TODO: mint multiple tokens
            // console.log("account1: " + account_one);
            // console.log("account2: " + account_two);


            for (let i = 0; i < account_two_token; ++i) {
                let token = account_two_token + i;
                // console.log("token2: " + token);
                await this.contract.mint(account_two, token);
            }

            for (let i = 0; i < account_three_token; ++i) {
                let token = account_three_token + i;
                // console.log("token3: " + token);
                await this.contract.mint(account_three, token);
            }

        })

        it('should return total supply', async function () {
            let supplyCt = await this.contract.totalSupply();
            // console.log("supplyCt: " + supplyCt);
            assert.equal(supplyCt, account_two_token + account_three_token, "Supply does NOT match");
        })

        it('should get token balance', async function () {
            let balance_two = await this.contract.balanceOf(account_two);
            // console.log("balance_two: " + balance_two);
            assert.equal(balance_two, account_two_token, "Balance for account_two does NOT match");

            let balance_three = await this.contract.balanceOf(account_three);
            // console.log("balance_three: " + balance_three);
            assert.equal(balance_three, account_three_token, "Balance for account_three does NOT match");

        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {

            let tokeURI = baseTokenURI + (account_two_token + 1);
            let retTokeURI = await this.contract.tokenURI(account_two_token + 1);
            console.log("tokeURI: " + tokeURI);
            console.log("retTokeURI: " + retTokeURI);
            assert.equal(retTokeURI, tokeURI, "Token URI does NOT match");

        })

        it('should transfer token from one owner to another', async function () {

            // console.log("account2: " + account_two);
            // console.log("account3: " + account_three);
            // console.log("account_two_token + 1: " + account_two_token + 1);
            await this.contract.safeTransferFrom(account_two, account_three, (account_two_token + 1), { from: account_two });
            let owner = await this.contract.ownerOf((account_two_token + 1));
            // console.log("owner: " + owner);

            assert.equal(owner, account_three, "New Owner does NOT match Transfer One");

        })

    });


    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new("TestBO", "BO", baseTokenURI, { from: account_one });
        })

        it('should fail when minting when address is not contract owner', async function () {

            let err = false;
            try {
                await this.contract.mint(account_three, 1, { from: account_two });
            }
            catch (error) {
                err = true;
                console.log("err: " + error);
            }
            assert.equal(err, true, "Minting Address is NOT contract Owner");
        })

        it('should return contract owner', async function () {
            let owner = await this.contract.getOwner.call();
            assert.equal(owner, account_one, "Owner in not Contract owner");
        })

    });

})