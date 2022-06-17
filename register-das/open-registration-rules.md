# Open registration rules

.bit accounts, as a public resource, should avoid to be hoarded by a few people when its social influence is not enough to reach a broad market. Therefore .bit team adopts the strategy that makes registration opening up gradually.

| Account Character Length | Open Registration Rules                              |
| :----------------------- |:-----------------------------------------------------|
| 10 digits and above      | All registrations will be open on the day of launch. |
| 4-9 digits               | See [Release Plan](#release-plan)                    |
| 1~3 digits               | To be determined.                                    |

::: tip Notice 
As of 2022-04-18, .bit accounts have been released to 60%. The release of the remaining accounts is still under planing, please stay tuned. 
:::

## Release Plan 2022-03-09
In consideration of fairness, only 60% of .bit accounts can be registered randomly for now.  
As .bit integrates with more DApps and .bit’s brand awareness grows,.bit team believes that it’s time to release more accounts.   
Along with the rebranding,.bit team hereby reveals the plan for accounts releasing.

### Plan for accounts releasing:
2022–03–21 12:00PM(UTC+0), release to 40%；  
2022–03–28 12:00PM(UTC+0), release to 45%；  
2022–04–04 12:00PM(UTC+0), release to 50%；  
2022–04–11 12:00PM(UTC+0), release to 55%；  
2022–04–18 12:00PM(UTC+0), release to 60%；

> The exact releasing time for each account can be searched on [app.did.id](https://app.did.id).(Only the upcoming 25% accounts' releasing date can be searched.)

### Parameters for each release:
Release to 40% = 1717986918  
Release to 45% = 1932735282  
Release to 50% = 2147483647  
Release to 55% = 2362232012  
Release to 60% = 2576980377  

> **Code and parameters for releasing:**
>
> [Code of algorithm](https://github.com/dotbitHQ/das-contracts/blob/7717330047772f51855d79bd67b77dede34d0bf8/contracts/pre-account-cell-type/src/entry.rs#L597-L630)
> 
> [parameters of algorithm](https://github.com/dotbitHQ/das-contracts/blob/7717330047772f51855d79bd67b77dede34d0bf8/contracts/pre-account-cell-type/src/entry.rs#L607)

The rest 40% will be released gradually according to the number of owner addresses in the future.



