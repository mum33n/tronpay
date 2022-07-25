//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./IERC20.sol";

contract Trasaction {
    event Transfer(address from, address to, string note, uint256 timestamp);

    uint256 txnCounter;

    //transaction object
    struct transactionObject {
        address senderAddress;
        address ReceiverAddress;
        uint256 Amount;
        uint256 timestamp;
        string note;
        string asset;
    }

    //transaction object
    struct userTransaction {
        uint256 id;
        uint256 index;
        address senderAddress;
        address ReceiverAddress;
        uint256 Amount;
        uint256 timestamp;
        string note;
        string asset;
    }

    //user object
    struct userObject {
        address walletAddress;
        string userName;
        string twitterHandle;
        string emailAddress;
        string profileImg;
    }

    //users map
    userObject[] public userArray;
    mapping(address => userObject) public userMap;

    // //transactions
    userTransaction[] transactionsList;

    //get transactions
    function getTransactions() public view returns (userTransaction[] memory) {
        return transactionsList;
    }

    // adding user on connection with Email
    function addUser(
        address _address,
        string memory _user,
        string memory _handle,
        string memory _email,
        string memory image
    ) public {
        require(userMap[_address].walletAddress != _address, "User Exists");

        userObject memory user = userObject(
            _address,
            _user,
            _handle,
            _email,
            image
        );
        userArray.push(user);
        userMap[_address] = userObject(_address, _user, _handle, _email, image);
    }

    //edit profile picture
    function editProfileImage(address _address, string calldata image) public {
        require(userMap[_address].walletAddress == msg.sender, "Not real user");
        userMap[_address].profileImg = image;
    }

    //adding txn
    function addTxn(
        address _senderAddress,
        address _ReceiverAddress,
        uint256 _Amount,
        string calldata _note,
        string calldata asset
    ) private {
        txnCounter += 1;
        uint256 index = transactionsList.length;
        transactionsList.push(
            userTransaction(
                txnCounter,
                index,
                _senderAddress,
                _ReceiverAddress,
                _Amount,
                block.timestamp,
                _note,
                asset
            )
        );
    }

    // get a particular user on login
    function getUser(address _address) public view returns (userObject memory) {
        userObject memory user = userMap[_address];
        return user;
    }

    //get users array
    function getUserMap() public view returns (userObject[] memory) {
        userObject[] memory user = userArray;
        return user;
    }

    //send payment
    function sendTRX(
        address sender,
        address payable _receiver,
        uint256 _amount,
        string calldata note,
        string calldata asset
    ) public payable {
        addTxn(sender, _receiver, _amount, note, asset);
        emit Transfer(msg.sender, _receiver, note, block.timestamp);
    }

    //direct sending
    function sendTRC(
        IERC20 token,
        address payable _receiver,
        uint256 _amount,
        string calldata note,
        string calldata asset
    ) public payable {
        require(
            (token.balanceOf(msg.sender) >= _amount),
            "Insufficient Balance"
        );
        token.transferFrom(msg.sender, _receiver, _amount);
        addTxn(msg.sender, _receiver, _amount, note, asset);
        emit Transfer(msg.sender, _receiver, note, block.timestamp);
    }
}
