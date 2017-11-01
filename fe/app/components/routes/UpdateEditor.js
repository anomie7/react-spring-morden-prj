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
                subject: this.props.post.entity.subject,
                writer: this.props.post.entity.writer,
                createDate: this.props.post.entity.createDate,
                content: this.props.post.entity.content,
                category: this.props.post.entity.category,
                headers: this.props.post.headers
        };
    }

    componentDidMount() {
        this.link = this.props.post.url;
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWill");
    }

    handleChange(e, data){
        var nextState = {};
        nextState[data.name] = data.value;
        console.log(data.name + " " + data.value);
        this.setState(nextState);
        console.log(this.state);
    }

    handleSubmit(){
        console.log('modifyPost!!!');
        this.props.modifyPost(this.state, this.link, this.props.history);
        console.log('modifyPost!');
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