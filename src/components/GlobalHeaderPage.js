import React, { Component } from "react";
import { Icon, Avatar, Menu, Dropdown } from 'antd';
import styles from './GlobalHeaderPage.less';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">个人信息</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">帮助中心</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">退出</a>
        </Menu.Item>
    </Menu>
);

export default class GlobalHeaderPage extends Component {
    render() {
        const colseMnu = "menu-unfold";
        const openMenu = "menu-fold";
        const { toggle, collapsed } = this.props;
        return (
            <div className={styles.header_viwe}>
                <div className={styles.trigger_div} onClick={() => toggle()}>
                    <Icon className={styles.trigger} type={collapsed ? openMenu : colseMnu} />
                </div>
                <Dropdown className={styles.trigger_div} overlay={menu} placement="bottomLeft">
                     <div className={styles.header_avatar}>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        da rocha
                    </div>
                </Dropdown>
            </div>
        )
    }
}





