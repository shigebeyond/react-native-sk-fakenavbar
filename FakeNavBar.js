'use strict';

var React = require('react-native');
var {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PropTypes,
} = React;

var com = require('./common');

// 显示模拟导航栏
var FakeNavBar = React.createClass({
  propTypes: {
    leftButtonTitle: PropTypes.any, // string or <Text> or <Icon>
    leftButtonIcon: Image.propTypes.source,
    onLeftButtonPress: PropTypes.func,
    rightButtonTitle: PropTypes.any, // string or <Text> or <Icon>
    rightButtonIcon: Image.propTypes.source,
    onRightButtonPress: PropTypes.func,
  },
  // 渲染左键按钮
  renderLeftButton: function(){
    var btn;
    var {leftButtonTitle, leftButtonIcon} = this.props
    if(leftButtonTitle){
      btn = (typeof leftButtonTitle === 'string') ? (<Text style={styles.title}>{leftButtonTitle}</Text>) : leftButtonTitle;
    }else if(leftButtonIcon){
      btn = (<Image source={this.props.leftButtonIcon}/>);
    }else{
      return (<View />);
    }

    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this.props.onLeftButtonPress}>
        {btn}
      </TouchableOpacity>
    )
  },
  // 渲染右键按钮
  renderRightButton: function(){
    var btn;
    var {rightButtonTitle, rightButtonIcon} = this.props
    if(rightButtonTitle){
      btn = (typeof rightButtonTitle === 'string') ? (<Text style={styles.title}>{rightButtonTitle}</Text>) : rightButtonTitle;
    }else if(rightButtonIcon){
      btn = (<Image source={this.props.rightButtonIcon}/>);
    }else{
      return (<View />);
    }

    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this.props.onRightButtonPress}>
        {btn}
      </TouchableOpacity>
    )
  },
  render: function() {
    return (
      <View style={styles.navigator}>
        {/* 导航栏左键按钮 */}
        {this.renderLeftButton()}
        {/* 标题 */}
        <Text style={[styles.title, {fontWeight: 'bold'}]}>
          {this.props.title}
        </Text>
        {/* 导航栏右键按钮 */}
        {this.renderRightButton()}
      </View>
    )
  },
});

var styles = StyleSheet.create({
  navigator: {
    backgroundColor: com.navBar.barTintColor,
    position: 'relative',
    top: 0,
    height: com.navBarHeight.TotalNavHeight, // 总高度
    paddingTop: com.navBarHeight.StatusBarHeight, // 状态栏高度
    paddingHorizontal: 12, //
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
});

module.exports = FakeNavBar;
