import React, { Component } from 'react';
import styles from './SiderList.less';
import { Input, List, message, Avatar, Spin, Badge } from 'antd';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
const Search = Input.Search;

const fakeDataUrl = 'https://randomuser.me/api/?results=15&inc=name,gender,email,nat&noinfo';

class InfiniteListExample extends React.Component {
    state = {
        data: [],
        loading: false,
        hasMore: true,
        acitve: 0,
    }
    getData = (callback) => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: (res) => {
                callback(res);
            },
        });
    }

    componentDidMount() {
        this.getData((res) => {
            this.setState({
                data: res.results,
            });
        });
    }

    handleInfiniteOnLoad = () => {
        let data = this.state.data;
        this.setState({
            loading: true,
        });
        if (data.length > 50) {
            message.warning('Infinite List loaded all');
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
        this.getData((res) => {
            data = data.concat(res.results);
            this.setState({
                data,
                loading: false,
            });
        });
    }
    activeIndex(activeIndex) {
        this.setState({
            acitve: activeIndex,
        })
    }
    render() {
        let id = 0;
        const { acitve } = this.state;
        return (
            <div className={styles.infinite_container}>
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.handleInfiniteOnLoad}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                >
                    <List
                        dataSource={this.state.data}
                        renderItem={item => {
                            item = { ...item, id: id++ }
                            return (
                                <div>
                                    <a className={acitve === item.id ? styles.list_active : ''}></a>
                                    <a to="#"  onClick={() => this.activeIndex(item.id)}>
                                        <List.Item
                                            className={styles.List_Item}
                                            key={item.id}>
                                            <List.Item.Meta
                                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />}
                                                title={<a style={{ color: acitve === item.id ? " rgb(35, 153, 241)" : "#000" }} href="https://ant.design">{item.name.last}</a>}
                                                description={item.email}
                                            />
                                            <div style={{ textAlign: 'center' }}>
                                                <p style={{ color: '#000' }}>3m</p>
                                                {item.id % 4 === 0 ? <Badge count={5} style={{ backgroundColor: '#52c41a' }} /> : ''}
                                            </div>
                                        </List.Item>
                                    </a>

                                </div>

                            )
                        }}
                    >
                        {this.state.loading && this.state.hasMore && (
                            <div className={styles.loading_container}>
                                <Spin />
                            </div>
                        )}
                    </List>
                </InfiniteScroll>
            </div >
        );
    }
}


export default class SiderList extends Component {
    render() {
        return (
            <div className={styles.sider_view}>
                <div className={styles.sider_search}>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 338 }}
                    />
                </div>
                <InfiniteListExample />
            </div>
        )
    }
}



