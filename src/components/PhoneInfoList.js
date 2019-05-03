import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';


class PhoneInfoList extends Component{


    static defaultProps = {
        data : [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined')
    }

    render(){
        const { data, onRemove, onUpdate } = this.props;
       
        //  data 라는 배열을 가져와서 map 을 통하여 JSX 로 변환
        const list = data.map(
            info => ( <PhoneInfo key={info.id} info={info}  onRemove={onRemove} onUpdate={onUpdate} /> )
            // 여기서 key 는 리액트에서 배열을 렌더링을 할 때 꼭 필요한 값 
        );

        return(
            <div>
                { list }
            </div>
        )
    }
}

export default PhoneInfoList;