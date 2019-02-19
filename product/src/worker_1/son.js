import React,{Component} from 'react';
// import connect from './connect'
import GrandSon from './grand_son'
class Son extends Component{
    render() {
        return (
            <div>
                这是我设定的子元素
                <GrandSon />
            </div>
        );
    }
}

export default Son;