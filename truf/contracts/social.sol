//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import "hardhat/console.sol";

contract Trasaction {
    //transfer events
    event Transfer(address from, address to, string note, uint timestamp);

    //user object
    struct userObject {
        address walletAddress;
        string userName;
        string twitterHandle;
    }
    //transaction object
    struct transactionObject {
        address senderAddress;
        address ReceiverAddress;
        uint256 Amount;
        uint256 timestamp;
        string note;
    }

    //users map
    mapping(address => userObject) public userMap;

    //transactions
    transactionObject[] public transactionsList;

    // adding user on connection with twitter
    function addUser(
        address _address,
        string memory _user,
        string memory _handle
    ) public {
        userMap[_address] = userObject(_address, _user, _handle);
    }

    //adding txn
    function addTxn(
        address _senderAddress,
        address _ReceiverAddress,
        uint256 _Amount,
        uint256 timestamp,
        string memory _note
    ) public {
        transactionsList.push(
            transactionObject(_senderAddress, _ReceiverAddress, _Amount, timestamp, _note )
        );
    }

    // get a particular user on login
    function getUser(address _address) public view returns (userObject memory) {
        return userMap[_address];
    }

    //send payment
    function sendTRX(address sender, address payable _receiver, uint256 _amount, string memory note)
        public
        payable
    {
        _receiver.transfer(_amount);
        addTxn(sender, _receiver, _amount, block.timestamp, note);
        emit Transfer(sender, _receiver, note, block.timestamp);
    }

    //get transactions
    function getTransactions()
        public
        view
        returns (transactionObject[] memory)
    {
        return transactionsList;
    }
}
