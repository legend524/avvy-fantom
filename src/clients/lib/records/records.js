
  export default {
  "records": [
    {
      "key": 1,
      "name": "X_CHAIN",
      "regex": {
        "address": "[xX]-(AVAX|avax)[A-Za-z0-9]{39}"
      },
      "label": "X-Chain Address",
      "description": "Address on Avalanche X-Chain"
    },
    {
      "key": 2,
      "name": "P_CHAIN",
      "regex": {
        "address": "[pP]-(AVAX|avax)[A-Za-z0-9]{39}"
      },
      "label": "P-Chain Address",
      "description": "Address on Avalanche P-Chain"
    },
    {
      "key": 3,
      "name": "EVM",
      "regex": {
        "address": "0x[a-fA-F0-9]{40}"
      },
      "label": "C-Chain / EVM Address",
      "description": "Address on EVM-type network, including Avalanche C-Chain"
    },
    {
      "key": 4,
      "name": "VALIDATOR",
      "regex": {
        "node_id": "NodeID-[A-Za-z0-9]{33}"
      },
      "label": "Validator NodeID",
      "description": "Validator NodeID on the Avalanche Network"
    },
    {
      "key": 5,
      "name": "DNS_CNAME",
      "regex": {
        "hostname": "([A-Za-z0-9\\-]+\\.)+[A-Za-z0-9\\-]+"
      },
      "label": "DNS CNAME Record",
      "description": "DNS CNAME Record"
    },
    {
      "key": 6,
      "name": "DNS_A",
      "regex": {
        "ipv4": "\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b",
        "ipv6": "(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))"
      },
      "label": "DNS A Record",
      "description": "DNS A Record"
    },
    {
      "key": 7,
      "name": "AVATAR",
      "regex": {
        "http": "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)"
      },
      "label": "Avatar",
      "description": "An image which the user wishes to use as their avatar. Value should be a URL which references the image."
    },
    {
      "key": 8,
      "name": "CONTENT",
      "regex": {
        "http": "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)",
        "ipfs": "ipfs:\\/\\/[A-Za-z0-9]{46}"
      },
      "label": "Content",
      "description": "A downloadable file. Value should be a URL (e.g. IPFS, HTTPS, ..) which references the image."
    },
    {
      "key": 9,
      "name": "PHONE",
      "regex": {
      },
      "label": "Phone Number",
      "description": "A telephone number. Should conform to the \"tel\" URL scheme defined in RFC2806."
    }
  ]
}

  