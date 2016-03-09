# react-native-sk-fakenavbar

##What is it

react-native-sk-fakenavbar is a fake navigation bar, simulate NavigatorNavigationBar component.

Depends on [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

##How to use it

1. install [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#install)

2. `npm install react-native-sk-fakenavbar@latest --save`

3. Write this in index.ios.js / index.android.js

```javascript
 'use strict';
 import React, {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';

 var PicsCart = require('react-native-sk-fakenavbar');

 var test = React.createClass({
   render: function(){
     return (
       <View style={styles.container}>
         <NavBar
            title={'test navbar'}
            leftButtonIcon={'edit'}
            onLeftButtonPress={() => this.onNavBarPress('left')}
            rightButtonIcon={require('./img/nav_more.png')}
            onRightButtonPress={() => this.onNavBarPress('right')}
            />
          <View style={styles.content}>
          </View>
       </View>
     )
   },
   onNavBarPress: function(btn){
     Alert.alert(
        'tip',
        'You press ' + btn + ' button',
        [
          {text:'ok'},
        ]
      );
   },
 });

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#F5FCFF',
   },
   content: {
     flex: 1,
   },
 });

 AppRegistry.registerComponent('test', () => test);

```
![](https://raw.githubusercontent.com/shigebeyond/react-native-sk-fakenavbar/master/demo.gif)

##Properties

Any [View property](http://facebook.github.io/react-native/docs/view.html) and the following:

| Prop | Description | Default |
|---|---|---|
|**`title`**|Text of title. |*None*|
|**`leftButtonIcon`**|Icon of left button. Accept 2 kind of value: 1 require('./img/nav_more.png') 2 Font-Awesome name in [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) |*None*|
|**`onLeftButtonPress`**|Callback when left button pressed. |*None*|
|**`rightButtonIcon`**|Icon of right button. Accept 2 kind of value: 1 require('./img/nav_more.png') 2 Font-Awesome name in [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) |*None*|
|**`onRightButtonPress`**|Callback when left button pressed. |*None*|
