import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import SiderLeft from '../components/SiderLeft';
import SiderRight from '../components/SiderRight';
import GlobalHeaderPage from '../components/GlobalHeaderPage';
import SiderList from '../components/SiderList';
import SiderText from '../components/SiderText';
const { Header, Sider, Content } = Layout;
class IndexPage extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  handtoggle = (broken) => {
    this.setState({
      collapsed: broken ? true : false,
    })
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          style={{ background: 'rgb(29, 37, 49)' }}
          width={100} >
          <SiderLeft />
        </Sider>
        <Sider
          width={250}
          breakpoint="xxl"
          style={{ background: 'rgb(34, 44, 60)' }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          collapsedWidth={0}
          onBreakpoint={(broken) => this.handtoggle(broken)}
        >
          <SiderRight />
        </Sider>
        <Layout style={{ minWidth: 375 }}>
          <Header style={{ background: "#fff", padding: 0, minHeight: '7vh', border: '1px solid rgb(230,233,236)' }}>
            <GlobalHeaderPage
              toggle={this.toggle}
              collapsed={collapsed}
            />
          </Header>
          <Content style={{ margin: '0' }}>
            <Layout style={{ background: '#fff', minWidth: 1295 }}>
              <div>
                <SiderList />
                <SiderText style={{ float: 'right', minWidth: 300, background: 'red' }} />
              </div>

            </Layout>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);



