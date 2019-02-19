import React,{Component} from 'react';
import connect from './connect'
import GrandSonSun from './grand_son_sun'
class GrandSon extends Component{
    render() {
        let {data}=this.props;
        return (
            <div>
                这是我设定的孙子元素
                <p>{data.name}</p>
                <p>{data.content}</p>
                <GrandSonSun />
            </div>
        );
    }
}

let Gson=connect((obj)=>{
    let data=obj.list_1
    return data;
})(GrandSon)

export default Gson;