export const BancorConverterAbi = [
   {
      "constant": false,
      "inputs": [
         {
            "name": "_adminOnly",
            "type": "bool"
         }
      ],
      "name": "restrictRegistryUpdate",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_connectorToken",
            "type": "address"
         },
         {
            "name": "",
            "type": "uint32"
         },
         {
            "name": "",
            "type": "bool"
         },
         {
            "name": "_virtualBalance",
            "type": "uint256"
         }
      ],
      "name": "updateConnector",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_address",
            "type": "address"
         }
      ],
      "name": "connectors",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         },
         {
            "name": "",
            "type": "uint32"
         },
         {
            "name": "",
            "type": "bool"
         },
         {
            "name": "",
            "type": "bool"
         },
         {
            "name": "",
            "type": "bool"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "bancorX",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_reserveToken",
            "type": "address"
         }
      ],
      "name": "getReserveBalance",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_index",
            "type": "uint256"
         }
      ],
      "name": "connectorTokens",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_fromToken",
            "type": "address"
         },
         {
            "name": "_toToken",
            "type": "address"
         },
         {
            "name": "_amount",
            "type": "uint256"
         }
      ],
      "name": "getReturn",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         },
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_newOwner",
            "type": "address"
         }
      ],
      "name": "transferTokenOwnership",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_path",
            "type": "address[]"
         },
         {
            "name": "_amount",
            "type": "uint256"
         },
         {
            "name": "_minReturn",
            "type": "uint256"
         },
         {
            "name": "",
            "type": "uint256"
         },
         {
            "name": "",
            "type": "uint8"
         },
         {
            "name": "",
            "type": "bytes32"
         },
         {
            "name": "",
            "type": "bytes32"
         }
      ],
      "name": "quickConvertPrioritized",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_fromToken",
            "type": "address"
         },
         {
            "name": "_toToken",
            "type": "address"
         },
         {
            "name": "_amount",
            "type": "uint256"
         },
         {
            "name": "_minReturn",
            "type": "uint256"
         }
      ],
      "name": "convertInternal",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_reserveToken",
            "type": "address"
         }
      ],
      "name": "getReserveRatio",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [

      ],
      "name": "acceptTokenOwnership",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_amount",
            "type": "uint256"
         },
         {
            "name": "_magnitude",
            "type": "uint8"
         }
      ],
      "name": "getFinalAmount",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_token",
            "type": "address"
         },
         {
            "name": "_weight",
            "type": "uint32"
         },
         {
            "name": "",
            "type": "bool"
         }
      ],
      "name": "addConnector",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_amount",
            "type": "uint256"
         }
      ],
      "name": "liquidate",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_token",
            "type": "address"
         },
         {
            "name": "_to",
            "type": "address"
         },
         {
            "name": "_amount",
            "type": "uint256"
         }
      ],
      "name": "withdrawFromToken",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "newManager",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "manager",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [

      ],
      "name": "updateRegistry",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_whitelist",
            "type": "address"
         }
      ],
      "name": "setConversionWhitelist",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_path",
            "type": "address[]"
         },
         {
            "name": "_minReturn",
            "type": "uint256"
         },
         {
            "name": "_conversionId",
            "type": "uint256"
         },
         {
            "name": "",
            "type": "uint256"
         },
         {
            "name": "",
            "type": "uint8"
         },
         {
            "name": "",
            "type": "bytes32"
         },
         {
            "name": "",
            "type": "bytes32"
         }
      ],
      "name": "completeXConversion",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "version",
      "outputs": [
         {
            "name": "",
            "type": "uint16"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "conversionFee",
      "outputs": [
         {
            "name": "",
            "type": "uint32"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_token",
            "type": "address"
         },
         {
            "name": "_to",
            "type": "address"
         },
         {
            "name": "_amount",
            "type": "uint256"
         }
      ],
      "name": "withdrawTokens",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_fromToken",
            "type": "address"
         },
         {
            "name": "_toToken",
            "type": "address"
         },
         {
            "name": "_amount",
            "type": "uint256"
         },
         {
            "name": "_minReturn",
            "type": "uint256"
         }
      ],
      "name": "change",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "prevRegistry",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_token",
            "type": "address"
         },
         {
            "name": "_ratio",
            "type": "uint32"
         }
      ],
      "name": "addReserve",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_fromToken",
            "type": "address"
         },
         {
            "name": "_toToken",
            "type": "address"
         },
         {
            "name": "_amount",
            "type": "uint256"
         },
         {
            "name": "_minReturn",
            "type": "uint256"
         },
         {
            "name": "_affiliateAccount",
            "type": "address"
         },
         {
            "name": "_affiliateFee",
            "type": "uint256"
         }
      ],
      "name": "convert2",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "connectorTokenCount",
      "outputs": [
         {
            "name": "",
            "type": "uint16"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_reserveToken",
            "type": "address"
         },
         {
            "name": "_sellAmount",
            "type": "uint256"
         }
      ],
      "name": "getSaleReturn",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         },
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_fromToken",
            "type": "address"
         },
         {
            "name": "_toToken",
            "type": "address"
         },
         {
            "name": "_amount",
            "type": "uint256"
         },
         {
            "name": "_minReturn",
            "type": "uint256"
         }
      ],
      "name": "convert",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [

      ],
      "name": "acceptOwnership",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "registry",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "owner",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_fromConnectorToken",
            "type": "address"
         },
         {
            "name": "_toConnectorToken",
            "type": "address"
         },
         {
            "name": "_amount",
            "type": "uint256"
         }
      ],
      "name": "getCrossConnectorReturn",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         },
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "CONVERTER_CONVERSION_WHITELIST",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_reserveToken",
            "type": "address"
         },
         {
            "name": "_virtualBalance",
            "type": "uint256"
         }
      ],
      "name": "updateReserveVirtualBalance",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "maxConversionFee",
      "outputs": [
         {
            "name": "",
            "type": "uint32"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "reserveTokenCount",
      "outputs": [
         {
            "name": "",
            "type": "uint16"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_reserveToken",
            "type": "address"
         },
         {
            "name": "_depositAmount",
            "type": "uint256"
         }
      ],
      "name": "getPurchaseReturn",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         },
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_path",
            "type": "address[]"
         },
         {
            "name": "_amount",
            "type": "uint256"
         },
         {
            "name": "_minReturn",
            "type": "uint256"
         },
         {
            "name": "",
            "type": "uint256[]"
         },
         {
            "name": "_affiliateAccount",
            "type": "address"
         },
         {
            "name": "_affiliateFee",
            "type": "uint256"
         }
      ],
      "name": "quickConvertPrioritized2",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [

      ],
      "name": "restoreRegistry",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "conversionsEnabled",
      "outputs": [
         {
            "name": "",
            "type": "bool"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "conversionWhitelist",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [

      ],
      "name": "acceptManagement",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "adminOnly",
      "outputs": [
         {
            "name": "",
            "type": "bool"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_amount",
            "type": "uint256"
         }
      ],
      "name": "fund",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_fromReserveToken",
            "type": "address"
         },
         {
            "name": "_toReserveToken",
            "type": "address"
         },
         {
            "name": "_amount",
            "type": "uint256"
         }
      ],
      "name": "getCrossReserveReturn",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         },
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "name": "reserveTokens",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "newOwner",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [

      ],
      "name": "upgrade",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "name": "reserves",
      "outputs": [
         {
            "name": "virtualBalance",
            "type": "uint256"
         },
         {
            "name": "ratio",
            "type": "uint32"
         },
         {
            "name": "isVirtualBalanceEnabled",
            "type": "bool"
         },
         {
            "name": "isSaleEnabled",
            "type": "bool"
         },
         {
            "name": "isSet",
            "type": "bool"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_connectorToken",
            "type": "address"
         }
      ],
      "name": "getConnectorBalance",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_bancorX",
            "type": "address"
         }
      ],
      "name": "setBancorX",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_path",
            "type": "address[]"
         },
         {
            "name": "_amount",
            "type": "uint256"
         },
         {
            "name": "_minReturn",
            "type": "uint256"
         },
         {
            "name": "_affiliateAccount",
            "type": "address"
         },
         {
            "name": "_affiliateFee",
            "type": "uint256"
         }
      ],
      "name": "quickConvert2",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_newManager",
            "type": "address"
         }
      ],
      "name": "transferManagement",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_path",
            "type": "address[]"
         },
         {
            "name": "_minReturn",
            "type": "uint256"
         },
         {
            "name": "_conversionId",
            "type": "uint256"
         }
      ],
      "name": "completeXConversion2",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_conversionFee",
            "type": "uint32"
         }
      ],
      "name": "setConversionFee",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_path",
            "type": "address[]"
         },
         {
            "name": "_amount",
            "type": "uint256"
         },
         {
            "name": "_minReturn",
            "type": "uint256"
         }
      ],
      "name": "quickConvert",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_newOwner",
            "type": "address"
         }
      ],
      "name": "transferOwnership",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [

      ],
      "name": "token",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_from",
            "type": "address"
         },
         {
            "name": "_amount",
            "type": "uint256"
         }
      ],
      "name": "claimTokens",
      "outputs": [

      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "name": "_token",
            "type": "address"
         },
         {
            "name": "_registry",
            "type": "address"
         },
         {
            "name": "_maxConversionFee",
            "type": "uint32"
         },
         {
            "name": "_reserveToken",
            "type": "address"
         },
         {
            "name": "_reserveRatio",
            "type": "uint32"
         }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": true,
            "name": "_fromToken",
            "type": "address"
         },
         {
            "indexed": true,
            "name": "_toToken",
            "type": "address"
         },
         {
            "indexed": true,
            "name": "_trader",
            "type": "address"
         },
         {
            "indexed": false,
            "name": "_amount",
            "type": "uint256"
         },
         {
            "indexed": false,
            "name": "_return",
            "type": "uint256"
         },
         {
            "indexed": false,
            "name": "_conversionFee",
            "type": "int256"
         }
      ],
      "name": "Conversion",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": true,
            "name": "_connectorToken",
            "type": "address"
         },
         {
            "indexed": false,
            "name": "_tokenSupply",
            "type": "uint256"
         },
         {
            "indexed": false,
            "name": "_connectorBalance",
            "type": "uint256"
         },
         {
            "indexed": false,
            "name": "_connectorWeight",
            "type": "uint32"
         }
      ],
      "name": "PriceDataUpdate",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": false,
            "name": "_prevFee",
            "type": "uint32"
         },
         {
            "indexed": false,
            "name": "_newFee",
            "type": "uint32"
         }
      ],
      "name": "ConversionFeeUpdate",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": true,
            "name": "_prevManager",
            "type": "address"
         },
         {
            "indexed": true,
            "name": "_newManager",
            "type": "address"
         }
      ],
      "name": "ManagerUpdate",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": true,
            "name": "_prevOwner",
            "type": "address"
         },
         {
            "indexed": true,
            "name": "_newOwner",
            "type": "address"
         }
      ],
      "name": "OwnerUpdate",
      "type": "event"
   }
]

