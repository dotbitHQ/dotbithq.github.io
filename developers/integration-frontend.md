# Frontend Integration

## [das-sdk-js](https://github.com/dotbitHQ/das-sdk-js)
[das-sdk-js](https://github.com/dotbitHQ/das-sdk-js) is a NPM package that encapsulates JSON-RPC calls to indexer.

The dapp only need to integrate this SDK and invoke corresponding API, whose data is provided by [das-account-indexer](./integration-backend.md#das-account-indexer), can get the needed data.  

> Note that after the application gets the value of the user-set data, it should always verify the validity of the value.

> [das-sdk-js Document](https://github.com/dotbitHQ/das-sdk-js)

### Prerequisites
This SDK relies on the JSON-RPC service provided by [das-account-indexer](./integration-backend.md).

We recommend that developers buidl their own .bit Indexer, but developers can use the official .bit Indexer service for development and testing. See:
> [Official Indexer Service](./integration-backend.md#official-indexer-service)

### Usage Example

```javascript
import Das from 'das-sdk'

const das = new Das({
  url: 'https://indexer-v1.did.id',
})

das.records('dasloveckb.bit').then(console.log)
```

**Output**
```json5
[{
  key: 'address.eth',
  label: 'coinbase',
  value: '0x1234...4567',
  ttl: 300,
  avatar: 'https://display.did.id/identicon/dasloveckb.bit'
}, {
  key: 'address.eth',
  label: 'onchain',
  value: '0x2345...6789',
  ttl: 300,
  avatar: 'https://display.did.id/identicon/dasloveckb.bit'
}]
```

#### Next Step
- If you need to integrate .bit in backend, please read [Backend Integration](./integration-backend.md)
- If you need design guide, please see [Design Guide](./design-guide.md)