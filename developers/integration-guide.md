# .bit Integration Guide

> After the branding upgrade, we upgraded the `DAS` branding to `.bit`, but to maintain forward compatibility, the open source library will remain the `DAS` brand for now.

## Prepare for Integration
It's recommended reading through [docs.did.id](https://docs.did.id) document, so that the developer's time can be saved.

The key content：
- [Terminology](../terminology)
- [FAQ](../faq)
- [Open Registration Rules](../register-das/open-registration-rules)
- [Record Namespaces/Supported Chains](./records-key-namespace)

## Integration Guide

### Application Example
If you do not know what to build, here is an example.

> [Application Example](./build-application.md)

### Frontend Integration
If you need to integrate _.bit_ in _Web frontend_, you need to read this document.

> [Guide of Frontend Integration](./integration-frontend.md)

### Backend Integration
If you need to integrate _.bit_ in _backend_, you need to read this document. 

> [Guide of Backend API Integration](./integration-backend.md)

### Wallet Integration
If you are developing a wallet, then you can not only resolve _.bit_ account to improve user experience, but also list **.bit Registration Service** to earn commission. 

> [Guide of Wallet Integration](./wallet-integration.md)

### .bit Alias
**.bit Alias** is one of the most powerful feature of _.bit_, which provide an extra layer of security for users in blockchain world.

> [Guide of .bit Alias](./dotbit-alias.md)


## List Your Dapp on .bit Official Website

We are constantly collecting projects that have completed integration with .bit. If we have missed your project information, please email [supermancy@did.id](mailto:supermancy@did.id) with the following information:

- Project name;
- Logo and URL;
- Project description.

## Useful Resources
- [**.bit Record Key Namespaces**](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt) The key of the record for every .bit account must be in the namespace, including types such as address/profile/ dWeb. Here is the list of them.
- [**.bit Open-Source Libraries**](./dotbit-libraries.md) Here's a list of useful .bit open source libraries to help you develop your application.
