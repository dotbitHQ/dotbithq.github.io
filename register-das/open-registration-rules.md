# Open registration rules

0xuma.bit accounts as a public resource should be avoided to be hoarded by a few people when the social influence is not enough..bit account registration is opened gradually.

| Account Character Length | Open Registration Rules                              |
| :----------------------- |:-----------------------------------------------------|
| 10 digits and above      | All registrations will be open on the day of launch. |
| 4-9 digits               | See [Release Plan](#release-plan)                    |
| 1~3 digits               | To be determined.                                    |

## Release Plan
In consideration of fairness, only 35% of .bit accounts are randomly registrable for now.  
As .bit integrating with more DApps and .bit’s brand visibility enhancing, we think it’s time to release more accounts.   
With our brand upgrading, we hereby reveal the plan for accounts releasing.

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



