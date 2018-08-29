import * as React from 'react';
import {Row,Col} from 'antd';
import { hashHistory } from 'react-router';
import axios from 'axios';

class CenterChina extends React.Component<any,any>{

    constructor(props){
        super(props);
     this.url = window.location.href.substring(0, window.location.href.indexOf('build'));
    }
    state = {
        dataSource:[{id:0,cityName:''}]
    }
    private url: string = '';
    componentWillUpdate() {
        axios.get(this.url + "api/getCitysByLocated?located="+this.props.params.located)
            .then((response) => {
                let dataSource: any[] = [];
                for (let i = 0; i < response.data.length; i++) {
                    dataSource.push({id:response.data[i].id,cityName:response.data[i].cityName})
                }
                this.setState({
                    dataSource: dataSource
                })
            }).catch(error => {
                console.log(error);
            });
    }

    changeRoute=(id:number)=>{
        hashHistory.push({
            pathname: 'city',
            query: {
                id: id,
            }
        })
    }

    render(){
        return(
            <div>
                <Row>
                    {this.state.dataSource.map(tag=>
				        <Col span={12}><a style={{cursor:'pointer'}} onClick={()=>this.changeRoute(tag.id)}>{tag.cityName}</a></Col>
                    )}
				</Row>
            </div>
        )
    }

}
export default CenterChina