import React, { Component } from 'react';
import { List, Divider, Icon, Badge } from 'antd';
import { listItem } from '../mock';
import styles from './SiderRight.less';

class SiderRight extends Component {
    state = {
        active: 'Overview'
    }
    handleMenu(menutitle) {
        this.setState({
            active: menutitle
        })
    }
    render() {
        const activeMenu = { color: "rgba(255, 255, 255, 1.0)" };
        const { active } = this.state;
        const MenuList = listItem.map(child => {
            return (
                <List
                    className={styles.siderlist}
                    key={child.menuName}
                    header={
                        <div className={styles.sider_header}>
                            <span>{child.menuName}</span>
                            <Icon className={styles.icon_setting} type="setting" />
                        </div>}
                    footer={<Divider className={styles.sider_footer} />}
                    itemLayout="horizontal"
                    dataSource={child.children}
                    split={false}
                    renderItem={item => (
                        <div>
                            <div className={styles.spot_left}>
                                <div hidden={active === item.title ? false : true} className={styles.spot_listouter}>
                                    <div className={styles.spot_list}></div>
                                </div>
                            </div>
                            <List.Item className={styles.sider_item} onClick={() => this.handleMenu(item.title)}>
                                {/* <div> */}
                                <a to="#" style={active === item.title ? activeMenu : null}>
                                    <Icon style={{paddingRight:10}} type={item.icon} />{item.title}
                                    <Badge
                                        count={item.number > 0 ? item.number : null}
                                        style={{
                                            background: "rgb(35, 153, 241)",
                                            fontWeight: 900,
                                            fontSize: 15,
                                            borderColor: "rgb(35, 153, 241)"
                                        }}
                                        className={styles.sider_icon}
                                    />
                                </a>
                                {/* <Icon type={ite} /> */}
                                {/* </div> */}
                            </List.Item>
                        </div >
                    )}
                />
            )
        })

        return (
            <div className={styles.sider_view} > {MenuList}</div>
        )
    }
}

export default SiderRight;


