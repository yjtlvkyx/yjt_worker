import React,{Component} from 'react';
import Context from './utis/context';

function connect(cbk){
    //这里要接收数据否则没法子，应该使用context
    return (Compos)=>{
        return class extends Component{
            render() {
                return <div>
                    <Context.Consumer>
                        {
                            (obj)=>{
                                let datas=cbk(obj)
                                return <Compos data={datas}/>
                            }
                        }
                    </Context.Consumer>
                </div>
                // return <Compos data={datas}/>
            }
        }
    }
}

export default connect;