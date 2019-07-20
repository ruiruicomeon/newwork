import React from "react";
import { Row, Col, Divider } from "antd";
import { connect } from "react-redux";
import "./index.css";
import { Menu, Icon } from "antd";
class NavLeft extends React.Component {
  render() {
    const { SubMenu } = Menu;
    return (
      <div className="navcontent">
        <a href="#">
          <div className="navlogo">
            <img src="./assets/logo-ant.svg" alt="logo" />
            <h1>IMooc MS</h1>
          </div>
        </a>
        <Menu theme="dark">
          <Menu.Item key="1">首页</Menu.Item>

          <SubMenu
            key="sub2"
            title={
              <span>
                <span>UI</span>
              </span>
            }
          >
            <Menu.Item key="2">按钮</Menu.Item>
            <Menu.Item key="3">弹框</Menu.Item>
            <Menu.Item key="4">loding</Menu.Item>
            <Menu.Item key="5">通知提醒</Menu.Item>
            <Menu.Item key="6">全局Message</Menu.Item>
            <Menu.Item key="7">Tab页签</Menu.Item>
            <Menu.Item key="8">图片画廊</Menu.Item>
            <Menu.Item key="9">轮播图</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <span>表单</span>
              </span>
            }
          >
            <Menu.Item key="9">登陆</Menu.Item>
            <Menu.Item key="10">注册</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <span>表格</span>
              </span>
            }
          >
            <Menu.Item key="11">基础表格</Menu.Item>
            <Menu.Item key="12">高级表格</Menu.Item>
          </SubMenu>

          <Menu.Item key="10">富文本</Menu.Item>
          <Menu.Item key="11">城市管理</Menu.Item>

          <Menu.Item key="12">员工管理</Menu.Item>
          <Menu.Item key="13">车辆管理</Menu.Item>
          <SubMenu
            key="sub10"
            title={
              <span>
                <span>图标</span>
              </span>
            }
          >
            <Menu.Item key="14">柱形图</Menu.Item>
            <Menu.Item key="15">饼图</Menu.Item>
            <Menu.Item key="16">折线图</Menu.Item>
          </SubMenu>
          <Menu.Item key="17">权限管理</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default connect()(NavLeft);
