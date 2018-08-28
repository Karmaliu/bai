import React from 'react';
import { Icon } from 'antd';
import styles from './SiderLeft.less';
const SiderLeft = () => {
    return (
        <div>
            <div className={styles.icon1}>
                <Icon className={styles.desktop} type="user" />
            </div>
            <div className={styles.icon2}>
                <Icon className={styles.desktop} type="desktop" />
            </div>
            <div className={styles.icon3}>
                <Icon className={styles.desktop} type="desktop" />
            </div>
            <div className={styles.icon4}>
                <Icon className={styles.desktop} type="plus" />
            </div>
        </div>
    )
}

export default SiderLeft;