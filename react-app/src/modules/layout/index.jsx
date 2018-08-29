import React, { Component } from 'react'
import { Layout as ILayout, Menu, Icon, Tabs } from 'antd';
import { hashHistory } from 'react-router';
const { Header, Footer, Sider, Content } = ILayout;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
// import './index.less';
import { Link } from 'react-router';
import TourPage from '../pages/bookingReport';
import FormTestPage from '../pages/form/formTest';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [];
        this.state = {
            activeKey: '',
            panes,
        };
    }

    logOut = () => {
        localStorage.removeItem('userName');
        hashHistory.push('/login');
    }
    onChange = (activeKey) => {
        this.setState({ activeKey: activeKey });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = (url, tab, page) => {
        let flug = true;
        let key = '';
        for (let i = 0; i < this.state.panes.length; i++) {
            if (tab == this.state.panes[i].title) {
                flug = false;
                key = this.state.panes[i].key;
            }
        }
        if (!flug) {
            this.onChange(key);
        }
        hashHistory.push(url);
        if (url != this.props.location.pathname && flug) {
            const panes = this.state.panes;
            const activeKey = `newTab${this.newTabIndex++}`;
            panes.push({ title: tab, content: page, key: activeKey });
            this.setState({ panes, activeKey });
        }
    }
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes: panes, activeKey: activeKey });
    }
    render() {
        return (
            <ILayout style={{ overflowX: 'hidden' }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => { console.log(broken); }}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultOpenKeys={['laboratoryManagement', 'integratedManagementCenter']}>
                        <Menu.Item key="tour"><Link onClick={() => this.add('/tour', 'tourData', <TourPage />)}>tourData</Link></Menu.Item>
                        <Menu.Item key="form"><Link onClick={() => this.add('/form', 'FormTestPage', <FormTestPage />)}>FormTestPage</Link></Menu.Item>
                        <SubMenu key="laboratoryManagement" style={{ fontSize: '100px' }} title='实验室管理' >
                            <SubMenu key="technicalManagement" title='技术管理' >
                                <SubMenu key="operatePlan" title={<span style={{ color: 'yellow' }}>运行计划</span>} >
                                    <Menu.Item key="planView"><Link to={'/laboratoryManagement/technicalManagement/operatePlan/planView'}>计划查看</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="monitorTask" title={<span style={{ color: 'yellow' }}>监测任务单</span>} >
                                    <Menu.Item key="createMonitorTask"><Link to={'/laboratoryManagement/technicalManagement/monitorTask/createMonitorTask'}>生成任务单</Link></Menu.Item>
                                    <Menu.Item key="taskFlow"><Link to={'/laboratoryManagement/technicalManagement/monitorTask/taskFlow'}>任务单流程</Link></Menu.Item>
                                </SubMenu>
                                <Menu.Item key="taskReviewList"><Link to={'/laboratoryManagement/technicalManagement/taskReviewList'}><span style={{ color: 'yellow' }}>任务复核</span></Link></Menu.Item>
                                <SubMenu key="monitoringAndRiskControl" title={<span style={{ color: 'yellow' }}>现场监测与受控</span>} >
                                    <Menu.Item key="monitoringAndSampl"><Link to={'/laboratoryManagement/technicalManagement/monitoringAndRiskControl/monitoringAndSampl'}>现场监测与采样</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sampleManagement" title={<span style={{ color: 'yellow' }}>样品管理</span>}>
                                    <Menu.Item key="checkSample"><Link to={'/laboratoryManagement/technicalManagement/sampleManagement/checkSample'}>样品查看</Link></Menu.Item>
                                    <Menu.Item key="acceptanceAndRegistration"><Link to={'/laboratoryManagement/technicalManagement/sampleManagement/acceptanceAndRegistration'}>样品登记</Link></Menu.Item>
                                    <Menu.Item key="sampleKeeping"><Link to={'/laboratoryManagement/technicalManagement/sampleManagement/sampleKeeping'}>留样登记</Link></Menu.Item>
                                    <Menu.Item key="checkSample"><Link to={'/laboratoryManagement/technicalManagement/sampleManagement/checkSample'}>样品制备</Link></Menu.Item>
                                    <Menu.Item key="sampleSetting"><Link to={'/laboratoryManagement/technicalManagement/sampleManagement/sampleSetting'}>样品质控</Link></Menu.Item>
                                    <Menu.Item key="sampleReview"><Link to={'/laboratoryManagement/technicalManagement/sampleManagement/sampleReview'}>样品复查</Link></Menu.Item>
                                    <Menu.Item key="sampleDispense"><Link to={'/laboratoryManagement/technicalManagement/sampleManagement/sampleDispense'}>样品发放</Link></Menu.Item>
                                    <Menu.Item key="sampleCirculation"><Link to={'/laboratoryManagement/technicalManagement/sampleManagement/sampleCirculation'}>样品流转</Link></Menu.Item>
                                    <Menu.Item key="checkSample"><Link to={'/laboratoryManagement/technicalManagement/sampleManagement/checkSample'}>样品废弃</Link></Menu.Item>
                                    <Menu.Item key="checkSample"><Link to={'/laboratoryManagement/technicalManagement/sampleManagement/checkSample'}>标准样品</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="originalRecord" title={<span style={{ color: 'yellow' }}>原始记录</span>} >
                                    <Menu.Item key="originalRecordEnter"><Link to={'/laboratoryManagement/technicalManagement/originalRecord/originalRecordEnter'}>原始记录录入</Link></Menu.Item>
                                    <Menu.Item key="qualityControlTestResults"><Link to={'/laboratoryManagement/technicalManagement/originalRecord/qualityControlTestResults'}>质控考核结果录入</Link></Menu.Item>
                                    <Menu.Item key="originalRecordProcessList"><Link to={'/laboratoryManagement/technicalManagement/originalRecord/originalRecordProcessList'}>原始记录审核</Link></Menu.Item>
                                    <Menu.Item key="dynamicRawDataList"><Link to={'/laboratoryManagement/technicalManagement/originalRecord/dynamicRawDataList'}>动态原始数据</Link></Menu.Item>
                                    <SubMenu key="rawData" title={<span style={{ color: 'yellow' }}>动态原始数据</span>} >
                                        <Menu.Item key="qts"><Link to={'/laboratoryManagement/technicalManagement/originalRecord/rawData/qts'}>气田水原始数据</Link></Menu.Item>
                                        <Menu.Item key="dzqfx"><Link to={'/laboratoryManagement/technicalManagement/originalRecord/rawData/dzqfx'}>点站气原始数据</Link></Menu.Item>
                                        <Menu.Item key="qfx"><Link to={'/laboratoryManagement/technicalManagement/originalRecord/rawData/qfx'}>单井气原始数据</Link></Menu.Item>
                                    </SubMenu>
                                    <Menu.Item key="qualityControlResultsDerivedList"><Link to={'/laboratoryManagement/technicalManagement/originalRecord/qualityControlResultsDerivedList'}>质控结果导出</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="monitorReport" title={<span style={{ color: 'yellow' }}>监测报告</span>} >
                                    <Menu.Item key="dynamicReportList"><Link to={'/laboratoryManagement/technicalManagement/monitorReport/dynamicReportList'}>报告汇编与发布</Link></Menu.Item>
                                    <Menu.Item key="sfxReport"><Link to={'/laboratoryManagement/technicalManagement/monitorReport/sfxReport'}>水分析动态报告</Link></Menu.Item>
                                    <Menu.Item key="qfxReport"><Link to={'/laboratoryManagement/technicalManagement/monitorReport/qfxReport'}>气分析动态报告</Link></Menu.Item>
                                    <Menu.Item key="dzqfxReport"><Link to={'/laboratoryManagement/technicalManagement/monitorReport/dzqfxReport'}>点站气分析报告</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="personDetail" title={<span style={{ color: 'yellow' }}>人员信息</span>} >
                                    <Menu.Item key="personInfo"><Link to={'/laboratoryManagement/technicalManagement/personDetail/personInfo'}><span style={{ color: 'yellow' }}>人员管理</span></Link></Menu.Item>
                                    <Menu.Item key="roleInfo"><Link to={'/laboratoryManagement/technicalManagement/personDetail/roleInfo'}><span style={{ color: 'yellow' }}>角色管理</span></Link></Menu.Item>
                                </SubMenu>
                                <Menu.Item key="monitorMethodManagement"><Link to={'/laboratoryManagement/technicalManagement/monitorMethodManagement'}><span style={{ color: 'yellow' }}>监测方法</span></Link></Menu.Item>
                                <SubMenu key="basicData" title={<span style={{ color: 'yellow' }}>基础数据</span>} >
                                    <Menu.Item key="gasFieldOrStructuralMaintenance"><Link to={'/laboratoryManagement/technicalManagement/basicData/gasFieldOrStructuralMaintenance'}>气田或构造维护</Link></Menu.Item>
                                    <Menu.Item key="horizons"><Link to={'/laboratoryManagement/technicalManagement/basicData/horizons'}>层位</Link></Menu.Item>
                                    <Menu.Item key="wellSituation"><Link to={'/laboratoryManagement/technicalManagement/basicData/wellSituation'}>单井情况</Link></Menu.Item>
                                    <Menu.Item key="sampleLocationAndCondition"><Link to={'/laboratoryManagement/technicalManagement/basicData/sampleLocationAndCondition'}>取样部位和条件</Link></Menu.Item>
                                    <Menu.Item key="operateArea"><Link to={'/laboratoryManagement/technicalManagement/basicData/operateArea'}>作业区(营销部)</Link></Menu.Item>
                                    <Menu.Item key="pointStation"><Link to={'/laboratoryManagement/technicalManagement/basicData/pointStation'}>点站</Link></Menu.Item>
                                    <Menu.Item key="physicalProp"><Link to={'/laboratoryManagement/technicalManagement/basicData/physicalProp'}>物理性质</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="dynamicManagement" title={<span style={{ color: 'yellow' }}>设备仪器</span>} >
                                    <Menu.Item key="yqtz"><Link to={'/laboratoryManagement/technicalManagement/dynamicManagement/yqtz'}>仪器台账</Link></Menu.Item>
                                    <Menu.Item key="yqbx"><Link to={'/laboratoryManagement/technicalManagement/dynamicManagement/yqbx'}>仪器报修</Link></Menu.Item>
                                    <Menu.Item key="yqty"><Link to={'/laboratoryManagement/technicalManagement/dynamicManagement/yqty'}>仪器停用</Link></Menu.Item>
                                    <Menu.Item key="yqqy"><Link to={'/laboratoryManagement/technicalManagement/dynamicManagement/yqqy'}>仪器启用</Link></Menu.Item>
                                    <Menu.Item key="yqjj"><Link to={'/laboratoryManagement/technicalManagement/dynamicManagement/yqjj'}>仪器降级</Link></Menu.Item>
                                    <Menu.Item key="yqbg"><Link to={'/laboratoryManagement/technicalManagement/dynamicManagement/yqbg'}>仪器变更</Link></Menu.Item>
                                    <Menu.Item key="qjhc"><Link to={'/laboratoryManagement/technicalManagement/dynamicManagement/qjhc'}>期间核查</Link></Menu.Item>
                                    <Menu.Item key="sbyxrz"><Link to={'/laboratoryManagement/technicalManagement/dynamicManagement/sbyxrz'}>设备运行日志</Link></Menu.Item>
                                    <Menu.Item key="jygh"><Link to={'/laboratoryManagement/technicalManagement/dynamicManagement/jygh'}>借用归还</Link></Menu.Item>
                                    <Menu.Item key="ljtz"><Link to={'/laboratoryManagement/technicalManagement/dynamicManagement/ljtz'}>量具台账</Link></Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="QC" title='质量控制' >
                                <Menu.Item key="operationCardApproval"><Link to={'/laboratoryManagement/QC/operationCardApproval'}><span style={{ color: 'yellow' }}>操作卡审批</span></Link></Menu.Item>
                                <Menu.Item key="sampleAnalysisQualityControl"><Link to={'/laboratoryManagement/QC/sampleAnalysisQualityControl'}>样品分析质控</Link></Menu.Item>
                                <Menu.Item key="originalRecordQualityControl"><Link to={'/laboratoryManagement/QC/originalRecordQualityControl'}>原始记录质控</Link></Menu.Item>
                                <Menu.Item key="monitorReportQualityControl"><Link to={'/laboratoryManagement/QC/monitorReportQualityControl'}>监测报告质控</Link></Menu.Item>
                                <Menu.Item key="qualityControlInformationStatistics"><Link to={'/laboratoryManagement/QC/qualityControlInformationStatistics'}>质控信息统计</Link></Menu.Item>
                                <Menu.Item key="personnelCertification"><Link to={'/laboratoryManagement/QC/personnelCertification'}><span style={{ color: 'yellow' }}>人员持证情况</span></Link></Menu.Item>
                                <Menu.Item key="list"><Link to={'/laboratoryManagement/QC/instrumentEquipment'}><span style={{ color: 'yellow' }}>仪器设备台账</span></Link></Menu.Item>
                                <SubMenu key="sampleManagement" title={<span style={{ color: 'yellow' }}>标准样品管理</span>} >
                                    <Menu.Item key="sampleAccount"><Link to={'/laboratoryManagement/QC/sampleManagement/sampleAccount'}>标准样品台帐</Link></Menu.Item>
                                    <Menu.Item key="resultsRegist"><Link to={'/laboratoryManagement/QC/sampleManagement/resultsRegist'}>结果登记</Link></Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </SubMenu>

                        <SubMenu key="integratedManagementCenter" title='中心综合管理' >
                            <SubMenu key="administration" title='行政办公' >
                                <SubMenu key="fileManagement" title='文件管理' >
                                </SubMenu>
                                <SubMenu key="closed-loopProblem" title={<span style={{ color: 'yellow' }}>问题闭环</span>} >
                                    <Menu.Item key="reportProblems"><Link to={'/integratedManagementCenter/administration/closed-loopProblem/reportProblems'}>问题上报</Link></Menu.Item>
                                    <Menu.Item key="problemBrowse"><Link to={'/integratedManagementCenter/administration/closed-loopProblem/problemBrowse'}>问题浏览</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="SMSPlatform" title='短信平台' >
                                </SubMenu>
                                <Menu.Item key="supplierDirectoryApp"><Link to={'/integratedManagementCenter/administration/supplierDirectoryApp'}><span style={{ color: 'yellow' }}>供应商管理</span></Link></Menu.Item>
                                <SubMenu key="purchaseManagement" title={<span style={{ color: 'yellow' }}>物品管理</span>} >
                                    <Menu.Item key="demandPlanningAndStorage"><Link to={'/integratedManagementCenter/administration/purchaseManagement/demandPlanningAndStorage'}>需求计划与入库</Link></Menu.Item>
                                    <Menu.Item key="materialCollarApplication"><Link to={'/integratedManagementCenter/administration/purchaseManagement/materialCollarApplication'}>材料领用申请</Link></Menu.Item>
                                    <Menu.Item key="materialDistribution"><Link to={'/integratedManagementCenter/administration/purchaseManagement/materialDistribution'}>材料发放</Link></Menu.Item>
                                    <Menu.Item key="materialDetails"><Link to={'/integratedManagementCenter/administration/purchaseManagement/materialDetails'}>材料明细</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="projectManagement" title='项目管理' >
                                </SubMenu>
                                <SubMenu key="controlledStatements" title='受控报表' >
                                </SubMenu>

                                <SubMenu key="dangerousLifeCycle" title={<span style={{ color: 'yellow' }}>危化品管理</span>} >
                                    <Menu.Item key="requirementPlan"><Link to={'/integratedManagementCenter/administration/dangerousLifeCycle/requirementPlan'}>需求计划</Link></Menu.Item>
                                    <Menu.Item key="storageAcceptance"><Link to={'/integratedManagementCenter/administration/dangerousLifeCycle/storageAcceptance'}>入库验收</Link></Menu.Item>
                                    <Menu.Item key="InventoryManagement"><Link to={'/integratedManagementCenter/administration/dangerousLifeCycle/InventoryManagement'}>库存管理</Link></Menu.Item>
                                    <Menu.Item key="requisitionApplication"><Link to={'/integratedManagementCenter/administration/dangerousLifeCycle/requisitionApplication'}>领用申请</Link></Menu.Item>
                                    <Menu.Item key="outboundRecords"><Link to={'/integratedManagementCenter/administration/dangerousLifeCycle/outboundRecords'}>出库记录</Link></Menu.Item>
                                    <Menu.Item key="useRecord"><Link to={'/integratedManagementCenter/administration/dangerousLifeCycle/useRecord'}>使用记录</Link></Menu.Item>
                                    <Menu.Item key="discardTable"><Link to={'/integratedManagementCenter/administration/dangerousLifeCycle/discardTable'}>废弃台帐</Link></Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="HSE" title='HSE' >
                                <SubMenu key="HSEActivitySchedule" title='HSE活动安排' >
                                </SubMenu>
                                <SubMenu key="vehicleManagement" title='车辆管理' >
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="partyWork" title='党务工作' >
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </Sider>
                <ILayout style={{ background: '#FFFFFF', marginLeft: 250 }}>
                    <Header style={{ background: '#FFFFFF', padding: 0 }} >
                        <img src='src/assets/images/login.png' />
                        <div className='rightWraper' style={{ float: 'right' }}>
                            <Menu mode="horizontal" className="menu">
                                <SubMenu style={{
                                    float: 'right',
                                }} title={< span > <Icon type="user" />欢迎您{localStorage.userName}！</span>}
                                >
                                    <Menu.Item key="logout">
                                        <a onClick={this.logOut}>注销11</a>
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                    </Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 20, minHeight: 360 }}>
                            <Tabs
                                hideAdd
                                onChange={this.onChange}
                                activeKey={this.state.activeKey}
                                type="editable-card"
                                onEdit={this.onEdit}
                            >
                                {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                            </Tabs>
                        </div>
                        {/*<div style={{ padding: 20, minHeight: 360, width: '100%' }}>
                            {this.props.children}
                        </div>*/}
                    </Content>
                </ILayout>
            </ILayout >



        )
    }
}

export default Layout