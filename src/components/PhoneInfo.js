import React, { Component } from 'react';

class PhoneInfo extends Component{


    static defaultProps ={
        info:{
            name : '이름',
            phone : '010-3333-1111',
            id : 0
        }
        // 디폴트 값을 설정해주어 실수로 info 값을 전달해주지 못했을 때 컴포넌트가 크래쉬되는 현상을 방지할 수 있다. 
    }

    render(){
        const style ={
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { name, phone, id } = this.props.info; 
        // info 라는 객체를 props 로 받아와서 렌더링 실행. 
        return(
            <div style={style}>
                <div><b>{ name } </b></div>
                <p>{ phone }</p>
            </div>
        )

    }

}


export default PhoneInfo;