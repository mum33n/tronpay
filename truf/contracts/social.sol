//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import "hardhat/console.sol";

contract Trasaction {
    //transfer events
    event Transfer(address from, address to, string note, uint256 timestamp);

    //user object
    struct userObject {
        address walletAddress;
        string userName;
        string twitterHandle;
        string emailAddress;
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
    userObject[] public userArray;
    mapping(address => userObject) public userMap;

    //transactions
    transactionObject[] public transactionsList;

    // adding user on connection with Email
    function addUser(
        address _address,
        string memory _user,
        string memory _handle,
        string memory _email
    ) public {
        userObject memory user = userObject(_address, _user, _handle, _email);
        userArray.push(user);
        userMap[_address] = userObject(_address, _user, _handle, _email);
    }

    //adding txn
    function addTxn(
        address _senderAddress,
        address _ReceiverAddress,
        uint256 _Amount,
        uint256 timestamp,
        string calldata _note
    ) private {
        transactionsList.push(
            transactionObject(
                _senderAddress,
                _ReceiverAddress,
                _Amount,
                timestamp,
                _note
            )
        );
    }

    // get a particular
    function getUsers(address _address)
        public
        view
        returns (mapping(address => userObject))
    {
        mapping(address => userObject) memory user = userMap[_address];
        return user;
    }

    // get a particular user on login
    function getUser(address _address) public view returns (userObject memory) {
        userObject memory user = userMap[_address];
        return user;
    }

    //send payment
    function sendTRX(
        address sender,
        address payable _receiver,
        uint256 _amount,
        string calldata note
    ) public payable {
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
