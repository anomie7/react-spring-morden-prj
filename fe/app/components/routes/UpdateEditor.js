import React from "react";
import { Header, Container, Segment, Divider, Form } from "semantic-ui-react";

const options = [
    {key: '1', text: '맛집', value: '맛집'},
    {key: '2', text: '리뷰', value: '리뷰'},
    {key: '3', text: '프로그래밍', value: '프로그래밍'},
]


class UpdateEditor extends React.Component{
    constructor(props){
        super(props);        
        this.state = {
            subject: '',
            writer: '',
            createDate: '',
            content: '',
            category: ''
        };
    }

    componentDidMount() {
        this.setState(this.props.post);
        console.log(this.state);
        
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWill");
    }

    handleChange(e, data){
        var nextState = {};
        nextState[data.name] = data.value;
        this.setState(nextState);
        console.log(this.state);
    }

    handleSubmit(){ 
        this.props.modifyPost(this.state, this.props.postNum);
        this.props.history.push('/posts');
    }

    render(){
        return (
        <Container className="home-container">
            <Segment className="home-segment">
                <Header as="h2" content="수정 에디터"/>
                <Divider section>
                </Divider>
                <Form>
                    <Form.Input label='제목' name="subject" value={this.state.subject} type='text' onChange={this.handleChange.bind(this)}/>
                    <input type="hidden" name="writer" value="host" id="host-input"/>
                    <Form.Select label='Category' name='category' options={options} placeholder='Category' onChange={this.handleChange.bind(this)}/>
                    <Form.TextArea label='본문' name="content" value={this.state.content} placeholder='please something....' onChange={this.handleChange.bind(this)}/>
                    <Form.Button basic className="editor-btn" onClick={this.handleSubmit.bind(this)}>Submit</Form.Button>
                </Form>
            </Segment>
        </Container>
    );
}
}

export default UpdateEditor;