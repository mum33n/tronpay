export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "note",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "string",
        name: "_user",
        type: "string",
      },
      {
        internalType: "string",
        name: "_handle",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
    ],
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "reciever",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "claimTRCTxn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "reciever",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "claimTxn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
    ],
    name: "editProfileImage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "senderAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "ReceiverAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "Amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "note",
            type: "string",
          },
          {
            internalType: "string",
            name: "asset",
            type: "string",
          },
          {
            internalType: "string",
            name: "direction",
            type: "string",
          },
        ],
        internalType: "struct Trasaction.userTransaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getUser",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "userName",
            type: "string",
          },
          {
            internalType: "string",
            name: "twitterHandle",
            type: "string",
          },
          {
            internalType: "string",
            name: "emailAddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "profileImg",
            type: "string",
          },
        ],
        internalType: "struct Trasaction.userObject",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserMap",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "userName",
            type: "string",
          },
          {
            internalType: "string",
            name: "twitterHandle",
            type: "string",
          },
          {
            internalType: "string",
            name: "emailAddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "profileImg",
            type: "string",
          },
        ],
        internalType: "struct Trasaction.userObject[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "note",
        type: "string",
      },
      {
        internalType: "string",
        name: "asset",
        type: "string",
      },
    ],
    name: "sendClaimTRC",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "note",
        type: "string",
      },
      {
        internalType: "string",
        name: "asset",
        type: "string",
      },
    ],
    name: "sendTRC",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "note",
        type: "string",
      },
      {
        internalType: "string",
        name: "asset",
        type: "string",
      },
    ],
    name: "sendTRX",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "undoTRCTxn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "undoTxn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userArray",
    outputs: [
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "userName",
        type: "string",
      },
      {
        internalType: "string",
        name: "twitterHandle",
        type: "string",
      },
      {
        internalType: "string",
        name: "emailAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "profileImg",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userMap",
    outputs: [
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "userName",
        type: "string",
      },
      {
        internalType: "string",
        name: "twitterHandle",
        type: "string",
      },
      {
        internalType: "string",
        name: "emailAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "profileImg",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];