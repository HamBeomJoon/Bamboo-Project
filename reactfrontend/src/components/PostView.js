import React, { Component } from 'react'

const dummy_prop = {
    title: '테스트용 타이틀입니다',
    content: '테스트용 글입니다.'
}

export default class PostView extends Component {
    render() {
        // const {id, title, content} = this.props;
        const id = this.props.id;
        const title = this.props.title;
        const content = this.props.content;
        return (
            <div>
                {id}
                <h3> {title} </h3>
                <p> {content} </p>    
            </div>
        )
    }
}