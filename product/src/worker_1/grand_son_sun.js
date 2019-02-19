import React,{Component} from 'react';
import connect from './connect'


class GrandSonSun extends Component{
    render() {
        let {data}=this.props;
        return (
            <div>
                <p style={{color:'red'}}>{data.name}</p>
                <p style={{color:'red'}}>{data.content}</p>
            </div>
        );
    }
}

export default connect((obj)=>{
    return obj.list_3
})(GrandSonSun)