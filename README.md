[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version: 0.0.3](https://img.shields.io/badge/version-0.0.3-brightgreen)](https://img.shields.io/badge/version-0.0.3-brightgreen)
[![Platform: IOS and Android](https://img.shields.io/badge/platform-ios%2Fandroid-lightgrey)](https://img.shields.io/badge/platform-ios%2Fandroid-lightgrey)

# react-native-full-loading
A simple React component that works for loading.

### Demo

[![Demo](https://github.com/ThompsonMss/react-native-full-loading/blob/master/demo.gif)](https://github.com/ThompsonMss/react-native-full-loading/blob/master/demo.gif)

---------

### Getting Started
1. First, You need to install It, just like You would do with any NPM package:
```
npm i react-native-full-loading
````

2.Then, You need to import the library component within your own component
``` javascript
import React from 'react'
import FullLoading from 'react-floating-action-button'
````

3.You can now start using the full-loading components!
``` javascript
export default function YourComponent(){

    const [visible, setVisible] = React.useState(false);

    if(...){
        setVisible(true);
    }else{
        setVisible(false);
    }

    return(
        ...
        <FullLoading visible={visible} />
    );
}
```

### Props

Parameters | Default Value | Values
:--------- | :------: | -------:
backgroundColor | rgba(0, 0, 0, 0.4) | Colors[rgb, hex, string]
colorIndicator | #FFF |Colors[rgb, hex, string]
sizeIndicator | large | [large, small]
colorText |  #FFF | Colors[rgb, hex, string]
text | Loading | String
visible | false | bool - Required