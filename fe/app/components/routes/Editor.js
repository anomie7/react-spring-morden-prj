import React from 'react';
import { Header, Container, Segment, Divider, Form } from "semantic-ui-react";

const options = [
    {key: '1', text: '맛집', value: '맛집'},
    {key: '2', text: '리뷰', value: '리뷰'},
    {key: '3', text: '프로그래밍', value: '프로그래밍'},
]

class Editor extends React.Component{
    constructor(props){
        super(props);        
        this.state = {
            subject: '',
            writer: 'host',
            createDate: '',
            content: '',
            category: ''
        }
    }

    handleChange(e, data){
        var nextState = {};
        nextState[data.name] = data.value;
        this.setState(nextState);
        console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('비동기적인 처리일까요?1');
        this.props.InsertPost(this.state, this.props.history);
        console.log('비동기적인 처리일까요?2');
        console.log('비동기적인 처리일까요?3');
    }

    render(){
        return (
        <Container className="home-container">
            <Segment className="home-segment">
                <Header as="h2" content="에디터"/>
                <Divider section>
                </Divider>
                <Form>
                    <Form.Input label='제목' name="subject" value={this.props.name} type='text' onChange={this.handleChange.bind(this)}/>
                    <input type="hidden" name="writer" value="host" id="host-input"/>
                    <Form.Select label='Category' name='category' options={options} placeholder='Category' onChange={this.handleChange.bind(this)}/>
                    <Form.TextArea label='본문' name="content" value={this.props.content} placeholder='please something....' onChange={this.handleChange.bind(this)}/>
                    <Form.Button basic className="editor-btn" onClick={this.handleSubmit.bind(this)}>Submit</Form.Button>
                </Form>
            </Segment>
        </Container>
    );
}
}

export default Editor;