import React, { Component } from "react";
import { Table, Button, DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

class BookingReportPage extends Component {

onChange=(dates, dateStrings)=> {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

    render() {
        const columns = [
            {
                title: <div style={{ textAlign: 'center' }}>Codes</div>,
                children: [{
                    title: 'PID',
                    dataIndex: 'pid',
                    key: 'pid',
                    sorter: (a, b) => a.pid - b.pid
                }, {
                    title: 'VID',
                    dataIndex: 'vid',
                    key: 'vid',
                    sorter: (a, b) => a.vid.length - b.vid.length
                }]
            }, {
                title: 'Products',
                dataIndex: 'products',
                width: '100px',
                key: 'products',
                sorter: (a, b) => a.pid - b.pid,
                render: (text, record, index) => {
                    const obj = {
                        children: <div className='products'><a href={record.productNameUrl}>{text}</a></div>
                    }
                    if (record.isCombination == 1) {
                        obj.children = <div className='products'><a href={record.productNameUrl}><Icon type="appstore" />{text}</a></div>
                    }
                    return obj;
                }
            }, {
                title: 'Total',
                className: 'column-total',
                dataIndex: 'total',
                key: 'total',
                sorter: (a, b) => a.total - b.total
            }, {
                title: 'AS',
                className: 'column-total',
                dataIndex: 'as',
                key: 'as',
                sorter: (a, b) => a.as - b.as,
                render: (text, record, index) => {
                    const obj = {
                        children: <a href={record.allSurplusUrl}>{text}</a>
                    }
                    return obj;
                }
            }, {
                title: 'TS',
                dataIndex: 'ts',
                key: 'ts',
                sorter: (a, b) => a.ts - b.ts,
                render: (text, record, index) => {
                    const obj = {
                        children: <a href={record.totalSalesUrl}>{text}</a>
                    }
                    return obj;
                }
            }, {
                title: 'DS',
                dataIndex: 'ds',
                key: 'ds',
                sorter: (a, b) => a.ds - b.ds,
                render: (text, record, index) => {
                    const obj = {
                        children: <a href={record.directSalesUrl}>{text}</a>
                    }
                    return obj;
                }
            }, {
                title: 'CS',
                dataIndex: 'cs',
                key: 'cs',
                sorter: (a, b) => a.cs - b.cs
            }, {
                title: 'OR',
                dataIndex: 'or',
                key: 'or',
                sorter: (a, b) => a.or - b.or
            }, {
                title: 'APPS',
                dataIndex: 'apps',
                key: 'apps',
                sorter: (a, b) => a.apps - b.apps
            }, {
                title: 'AVS',
                dataIndex: 'avs',
                key: 'avs',
                sorter: (a, b) => a.avs - b.avs
            }, {
                title: <div style={{ textAlign: 'center' }}>Dispatching</div>,
                children: [{
                    title: 'Company',
                    dataIndex: 'company',
                    key: 'company'
                }, {
                    title: 'Driver',
                    dataIndex: 'driver',
                    key: 'driver'
                }, {
                    title: 'Vehicle',
                    dataIndex: 'vehicle',
                    key: 'vehicle'
                }]
            }, {
                title: 'Guide',
                dataIndex: 'guide',
                key: 'guide'
            }, {
                title: 'Action',
                dataIndex: 'action',
                key: 'action'
            }
        ];

        const data = [
            { key: 0, pid: '66005', vid: 'qawq', products: 'asda76sd', total: '34', as: '4556', ds: '', ts: '', cs: '', or: '', apps: '', avs: '', company: '', driver: '', vehicle: '', guide: '', action: '' },
            { key: 1, pid: '61205', vid: 'qaewqwq', products: 'as56dasd', total: '1', as: '554', ds: '', ts: '', cs: '', or: '', apps: '', avs: '', company: '', driver: '', vehicle: '', guide: '', action: '' },
            { key: 2, pid: '63455', vid: 'qarewq', products: 'asd7asd', total: '33', as: '4653', ds: '', ts: '', cs: '', or: '', apps: '', avs: '', company: '', driver: '', vehicle: '', guide: '', action: '' },
            { key: 3, pid: '63445', vid: 'qawqweq', products: 'astdasd', total: '345', as: '0', ds: '', ts: '', cs: '', or: '', apps: '', avs: '', company: '', driver: '', vehicle: '', guide: '', action: '' },
            { key: 4, pid: '64425', vid: 'qadswq', products: 'asderasd', total: '3455', as: '114', ds: '', ts: '', cs: '', or: '', apps: '', avs: '', company: '', driver: '', vehicle: '', guide: '', action: '' },
            { key: 5, pid: '655', vid: 'qaawq', products: 'asdasetd', total: '777', as: '245', ds: '', ts: '', cs: '', or: '', apps: '', avs: '', company: '', driver: '', vehicle: '', guide: '', action: '' },
            { key: 6, pid: '6705', vid: 'qassdwq', products: 'asdasfdfd', total: '0', as: '185', ds: '', ts: '', cs: '', or: '', apps: '', avs: '', company: '', driver: '', vehicle: '', guide: '', action: '' }
        ]
        return (
            <div>
                <Button type='danger'>danger</Button>
                <RangePicker
                    ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                    showTime
                    format="YYYY/MM/DD HH:mm:ss"
                    onChange={this.onChange}
                />
                <Table columns={columns} dataSource={data} bordered />
            </div>
        )
    }
}

export default BookingReportPage