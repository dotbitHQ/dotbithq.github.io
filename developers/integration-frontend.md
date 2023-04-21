# Integrating .bit into Frontend

## dotbit.js
[dotbit.js](https://github.com/dotbitHQ/dotbit.js) is an npm package that wraps the JSON-RPC calls to the indexer.

Dapps only need to integrate this SDK and call the corresponding interfaces (data provided by .bit [das-account-indexer](./integration-backend.md#das-account-indexer)) to obtain the required data.

> Note that after obtaining the value of the data set by the user, the validity of its value should be verified.

> [dotbit.js documentation](https://github.com/dotbitHQ/dotbit.js)

### Dependencies
Using this SDK requires the JSON-RPC service provided by [das-account-indexer](./integration-backend.md).

We recommend that developers build their own .bit Indexer, but developers can use the official .bit Indexer service for development and testing during the development phase. For details, please refer to:
> [Official Indexer service](./integration-backend.md#official-indexer-service)

### Usage example

```javascript
// For ES Module
import { createInstance } from 'dotbit'
const dotbit = createInstance()

// Get the account info of a .bit account
dotbit.records("jeffx.bit").then(console.log)
```

**Output**
```js
[
    {
      key: 'address.polygon',
      label: 'Usually',
      value: '0xB2bE2887A26f44555835EEaCC47d65B88b6B42c2',
      ttl: '300',
      type: 'address',
      subtype: 'polygon'
    },
  {
    key: 'profile.discord',
    label: 'Discord Username',
    value: 'west.bit#8906',
    ttl: '300',
    type: 'profile',
    subtype: 'discord'
  },
]
```

#### Next steps
- If you need to integrate .bit on the backend, please refer to [Backend Integration](./integration-backend.md)
- If you need to view the design guide, please see [Design Guide](./design-guide.md)