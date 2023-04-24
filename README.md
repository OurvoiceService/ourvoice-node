# Ourvoice NodeJS Package 

The Ourvoice Node library provides convenient access to the Ourvoice API from
applications written in server-side JavaScript.

## Documentation

See the [API docs](https://api-docs.getourvoice.com/).

## Installation

Install the package with:

``` bash
npm install OurVoice-test --save
```

## Usage

The package needs to be configured with your account's secret key which is available in your [OurVoice Dashboard](https://app.getourvoice.com/developers/settings). Require it with the key's value:

``` js
import { OurVoice } from 'ourvoice-node-sdk';

const client = new OurVoice({
   apiKey: "API KEY"
})

// get all groups

client.groups.getGroups().then((groups) => {
    
   console.log(groups);
})

```