export const BancorConverterByteCode = "608060405260078054751900000000000000000000000000000000000000000060a860020a61ffff0219909116179055600b80546001606860020a0319166c010000000000000000000000001790553480156200005b57600080fd5b5060405160a080620047e68339810160409081528151602083015191830151606084015160809094015160008054600160a060020a0319163317815592949192848680600160a060020a0381161515620000b457600080fd5b5060028054600160a060020a03928316600160a060020a0319918216179091556004805490911633179055819081161515620000ef57600080fd5b5060068054600160a060020a03909216600160a060020a031992831681179091556007805490921617905583600063ffffffff8216108015906200013c5750620f424063ffffffff821611155b15156200014857600080fd5b6200017c7f436f6e747261637446656174757265730000000000000000000000000000000064010000000062000263810204565b9150600160a060020a038216156200021157604080517f2c7077c000000000000000000000000000000000000000000000000000000000815260016004820181905260248201529051600160a060020a03841691632c7077c091604480830192600092919082900301818387803b158015620001f757600080fd5b505af11580156200020c573d6000803e3d6000fd5b505050505b600b805467ffffffff00000000191664010000000063ffffffff881602179055600160a060020a038416156200025657620002568484640100000000620002fe810204565b5050505050505062000542565b600654604080517fbb34534c000000000000000000000000000000000000000000000000000000008152600481018490529051600092600160a060020a03169163bb34534c91602480830192602092919082900301818787803b158015620002ca57600080fd5b505af1158015620002df573d6000803e3d6000fd5b505050506040513d6020811015620002f657600080fd5b505192915050565b600054600160a060020a031633146200031657600080fd5b600254604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290513092600160a060020a031691638da5cb5b9160048083019260209291908290030181600087803b1580156200037657600080fd5b505af11580156200038b573d6000803e3d6000fd5b505050506040513d6020811015620003a257600080fd5b5051600160a060020a03161415620003b957600080fd5b81600160a060020a0381161515620003d057600080fd5b82600160a060020a038116301415620003e857600080fd5b8260008163ffffffff16118015620004095750620f424063ffffffff821611155b15156200041557600080fd5b600254600160a060020a038681169116148015906200045a5750600160a060020a0385166000908152600a60205260409020600101546601000000000000900460ff16155b8015620004795750600b54620f424063ffffffff918216860190911611155b15156200048557600080fd5b505050600160a060020a03919091166000818152600a60205260408120600180820180549284905566010000000000006501000000000063ffffffff1994851663ffffffff808a169190911765ffff0000000019169190911766ff0000000000001916919091179091556009805492830181559093527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af018054600160a060020a031916909317909255600b805492831692821690930116179055565b61429480620005526000396000f3006080604052600436106102c65763ffffffff60e060020a600035041663024c7ec781146102cb5780630ca78923146102e75780630e53aae9146103195780631120a7761461036e57806315226b541461039f57806319b64015146103d25780631e1401f8146103ea57806321e6b53d1461042d578063227425641461044e5780632a2e2f0c146104b65780632c12b446146104e357806338a5e016146105045780633aa0145a146105195780633f4d2fc214610537578063415f12401461056657806341a5b33d1461057e57806342906029146105a8578063481c6a75146105bd57806349d10b64146105d25780634af80f0e146105e7578063500573511461060857806354fd4d501461067d578063579cd3ca146106a95780635e35359e146106d75780635e5144eb1461070157806361cd756e1461072e5780636a49d2c4146107435780636ebf36c01461076d57806371f52bf3146107a557806372b44b2c146107ba57806375892cf1146107de57806379ba50971461080b5780637b103999146108205780638da5cb5b146108355780638e3047e01461084a57806392d1abb714610874578063935e2ae11461088957806394c275ad146108ad5780639b99a8e2146108c2578063a2c4c336146108d7578063b3a426d5146108fb578063b4a176d31461099c578063bf754558146109b1578063c45d3d92146109da578063c8c2fe6c146109ef578063c976a35914610a04578063ca1d209d14610a19578063cf73266a14610a31578063d031370b14610a5b578063d4ee1d9014610a73578063d55ec69714610a88578063d66bd52414610a9d578063d895951214610abe578063d924f0c314610adf578063e4dd22f614610b00578063e4edf85214610b63578063ebf9470014610b84578063ecbca55d14610be2578063f0843ba914610c00578063f2fde38b14610c51578063fc0c546a14610c72578063fe417fa514610c87575b600080fd5b3480156102d757600080fd5b506102e56004351515610cab565b005b3480156102f357600080fd5b506102e5600160a060020a036004351663ffffffff602435166044351515606435610d2b565b34801561032557600080fd5b5061033a600160a060020a0360043516610d3b565b6040805195865263ffffffff9094166020860152911515848401521515606084015215156080830152519081900360a00190f35b34801561037a57600080fd5b50610383610d8d565b60408051600160a060020a039092168252519081900360200190f35b3480156103ab57600080fd5b506103c0600160a060020a0360043516610d9c565b60408051918252519081900360200190f35b3480156103de57600080fd5b50610383600435610e50565b3480156103f657600080fd5b50610414600160a060020a0360043581169060243516604435610e7c565b6040805192835260208301919091528051918290030190f35b34801561043957600080fd5b506102e5600160a060020a0360043516610ef9565b604080516020600480358082013583810280860185019096528085526103c095369593946024949385019291829185019084908082843750949750508435955050506020830135926040810135925060ff606082013516915060808101359060a00135610f49565b3480156104c257600080fd5b506103c0600160a060020a0360043581169060243516604435606435610f65565b3480156104ef57600080fd5b506103c0600160a060020a0360043516611364565b34801561051057600080fd5b506102e56113c0565b34801561052557600080fd5b506103c060043560ff60243516611476565b34801561054357600080fd5b506102e5600160a060020a036004351663ffffffff6024351660443515156114d4565b34801561057257600080fd5b506102e56004356114e3565b34801561058a57600080fd5b506102e5600160a060020a03600435811690602435166044356117ed565b3480156105b457600080fd5b50610383611897565b3480156105c957600080fd5b506103836118a6565b3480156105de57600080fd5b506102e56118b5565b3480156105f357600080fd5b506102e5600160a060020a0360043516611a41565b34801561061457600080fd5b50604080516020600480358082013583810280860185019096528085526103c095369593946024949385019291829185019084908082843750949750508435955050506020830135926040810135925060ff606082013516915060808101359060a00135611a92565b34801561068957600080fd5b50610692611a9f565b6040805161ffff9092168252519081900360200190f35b3480156106b557600080fd5b506106be611ac2565b6040805163ffffffff9092168252519081900360200190f35b3480156106e357600080fd5b506102e5600160a060020a0360043581169060243516604435611ada565b34801561070d57600080fd5b506103c0600160a060020a0360043581169060243516604435606435611beb565b34801561073a57600080fd5b50610383611c02565b34801561074f57600080fd5b506102e5600160a060020a036004351663ffffffff60243516611c11565b34801561077957600080fd5b506103c0600160a060020a0360043581169060243581169060443590606435906084351660a435611e49565b3480156107b157600080fd5b50610692611eef565b3480156107c657600080fd5b50610414600160a060020a0360043516602435611efe565b3480156107ea57600080fd5b506103c0600160a060020a03600435811690602435166044356064356121de565b34801561081757600080fd5b506102e56121ef565b34801561082c57600080fd5b5061038361226a565b34801561084157600080fd5b50610383612279565b34801561085657600080fd5b50610414600160a060020a0360043581169060243516604435612288565b34801561088057600080fd5b506103c0612296565b34801561089557600080fd5b506102e5600160a060020a036004351660243561229b565b3480156108b957600080fd5b506106be612350565b3480156108ce57600080fd5b50610692612364565b3480156108e357600080fd5b50610414600160a060020a036004351660243561236a565b604080516020600480358082013583810280860185019096528085526103c0953695939460249493850192918291850190849080828437505060408051818801358901803560208181028481018201909552818452989b8a359b8a8c01359b919a9099506060909101975092955090820193509182918501908490808284375094975050508335600160a060020a03169450505060209091013590506125fd565b3480156109a857600080fd5b506102e5612617565b3480156109bd57600080fd5b506109c661264e565b604080519115158252519081900360200190f35b3480156109e657600080fd5b50610383612667565b3480156109fb57600080fd5b506102e5612676565b348015610a1057600080fd5b506109c66126f3565b348015610a2557600080fd5b506102e5600435612714565b348015610a3d57600080fd5b50610414600160a060020a0360043581169060243516604435612a1d565b348015610a6757600080fd5b50610383600435612c4d565b348015610a7f57600080fd5b50610383612c75565b348015610a9457600080fd5b506102e5612c84565b348015610aa957600080fd5b5061033a600160a060020a0360043516612d60565b348015610aca57600080fd5b506103c0600160a060020a0360043516612da6565b348015610aeb57600080fd5b506102e5600160a060020a0360043516612db7565b604080516020600480358082013583810280860185019096528085526103c09536959394602494938501929182918501908490808284375094975050843595505050602083013592600160a060020a036040820135169250606001359050612df0565b348015610b6f57600080fd5b506102e5600160a060020a036004351661306e565b348015610b9057600080fd5b50604080516020600480358082013583810280860185019096528085526103c0953695939460249493850192918291850190849080828437509497505084359550505060209092013591506130d99050565b348015610bee57600080fd5b506102e563ffffffff60043516613406565b604080516020600480358082013583810280860185019096528085526103c0953695939460249493850192918291850190849080828437509497505084359550505060209092013591506134eb9050565b348015610c5d57600080fd5b506102e5600160a060020a0360043516613503565b348015610c7e57600080fd5b50610383613557565b348015610c9357600080fd5b506102e5600160a060020a0360043516602435613566565b60075460ff7401000000000000000000000000000000000000000090910416151581151514801590610ce05750610ce061365f565b1515610ceb57600080fd5b60078054911515740100000000000000000000000000000000000000000274ff000000000000000000000000000000000000000019909216919091179055565b610d35848261229b565b50505050565b600160a060020a03166000908152600a602052604090208054600190910154909163ffffffff82169160ff64010000000082048116926501000000000083048216926601000000000000900490911690565b600354600160a060020a031681565b600160a060020a0381166000908152600a602052604081206001015482906601000000000000900460ff161515610dd257600080fd5b6040805160e060020a6370a082310281523060048201529051600160a060020a038516916370a082319160248083019260209291908290030181600087803b158015610e1d57600080fd5b505af1158015610e31573d6000803e3d6000fd5b505050506040513d6020811015610e4757600080fd5b50519392505050565b6000600982815481101515610e6157fe5b600091825260209091200154600160a060020a031692915050565b600080600160a060020a038581169085161415610e9857600080fd5b600254600160a060020a0385811691161415610ec157610eb8858461236a565b91509150610ef1565b600254600160a060020a0386811691161415610ee157610eb88484611efe565b610eec858585612a1d565b915091505b935093915050565b600054600160a060020a03163314610f1057600080fd5b600080516020614229833981519152610f2881613686565b600160a060020a03163314610f3c57600080fd5b610f458261371e565b5050565b6000610f59888888600080612df0565b98975050505050505050565b6000806000806000807f42616e636f724e6574776f726b00000000000000000000000000000000000000610f9881613686565b600160a060020a03163314610fac57600080fd5b8760008111610fba57600080fd5b600160a060020a038c8116908c161415610fd357600080fd5b600254600160a060020a038c811691161415610ffb57610ff48c8b8b6137b7565b9750611355565b600254600160a060020a038d81169116141561101c57610ff48b8b8b6139d5565b6110278c8c8c612a1d565b9097509550861580159061103b5750888710155b151561104657600080fd5b600160a060020a03808d166000908152600a6020526040808220928e168252902090955093506110758b610d9c565b925082871061108057fe5b61108c8c33308d613d90565b6110988b30338a613d90565b6110a58c8c8c8a8a613fce565b8b600160a060020a0316600080516020614249833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561111157600080fd5b505af1158015611125573d6000803e3d6000fd5b505050506040513d602081101561113b57600080fd5b81019080805190602001909291905050508e600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b1580156111a757600080fd5b505af11580156111bb573d6000803e3d6000fd5b505050506040513d60208110156111d157600080fd5b5051600189015460408051938452602084019290925263ffffffff1682820152519081900360600190a28a600160a060020a0316600080516020614249833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561126757600080fd5b505af115801561127b573d6000803e3d6000fd5b505050506040513d602081101561129157600080fd5b81019080805190602001909291905050508d600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b1580156112fd57600080fd5b505af1158015611311573d6000803e3d6000fd5b505050506040513d602081101561132757600080fd5b5051600188015460408051938452602084019290925263ffffffff1682820152519081900360600190a28697505b50505050505050949350505050565b600160a060020a0381166000908152600a602052604081206001015482906601000000000000900460ff16151561139a57600080fd5b5050600160a060020a03166000908152600a602052604090206001015463ffffffff1690565b600054600160a060020a031633146113d757600080fd5b600254604080517f18160ddd0000000000000000000000000000000000000000000000000000000081529051600092600160a060020a0316916318160ddd91600480830192602092919082900301818787803b15801561143657600080fd5b505af115801561144a573d6000803e3d6000fd5b505050506040513d602081101561146057600080fd5b50511161146c57600080fd5b611474614051565b565b600b546000906114cd9060ff8416620f424081810a67ffffffffffffffff908116936114c193899363ffffffff680100000000000000009093048316900383160a909116906140cf16565b9063ffffffff61410816565b9392505050565b6114de8383611c11565b505050565b6000806000806000806000600160098054905011151561150257600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561155557600080fd5b505af1158015611569573d6000803e3d6000fd5b505050506040513d602081101561157f57600080fd5b5051965061159a600080516020614209833981519152613686565b6002546040805160e060020a63a24835d1028152336004820152602481018c90529051929850600160a060020a039091169163a24835d19160448082019260009290919082900301818387803b1580156115f357600080fd5b505af1158015611607573d6000803e3d6000fd5b50505050600091505b60095461ffff831610156117e3576009805461ffff841690811061163057fe5b60009182526020808320909101546040805160e060020a6370a082310281523060048201529051600160a060020a03909216985088936370a082319360248084019491939192918390030190829087803b15801561168d57600080fd5b505af11580156116a1573d6000803e3d6000fd5b505050506040513d60208110156116b757600080fd5b5051600b54604080517fabfd231d000000000000000000000000000000000000000000000000000000008152600481018b90526024810184905263ffffffff9092166044830152606482018b905251919550600160a060020a0388169163abfd231d916084808201926020929091908290030181600087803b15801561173c57600080fd5b505af1158015611750573d6000803e3d6000fd5b505050506040513d602081101561176657600080fd5b5051600160a060020a0386166000908152600a60205260409020909350905061179185303386613d90565b6001810154604080518a8a038152858703602082015263ffffffff9092168282015251600160a060020a03871691600080516020614249833981519152919081900360600190a2600190910190611610565b5050505050505050565b600054600160a060020a0316331461180457600080fd5b600254604080517f5e35359e000000000000000000000000000000000000000000000000000000008152600160a060020a03868116600483015285811660248301526044820185905291519190921691635e35359e91606480830192600092919082900301818387803b15801561187a57600080fd5b505af115801561188e573d6000803e3d6000fd5b50505050505050565b600554600160a060020a031681565b600454600160a060020a031681565b60075460009074010000000000000000000000000000000000000000900460ff1615806118e557506118e561365f565b15156118f057600080fd5b6119197f436f6e7472616374526567697374727900000000000000000000000000000000613686565b600654909150600160a060020a038083169116148015906119425750600160a060020a03811615155b151561194d57600080fd5b604080517fbb34534c0000000000000000000000000000000000000000000000000000000081527f436f6e747261637452656769737472790000000000000000000000000000000060048201529051600091600160a060020a0384169163bb34534c9160248082019260209290919082900301818787803b1580156119d157600080fd5b505af11580156119e5573d6000803e3d6000fd5b505050506040513d60208110156119fb57600080fd5b5051600160a060020a03161415611a1157600080fd5b6006805460078054600160a060020a03808416600160a060020a0319928316179092559091169216919091179055565b600054600160a060020a03163314611a5857600080fd5b80600160a060020a038116301415611a6f57600080fd5b5060088054600160a060020a031916600160a060020a0392909216919091179055565b6000610f598888886130d9565b6007547501000000000000000000000000000000000000000000900461ffff1681565b600b5468010000000000000000900463ffffffff1681565b6000611af3600080516020614229833981519152613686565b600160a060020a0385166000908152600a60205260409020600101549091506601000000000000900460ff161580611bbd5750600254604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290513092600160a060020a031691638da5cb5b9160048083019260209291908290030181600087803b158015611b8557600080fd5b505af1158015611b99573d6000803e3d6000fd5b505050506040513d6020811015611baf57600080fd5b5051600160a060020a031614155b80611bd55750600054600160a060020a038281169116145b1515611be057600080fd5b610d3584848461412b565b6000611bf985858585610f65565b95945050505050565b600754600160a060020a031681565b600054600160a060020a03163314611c2857600080fd5b600254604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290513092600160a060020a031691638da5cb5b9160048083019260209291908290030181600087803b158015611c8757600080fd5b505af1158015611c9b573d6000803e3d6000fd5b505050506040513d6020811015611cb157600080fd5b5051600160a060020a03161415611cc757600080fd5b81600160a060020a0381161515611cdd57600080fd5b82600160a060020a038116301415611cf457600080fd5b8260008163ffffffff16118015611d145750620f424063ffffffff821611155b1515611d1f57600080fd5b600254600160a060020a03868116911614801590611d635750600160a060020a0385166000908152600a60205260409020600101546601000000000000900460ff16155b8015611d815750600b54620f424063ffffffff918216860190911611155b1515611d8c57600080fd5b505050600160a060020a03919091166000818152600a60205260408120600180820180549284905566010000000000006501000000000063ffffffff1994851663ffffffff808a169190911765ffff0000000019169190911766ff0000000000001916919091179091556009805492830181559093527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af018054600160a060020a031916909317909255600b805492831692821690930116179055565b6040805160038082526080820190925260009160609190602082018380388339505060025482519293508a92600160a060020a039091169150899084906000908110611e9157fe5b906020019060200201846001815181101515611ea957fe5b906020019060200201856002815181101515611ec157fe5b600160a060020a0394851660209182029092010152928216909252919091169052610f598187878787612df0565b6000611ef9612364565b905090565b60008060008060008060008030600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611f6757600080fd5b505af1158015611f7b573d6000803e3d6000fd5b505050506040513d6020811015611f9157600080fd5b5051600160a060020a031614611fa657600080fd5b600160a060020a038a166000908152600a60205260409020600101548a906601000000000000900460ff161515611fdc57600080fd5b600160a060020a03808c166000908152600a6020908152604080832060025482517f18160ddd0000000000000000000000000000000000000000000000000000000081529251919c50909416936318160ddd93600480840194938390030190829087803b15801561204c57600080fd5b505af1158015612060573d6000803e3d6000fd5b505050506040513d602081101561207657600080fd5b50516040805160e060020a6370a082310281523060048201529051919750600160a060020a038d16916370a08231916024808201926020929091908290030181600087803b1580156120c757600080fd5b505af11580156120db573d6000803e3d6000fd5b505050506040513d60208110156120f157600080fd5b5051945061210c600080516020614209833981519152613686565b6001880154604080517f49f9b0f7000000000000000000000000000000000000000000000000000000008152600481018a90526024810189905263ffffffff9092166044830152606482018d905251919550600160a060020a038616916349f9b0f7916084808201926020929091908290030181600087803b15801561219157600080fd5b505af11580156121a5573d6000803e3d6000fd5b505050506040513d60208110156121bb57600080fd5b505192506121ca836001611476565b9b928c90039a509198505050505050505050565b6000611bf985858585600080611e49565b600154600160a060020a0316331461220657600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a36001805460008054600160a060020a0319908116600160a060020a03841617909155169055565b600654600160a060020a031681565b600054600160a060020a031681565b600080610eec858585612a1d565b600181565b60008054600160a060020a031633146122b357600080fd5b6000805160206142298339815191526122cb81613686565b600160a060020a031633146122df57600080fd5b600160a060020a0384166000908152600a602052604090206001015484906601000000000000900460ff16151561231557600080fd5b505050600160a060020a03919091166000908152600a6020526040902060018101805464ff0000000019168315156401000000000217905555565b600b54640100000000900463ffffffff1681565b60095490565b60008060008060008060008030600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156123d357600080fd5b505af11580156123e7573d6000803e3d6000fd5b505050506040513d60208110156123fd57600080fd5b5051600160a060020a03161461241257600080fd5b600160a060020a038a166000908152600a60205260409020600101548a906601000000000000900460ff16151561244857600080fd5b600160a060020a03808c166000908152600a6020908152604080832060025482517f18160ddd0000000000000000000000000000000000000000000000000000000081529251919c50909416936318160ddd93600480840194938390030190829087803b1580156124b857600080fd5b505af11580156124cc573d6000803e3d6000fd5b505050506040513d60208110156124e257600080fd5b50516040805160e060020a6370a082310281523060048201529051919750600160a060020a038d16916370a08231916024808201926020929091908290030181600087803b15801561253357600080fd5b505af1158015612547573d6000803e3d6000fd5b505050506040513d602081101561255d57600080fd5b50519450612578600080516020614209833981519152613686565b6001880154604080517f29a00e7c000000000000000000000000000000000000000000000000000000008152600481018a90526024810189905263ffffffff9092166044830152606482018d905251919550600160a060020a038616916329a00e7c916084808201926020929091908290030181600087803b15801561219157600080fd5b600061260c8787878686612df0565b979650505050505050565b61261f61365f565b151561262a57600080fd5b60075460068054600160a060020a031916600160a060020a03909216919091179055565b600b546c01000000000000000000000000900460ff1681565b600854600160a060020a031681565b600554600160a060020a0316331461268d57600080fd5b600554600454604051600160a060020a0392831692909116907fbe4cc281795971a471c980e842627a7f1ea3892ddfce8c5b6357cd2611c1973290600090a36005805460048054600160a060020a0319908116600160a060020a03841617909155169055565b60075474010000000000000000000000000000000000000000900460ff1681565b6000806000806000806000600160098054905011151561273357600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561278657600080fd5b505af115801561279a573d6000803e3d6000fd5b505050506040513d60208110156127b057600080fd5b505196506127cb600080516020614209833981519152613686565b9550600091505b60095461ffff831610156129a5576009805461ffff84169081106127f257fe5b60009182526020808320909101546040805160e060020a6370a082310281523060048201529051600160a060020a03909216985088936370a082319360248084019491939192918390030190829087803b15801561284f57600080fd5b505af1158015612863573d6000803e3d6000fd5b505050506040513d602081101561287957600080fd5b5051600b54604080517f1da6bbfb000000000000000000000000000000000000000000000000000000008152600481018b90526024810184905263ffffffff9092166044830152606482018b905251919550600160a060020a03881691631da6bbfb916084808201926020929091908290030181600087803b1580156128fe57600080fd5b505af1158015612912573d6000803e3d6000fd5b505050506040513d602081101561292857600080fd5b5051600160a060020a0386166000908152600a60205260409020909350905061295385333086613d90565b600181015460408051898b018152868601602082015263ffffffff9092168282015251600160a060020a03871691600080516020614249833981519152919081900360600190a26001909101906127d2565b6002546040805160e260020a63219e412d028152336004820152602481018b90529051600160a060020a039092169163867904b49160448082019260009290919082900301818387803b1580156129fb57600080fd5b505af1158015612a0f573d6000803e3d6000fd5b505050505050505050505050565b600080600080600080600030600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015612a8557600080fd5b505af1158015612a99573d6000803e3d6000fd5b505050506040513d6020811015612aaf57600080fd5b5051600160a060020a031614612ac457600080fd5b600160a060020a038a166000908152600a60205260409020600101548a906601000000000000900460ff161515612afa57600080fd5b600160a060020a038a166000908152600a60205260409020600101548a906601000000000000900460ff161515612b3057600080fd5b600160a060020a03808d166000908152600a6020526040808220928e16825290209097509550612b6d600080516020614209833981519152613686565b945084600160a060020a03166379c1b450612b878e610d9c565b60018a015463ffffffff16612b9b8f610d9c565b60018b01546040805163ffffffff87811660e060020a028252600482019690965293851660248501526044840192909252929092166064820152608481018e9052905160a48083019260209291908290030181600087803b158015612bff57600080fd5b505af1158015612c13573d6000803e3d6000fd5b505050506040513d6020811015612c2957600080fd5b50519350612c38846002611476565b9c938d90039b50929950505050505050505050565b6009805482908110612c5b57fe5b600091825260209091200154600160a060020a0316905081565b600154600160a060020a031681565b60008054600160a060020a03163314612c9c57600080fd5b612cb3600080516020614229833981519152613686565b9050612cbe81613503565b600754604080517f90f58c96000000000000000000000000000000000000000000000000000000008152750100000000000000000000000000000000000000000090920461ffff16600483015251600160a060020a038316916390f58c9691602480830192600092919082900301818387803b158015612d3d57600080fd5b505af1158015612d51573d6000803e3d6000fd5b50505050612d5d6121ef565b50565b600a602052600090815260409020805460019091015463ffffffff81169060ff640100000000820481169165010000000000810482169166010000000000009091041685565b6000612db182610d9c565b92915050565b600054600160a060020a03163314612dce57600080fd5b60038054600160a060020a031916600160a060020a0392909216919091179055565b600080612e1c7f42616e636f724e6574776f726b00000000000000000000000000000000000000613686565b9050341515612f63576002548751600160a060020a039091169088906000908110612e4357fe5b90602001906020020151600160a060020a03161415612f3f576002546040805160e060020a63a24835d1028152336004820152602481018990529051600160a060020a039092169163a24835d19160448082019260009290919082900301818387803b158015612eb257600080fd5b505af1158015612ec6573d6000803e3d6000fd5b50506002546040805160e260020a63219e412d028152600160a060020a038681166004830152602482018c9052915191909216935063867904b49250604480830192600092919082900301818387803b158015612f2257600080fd5b505af1158015612f36573d6000803e3d6000fd5b50505050612f63565b612f63876000815181101515612f5157fe5b90602001906020020151338389613d90565b80600160a060020a031663ab6214ce34898989338a8a6040518863ffffffff1660e060020a028152600401808060200187815260200186815260200185600160a060020a0316600160a060020a0316815260200184600160a060020a0316600160a060020a03168152602001838152602001828103825288818151815260200191508051906020019060200280838360005b8381101561300d578181015183820152602001612ff5565b505050509050019750505050505050506020604051808303818588803b15801561303657600080fd5b505af115801561304a573d6000803e3d6000fd5b50505050506040513d602081101561306157600080fd5b5051979650505050505050565b600054600160a060020a03163314806130915750600454600160a060020a031633145b151561309c57600080fd5b600454600160a060020a03828116911614156130b757600080fd5b60058054600160a060020a031916600160a060020a0392909216919091179055565b6000806000806131087f42616e636f725800000000000000000000000000000000000000000000000000613686565b92506131337f42616e636f724e6574776f726b00000000000000000000000000000000000000613686565b915061315e7f424e54546f6b656e000000000000000000000000000000000000000000000000613686565b600160a060020a031687600081518110151561317657fe5b60209081029091010151600160a060020a03161461319357600080fd5b604080517faafd6b76000000000000000000000000000000000000000000000000000000008152600481018790523360248201529051600160a060020a0385169163aafd6b769160448083019260209291908290030181600087803b1580156131fb57600080fd5b505af115801561320f573d6000803e3d6000fd5b505050506040513d602081101561322557600080fd5b50516002546040805160e060020a63a24835d1028152336004820152602481018490529051929350600160a060020a039091169163a24835d19160448082019260009290919082900301818387803b15801561328057600080fd5b505af1158015613294573d6000803e3d6000fd5b50506002546040805160e260020a63219e412d028152600160a060020a03878116600483015260248201879052915191909216935063867904b49250604480830192600092919082900301818387803b1580156132f057600080fd5b505af1158015613304573d6000803e3d6000fd5b5050505081600160a060020a031663ab6214ce888389336000806040518763ffffffff1660e060020a028152600401808060200187815260200186815260200185600160a060020a0316600160a060020a0316815260200184600160a060020a0316600160a060020a03168152602001838152602001828103825288818151815260200191508051906020019060200280838360005b838110156133b257818101518382015260200161339a565b50505050905001975050505050505050602060405180830381600087803b1580156133dc57600080fd5b505af11580156133f0573d6000803e3d6000fd5b505050506040513d602081101561306157600080fd5b600054600160a060020a03163314806134295750600454600160a060020a031633145b151561343457600080fd5b60008163ffffffff161015801561345f5750600b5463ffffffff640100000000909104811690821611155b151561346a57600080fd5b600b546040805163ffffffff6801000000000000000090930483168152918316602083015280517f81cd2ffb37dd237c0e4e2a3de5265fcf9deb43d3e7801e80db9f1ccfba7ee6009281900390910190a1600b805463ffffffff90921668010000000000000000026bffffffff000000000000000019909216919091179055565b60006134fb848484600080612df0565b949350505050565b600054600160a060020a0316331461351a57600080fd5b600054600160a060020a038281169116141561353557600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a031681565b600354600160a060020a0316331461357d57600080fd5b6002546040805160e060020a63a24835d1028152600160a060020a038581166004830152602482018590529151919092169163a24835d191604480830192600092919082900301818387803b1580156135d557600080fd5b505af11580156135e9573d6000803e3d6000fd5b50506002546040805160e260020a63219e412d028152336004820152602481018690529051600160a060020a03909216935063867904b4925060448082019260009290919082900301818387803b15801561364357600080fd5b505af1158015613657573d6000803e3d6000fd5b505050505050565b60008054600160a060020a0316331480611ef9575050600454600160a060020a0316331490565b600654604080517fbb34534c000000000000000000000000000000000000000000000000000000008152600481018490529051600092600160a060020a03169163bb34534c91602480830192602092919082900301818787803b1580156136ec57600080fd5b505af1158015613700573d6000803e3d6000fd5b505050506040513d602081101561371657600080fd5b505192915050565b600054600160a060020a0316331461373557600080fd5b600254604080517ff2fde38b000000000000000000000000000000000000000000000000000000008152600160a060020a0384811660048301529151919092169163f2fde38b91602480830192600092919082900301818387803b15801561379c57600080fd5b505af11580156137b0573d6000803e3d6000fd5b5050505050565b6000806000806137c7878761236a565b909350915082158015906137db5750848310155b15156137e657600080fd5b50600160a060020a0386166000908152600a6020526040902061380b87333089613d90565b6002546040805160e260020a63219e412d028152336004820152602481018690529051600160a060020a039092169163867904b49160448082019260009290919082900301818387803b15801561386157600080fd5b505af1158015613875573d6000803e3d6000fd5b50506002546138939250899150600160a060020a0316888686613fce565b86600160a060020a0316600080516020614249833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156138ff57600080fd5b505af1158015613913573d6000803e3d6000fd5b505050506040513d602081101561392957600080fd5b50516040805160e060020a6370a082310281523060048201529051600160a060020a038c16916370a082319160248083019260209291908290030181600087803b15801561397657600080fd5b505af115801561398a573d6000803e3d6000fd5b505050506040513d60208110156139a057600080fd5b5051600185015460408051938452602084019290925263ffffffff1682820152519081900360600190a2509095945050505050565b6002546040805160e060020a6370a08231028152336004820152905160009283928392839283928392600160a060020a03909216916370a082319160248082019260209290919082900301818787803b158015613a3157600080fd5b505af1158015613a45573d6000803e3d6000fd5b505050506040513d6020811015613a5b57600080fd5b5051881115613a6957600080fd5b613a738989611efe565b90955093508415801590613a875750868510155b1515613a9257600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015613ae557600080fd5b505af1158015613af9573d6000803e3d6000fd5b505050506040513d6020811015613b0f57600080fd5b50516040805160e060020a6370a082310281523060048201529051919450600160a060020a038b16916370a08231916024808201926020929091908290030181600087803b158015613b6057600080fd5b505af1158015613b74573d6000803e3d6000fd5b505050506040513d6020811015613b8a57600080fd5b5051915081851080613ba557508185148015613ba557508288145b1515613bad57fe5b50600160a060020a038089166000908152600a6020526040808220600254825160e060020a63a24835d1028152336004820152602481018d905292519194169263a24835d1926044808201939182900301818387803b158015613c0f57600080fd5b505af1158015613c23573d6000803e3d6000fd5b50505050613c3389303388613d90565b600254613c4c90600160a060020a03168a8a8888613fce565b88600160a060020a0316600080516020614249833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015613cb857600080fd5b505af1158015613ccc573d6000803e3d6000fd5b505050506040513d6020811015613ce257600080fd5b50516040805160e060020a6370a082310281523060048201529051600160a060020a038e16916370a082319160248083019260209291908290030181600087803b158015613d2f57600080fd5b505af1158015613d43573d6000803e3d6000fd5b505050506040513d6020811015613d5957600080fd5b5051600185015460408051938452602084019290925263ffffffff1682820152519081900360600190a25092979650505050505050565b60008085600160a060020a03166370a08231856040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b158015613dee57600080fd5b505af1158015613e02573d6000803e3d6000fd5b505050506040513d6020811015613e1857600080fd5b50519150600160a060020a038516301415613ead5785600160a060020a031663a9059cbb85856040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b158015613e9057600080fd5b505af1158015613ea4573d6000803e3d6000fd5b50505050613f39565b604080517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a0387811660048301528681166024830152604482018690529151918816916323b872dd9160648082019260009290919082900301818387803b158015613f2057600080fd5b505af1158015613f34573d6000803e3d6000fd5b505050505b85600160a060020a03166370a08231856040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b158015613f9457600080fd5b505af1158015613fa8573d6000803e3d6000fd5b505050506040513d6020811015613fbe57600080fd5b5051905081811161365757600080fd5b7f80000000000000000000000000000000000000000000000000000000000000008110613ff757fe5b604080518481526020810184905280820183905290513391600160a060020a0387811692908916917f276856b36cbc45526a0ba64f44611557a2a8b68662c5388e9fe6d72e86e1c8cb919081900360600190a45050505050565b600054600160a060020a0316331461406857600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166379ba50976040518163ffffffff1660e060020a028152600401600060405180830381600087803b1580156140bb57600080fd5b505af1158015610d35573d6000803e3d6000fd5b6000808315156140e25760009150614101565b508282028284828115156140f257fe5b04146140fd57600080fd5b8091505b5092915050565b60008080831161411757600080fd5b828481151561412257fe5b04949350505050565b600054600160a060020a0316331461414257600080fd5b82600160a060020a038116151561415857600080fd5b82600160a060020a038116151561416e57600080fd5b83600160a060020a03811630141561418557600080fd5b85600160a060020a031663a9059cbb86866040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b1580156141e857600080fd5b505af11580156141fc573d6000803e3d6000fd5b50505050505050505050560042616e636f72466f726d756c610000000000000000000000000000000000000042616e636f72436f6e76657274657255706772616465720000000000000000008a6a7f53b3c8fa1dc4b83e3f1be668c1b251ff8d44cdcb83eb3acec3fec6a788a165627a7a723058200453e57de80c450787e9e4ce6ae9a806febb584d4e5771d40d80a6f11234c8010029";