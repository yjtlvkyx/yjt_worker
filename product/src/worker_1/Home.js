import React,{Component} from 'react';
import Context from './utis/context';
import Son from './son'

class Comp extends Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        let {data}=this.props;
        return (
            <Context.Provider value={data}>
                <div>
                    <Son />
                </div>
            </Context.Provider>
        );
    }
}

export default Comp;