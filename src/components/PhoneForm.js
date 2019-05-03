import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
      // onChange 이벤트가 발생하면, e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값을 가져온다 . 
      //computed property name 는 []로 감싸 해당 value 값을 변수 이름으로 사용할 수 있게 해준다. 
    });
  }

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }


  render() {
    return (
    <form onSubmit={this.handleSubmit} >
    {/* onSubmit으로 바인딩 해줌 */}
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <div>
          <p>Name :  {this.state.name} </p>
          <p>Phone : {this.state.phone} </p>
        </div>
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;