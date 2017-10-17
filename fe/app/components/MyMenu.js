import React from 'react';
import { Segment, Menu } from "semantic-ui-react";

    class MyMenu extends React.Component{

        constructor(props){
            super(props);
            this.state = {activeItem: 'home'};
        }

        handleItemClick(e, {name}){
            console.log(name + " " + e.target.name);
            this.setState({activeItem: name});
        }
        
        render(){
            const {activeItem} = this.state;

            return(
                <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick.bind(this)}/>
                    <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick.bind(this)}/>
                    <Menu.Item name='posts' active={activeItem === 'posts'} onClick={this.handleItemClick.bind(this)}/>
                </Menu>
            </Segment>
            )
        }
        
    }
      

export default MyMenu;