//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import "hardhat/console.sol";

contract Trasaction {
    //user object
    struct userObject {
        address walletAddress;
        string userName;
        string twitterHandle;
    }
    //transaction object
    struct transactionObject {
        address senderAddress;
        string ReceiverAddress;
        uint256 Amount;
        string note;
    }

    //users map
    mapping(address => userObject) public userMap;

    //transactions
    transactionObject[] public transactionsList;
     // adding user on connection with twitter
    function addUser (
        address _address,
        string memory _user,
        string memory _handle
    ) public {
        userMap[_address] = userObject(_address, _user, _handle);
    }

    //adding txn
    function addTxn(
        address _senderAddress,
        string _ReceiverAddress,
        uint256 _Amount,
        string _note
    ) public{
        transactionsList.push(transactionObject(_senderAddress, _ReceiverAddress, _Amount, _note));
    }


    // get a particular user on login
    function getUser(address _address) public view returns (userObject memory) {
        return userMap[_address];
    }
}
