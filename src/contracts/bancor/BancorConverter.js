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