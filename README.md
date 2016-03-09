# react-native-sk-fakenavbar

##What is it

react-native-sk-fakenavbar is a fake navigation bar, simulate NavigatorNavigationBar component.

##How to use it

1. `npm install react-native-sk-fakenavbar@latest --save`

2. Write this in index.ios.js / index.android.js

```javascript

'use strict';
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';


var NavBar = require('react-native-sk-fakenavbar');
var Icon = require('react-native-vector-icons/FontAwesome');

var test = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <NavBar
           title={'test navbar'}

           leftButtonIcon={require('./img/nav_more.png')} // left button is image
           // leftButtonTitle={'new'} // left button is text
           // leftButtonTitle={(<Text style={styles.icon}>new</Text>)} // left button is <Text>
           // leftButtonTitle={(<Icon style={styles.icon} name='edit' />)} // left button is react-native-vector-icons's <Icon>
           onLeftButtonPress={() => this.onNavBarPress('left')}

           rightButtonIcon={require('./img/nav_more.png')} // right button is image
           // rightButtonTitle={'edit'} // right button is text
           // rightButtonTitle={(<Text style={styles.icon}>edit</Text>)} // right button is <Text>
           // rightButtonTitle={(<Icon style={styles.icon} name='edit' />)} // right button is react-native-vector-icons's <Icon>
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
  icon: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('test', () => test);

```
![](https://raw.githubusercontent.com/shigebeyond/react-native-sk-fakenavbar/master/demo.gif)

##Properties

| Prop | Description | Default |
|---|---|---|
|**`title`**|title. |*None*|
|**`leftButtonTitle`**|Title of left button. You can use string or <Text/> or <Icon /> in [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons). |*None*|
|**`leftButtonIcon`**|Icon of left button. |*None*|
|**`onLeftButtonPress`**|Callback when left button pressed. |*None*|
|**`rightButtonTitle`**|Title of right button. You can use string or <Text/> or <Icon /> in [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons). |*None*|
|**`rightButtonIcon`**|Icon of right button. |*None*|
|**`onRightButtonPress`**|Callback when left button pressed. |*None*|
