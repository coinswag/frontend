/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/shop_program.json`.
 */
export type ShopProgram = {
  "address": "dtKYr6vLWQR4kYJxRcoFfqv3PtXAtEyZDLJVqzyDwRU",
  "metadata": {
    "name": "shopProgram",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "createShop",
      "discriminator": [
        83,
        215,
        157,
        151,
        185,
        162,
        84,
        154
      ],
      "accounts": [
        {
          "name": "shop",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  104,
                  111,
                  112
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "arg",
                "path": "shopName"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "shopName",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "shop",
      "discriminator": [
        57,
        31,
        123,
        216,
        254,
        72,
        11,
        77
      ]
    }
  ],
  "types": [
    {
      "name": "shop",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "createdAt",
            "type": "i64"
          }
        ]
      }
    }
  ]
};
