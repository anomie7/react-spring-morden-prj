import React from 'react';
import { Container, Segment, Item } from "semantic-ui-react";


class Post extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(){
        // console.log(this.props.postKey);
        this.props.goPost(this.props.postKey);
    }

    render(){
        return (
            <Segment onClick={this.handleClick.bind(this)}>
                <Item>
                    <Item.Content>
                        <Item.Header>{this.props.subject}</Item.Header>
                        <Item.Meta className="post-meta">
                            <p>{this.props.category}&nbsp; &nbsp; {this.props.createDate}</p>
                        </Item.Meta>
                        <Item.Description></Item.Description>
                    </Item.Content>
                </Item>
            </Segment>
        );
    }
}

export default Post;