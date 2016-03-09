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

var com = require('./common'),
    Icon = require('react-native-vector-icons/FontAwesome');

// 在参与页+报告页+消息页, 显示模拟导航栏
var FakeNavBar = React.createClass({
  propTypes: {
    navigator: PropTypes.object.isRequired,
    leftButtonIcon: PropTypes.any,
    onLeftButtonPress: PropTypes.func,
    rightButtonIcon: PropTypes.any,
    onRightButtonPress: PropTypes.func,
  },
  // 渲染按钮图标
  renderIcon: function(icon){
    // 如果是字符串，则使用字体图标
    if(typeof icon === 'string'){
      return (<Icon style={styles.icon} name={icon} />)
    }
    // 否则，使用普通图片
    return (<Image source={icon}/>)
  },
  // 渲染左键按钮
  renderLeftButton: function(){
    if(!this.props.leftButtonIcon)
      return (<View />)

    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this.props.onLeftButtonPress}>
        {this.renderIcon(this.props.leftButtonIcon)}
      </TouchableOpacity>
    )
  },
  // 渲染右键按钮
  renderRightButton: function(){
    if(!this.props.rightButtonIcon)
      return (<View />)

    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this.props.onRightButtonPress}>
        {this.renderIcon(this.props.rightButtonIcon)}
      </TouchableOpacity>
    )
  },
  render: function() {
    return (
      <View style={styles.navigator}>
        {/* 导航栏左键按钮 */}
        {this.renderLeftButton()}
        {/* 标题 */}
        <Text style={styles.title}>
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
    fontWeight: 'bold',
  },
  icon: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
  }
});

module.exports = FakeNavBar;
