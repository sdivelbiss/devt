https://img.shields.io/npm/v/devt?style=for-the-badge

# devt

This tool allows you to install a custom dev-tools on your React application.

**devt** will be enabled by default when ```process.env.NODE_ENV``` is either 'dev', 'develop', or 'development'.

## Install

```bash
npm install --save-dev devt
```

## Setup

In your index file, import loadDevTools and wrap your initial render with the loadDevTools function. The second argument to the loadDevTools function is an array of feature flags. 

```bash
import  React from  'react';
import { render } from  'react-dom';
import { loadDevTools } from 'devt';

loadDevTools(() => {
	render (<App/>,document.querySelector('#app'))
}, ["catFeature"])
```

| parameters | type     | required | desc                                                                                                                                        |   |
|------------|----------|----------|---------------------------------------------------------------------------------------------------------------------------------------------|---|
| callback   | function | Yes      | render(, document.querySelector('#app'))                                                                                                    |   |
| features   | array    | Yes      | Array of feature flags ["catFeature", "coolFeature", ...]<br>Each item in the features array create a toggle to enable/disable the feature. |   |
|            |          |          |                                                                                                                                             |   |



![devt](/src/devt.png)



## Usage

```bash
import { featureToggles } from  'devt';

...
<div>
	{featureToggles.catFeature ? "show cats" : "hide cats"}
</div>
...
```

