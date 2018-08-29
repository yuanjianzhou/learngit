import * as React from 'react'
import { Layout as ILayout, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = ILayout;
const SubMenu = Menu.SubMenu;
// import './index.less';
import { Link } from 'react-router';
import axios from 'axios';


class Layout extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    logout = () => {
        axios.get(window.location.href.substring(0, window.location.href.indexOf('build')) + 'lm/user/logout')
            .then((response) => {
                this.setState({
                    userName: ''
                })
                window.location.href = window.location.href.substring(0, window.location.href.indexOf('build')) + 'login.html';
            }).catch(error => {
                console.log(error);
            })
        // hashHistory.push('/login')
    }
    render() {
        return (
            <ILayout style={{ overflowX: 'hidden' }}>
                <Sider  breakpoint="lg" collapsedWidth="0">
                    <div className="logo" />
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="eastChina"><Link to={'/locatedChina/华东'}><span style={{ color: 'yellow' }}>华东</span></Link></Menu.Item>
                        <Menu.Item key="northChina"><Link to={'/locatedChina/华北'}><span style={{ color: 'yellow' }}>华北</span></Link></Menu.Item>
                        <Menu.Item key="centralChina"><Link to={'/locatedChina/华中'}><span style={{ color: 'yellow' }}>华中</span></Link></Menu.Item>
                        <Menu.Item key="southChina"><Link to={'/locatedChina/华南'}><span style={{ color: 'yellow' }}>华南</span></Link></Menu.Item>
                        <Menu.Item key="northEastPartChina"><Link to={'/locatedChina/东北部'}><span style={{ color: 'yellow' }}>东北部</span></Link></Menu.Item>
                        <Menu.Item key="northEastChina"><Link to={'/locatedChina/东北'}><span style={{ color: 'yellow' }}>东北</span></Link></Menu.Item>
                        <Menu.Item key="southWestChina"><Link to={'/locatedChina/西南'}><span style={{ color: 'yellow' }}>西南</span></Link></Menu.Item>
                        <Menu.Item key="northWestChina"><Link to={'/locatedChina/西北'}><span style={{ color: 'yellow' }}>西北</span></Link></Menu.Item>
                    </Menu>
                </Sider>
                <ILayout style={{ background: '#FFFFFF' }}>
                    <Header style={{ background: '#FFFFFF', padding: 0 }} >
                        <div className='rightWraper' style={{ float: 'right' }}>
                            <Menu mode="horizontal" className="menu">
                                <SubMenu style={{
                                    float: 'right',
                                }} title={< span > <Icon type="user" />欢迎您！</span>}
                                >
                                    <Menu.Item key="logout">
                                        <a onClick={this.logout}>注销</a>
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                    </Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial', background: "url('src/assets/background.jpg') no-repeat" }}>
                        <div style={{ padding: 20, minHeight: 360, width: '100%' }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>

                    </Footer>
                </ILayout>
            </ILayout >



        )
    }
}

export default Layout