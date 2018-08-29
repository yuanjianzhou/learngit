import * as React from 'react';
import axios from 'axios';

class City extends React.Component<any, any>{

    constructor(props) {
        super(props);
        this.url = window.location.href.substring(0, window.location.href.indexOf('build'));
    }
    state = {
        id: 0,
        cityName: '',
        provinceId: '',
        description: ''
    }
    private url: string = '';
    componentWillUpdate() {
        axios.get(this.url + "api/findCityById?id=" + this.props.location.query.id)
            .then((response) => {
                this.setState({
                    id: response.data.id,
                    cityName: response.data.cityName,
                    provinceId: response.data.provinceId,
                    description: response.data.description
                })
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                省份编号：{this.state.provinceId}<br />
                城&nbsp;&nbsp;市&nbsp;&nbsp;名：{this.state.cityName}<br />
                描&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;述：{this.state.description}
            </div>
        )
    }

}
export default City