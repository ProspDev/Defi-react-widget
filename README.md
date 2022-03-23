
Basic Usage :

```jsx
import React, { Component, Fragment } from 'react'
import { useWeb3Context } from 'web3-react';
import { TokenConversionWidget } from 'react-defi-widget'

const MainPage = (props) => {

  const context = useWeb3Context();

  useEffect(() => {
        context.setFirstValidConnector(['MetaMask']) // Or on your choice
  }, [])

  return (
    <Fragment>
        <TokenConversionWidget
          web3ReactContext={context}
        />
    </Fragment>
  )
}
```

Advance Usage :

```jsx
import React, { Component, Fragment } from 'react'
import { useWeb3Context } from 'web3-react';
import { TokenConversionWidget } from 'react-defi-widget'

const MainPage = (props) => {

  const context = useWeb3Context();

  useEffect(() => {
        context.setFirstValidConnector(['MetaMask']) // Or on your choice
  }, [])

  return (
    <Fragment>
        <TokenConversionWidget
          web3ReactContext={context}
          title={"YOUR TITLE"}
          subtitle={"YOUR SUBTITLE"}
          description={"CAN BE SOMETHING TO TELL YOUR USERS"}
          color={"#777"}
          baseCurrency={"BNT"}
          pairCurrency={"ETH"}
          affiliateAccount={"0x8fD00f170FDf3772C5ebdCD90bF257316c69BA45"}
          affiliateFee={3}
          whitelisted={["ETH", "BNT", "KNC", "ENJ"]} // You might need to check all available tokens first
        />
    </Fragment>
  )
}
```

### Liquidity Pool Explorer / Pool Creation Widget

The widget offers a vast opportunity for your website visitors to stake liquidity and create the new pool in the permissionless manner.

Shows all available liquidity pools :

```jsx
import React, { Component, Fragment } from 'react'
import { useWeb3Context } from 'web3-react';
import { LiquidityPoolsWidget } from 'react-defi-widget'

const MainPage = (props) => {

  const context = useWeb3Context();

  useEffect(() => {
        context.setFirstValidConnector(['MetaMask']) // Or on your choice
  }, [])

  return (
    <Fragment>
        <LiquidityPoolsWidget
          web3ReactContext={web3context}
          color={color}
        />
    </Fragment>
  )
}
```

Filter specific pools :

```jsx
import React, { Component, Fragment } from 'react'
import { useWeb3Context } from 'web3-react';
import { LiquidityPoolsWidget } from 'react-defi-widget'

const MainPage = (props) => {

  const context = useWeb3Context();

  useEffect(() => {
        context.setFirstValidConnector(['MetaMask']) // Or on your choice
  }, [])

  return (
    <Fragment>
        <LiquidityPoolsWidget
          web3ReactContext={web3context}
          color={color}
          defaultPool={"ENJBNT"}
          whitelisted={["ETHBNT", "ENJBNT", "DAIBNT"]}
          disablePoolCreation={true}
        />
    </Fragment>
  )
}
```


## Local Development

To run the examples locally, run the library first

```
npm install
npm start
```

Then open another window and run the webapp

```
cd example/
npm install
npm start
```
