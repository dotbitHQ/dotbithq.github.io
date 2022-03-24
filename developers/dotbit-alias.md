# .bit Alias

**.bit Alias** is a feature provided by .bit, which can give any address a globally-unique Alias.

For example, you can give your BTC address `bc123...456` an alias to `mybtc.bit`. That way, when other developers want to show `bc123...456` to the user, the alias `mybtc.bit` can be displayed at the same time, so that other users can verify the owner of the address.

For more information, please refer to the .bit website and articles:

> [.bit Alias Website](https://www.did.id/bit-alias)  
> [.bit Alias Comes!](https://talk.did.id/t/bit-alias-comes/401)

## Setting up .bit Alias
The .bit Alias now supports ETH/BSC/TRX/Polygon addresses.

Users can visit [.bit Alias App](https://app.did.id/alias) and log in their wallet, then they can set up .bit Alias for their addresses.

> More information in [.bit Alias Guide](https://talk.did.id/t/bit/400#h-7)


## Resolve .bit Alias

### Frontend Resolution
If you want to resolve .bit Alias in frontend, you need to use [das-sdk-js](https://github.com/dotbitHQ/das-sdk-js).

> More information in [Frontend Integration](./integration-frontend.md)

All you need to do is invoke the `reverseRecord` method and pass in the parameters to complete the resolution of the .bit alias.

#### Example
```javascript
const account = await das.reverseRecord({
  type: 'blockchain',
  key_info: {
    coin_type: '60',
    chain_id: '1',
    key: '0x1d643fac9a463c9d544506006a6348c234da485f'
  }
})

console.assert(account === 'imac.bit')
```

> Detailed parameters see below: [Detailed of Parameters](#detailed-of-parameters)

### Backend Resolution

If you want to resolve .bit Alias in backend, you need to set up [das-account-indexer](https://github.com/dotbitHQ/das-account-indexer) first.


> Please see [Backend Integration](./integration-backend.md)

All you need to do is invoke the `das_reverseRecord` method and pass in the parameters to complete the resolution of the .bit Alias.


#### Example

**Request**
```shell
curl -X POST https://indexer-basic.did.id -d'{"jsonrpc": "2.0","id": 1,"method": "das_reverseRecord","params": [{"type": "blockchain","key_info":{"coin_type": "60","chain_id": "1","key": "0x1d643fac9a463c9d544506006a6348c234da485f"}}]}
```
**Response**
```json5
{"id":1,"jsonrpc":"2.0","result":{"errno":0,"errmsg":"","data":{"account":"imac.bit"}}}
```

> Detailed parameters see below: [Detailed of Parameters](#detailed-of-parameters)


### Detailed of Parameters

Both the front-end function call and the back-end JSON-RPC call need to pass in the same parameters:

```json5
{
  type: 'blockchain',
  key_info: {
    coin_type: '60',
    chain_id: '1',
    key: '0x1d643fac9a463c9d544506006a6348c234da485c'
  }
}
```

The values of each field are as follows:

#### type
The type of data to be parsed, currently only 'blockchain' is supported, but 'OpenPGP' and 'SSL' will be supported in the future.

#### coin_type
The `coin_type` of the target address，following [SLIP-0044 Spec](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) 。

Here are some common values:

| coin_type | Symbol | Chain               |
|:----------|:-------|:--------------------|
| 0         | BTC    | Bitcoin             |
| 3         | DOGE   | Dogecoin            |
| 60        | ETH    | Ethereum            |
| 966       | MATIC  | Matic               |
| 9006      | BSC    | Binance Smart Chain |

> See [SLIP-0044 Spec](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) 。

#### chain_id
In the case of EVM compatible chains, `chain_id` can be used to further distinguish specific chains, such as ETH, BSC, and HECO.

Here are some common values:

| chain_id | Symbol | Chain               |
|:---------|:-------|:--------------------|
| 1        | ETH    | Ethereum            |
| 56       | BNB    | Binance Smart Chain |
| 137      | MATIC  | Polygon             |

> The data is from [Chainlist](https://chainlist.org/)

#### key
This is the specific value, like the ETH address of user: `0x1d643fac9a463c9d544506006a6348c234da485c`. 

