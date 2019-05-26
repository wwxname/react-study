import React, {Component} from 'react';
import PostItem from './PostItem';

const data = [
    {title: "大家一起讨论react", author: "哈哈哈", date: "2017 08 09"},
    {title: "大家一起讨论react", author: "哈哈哈", date: "2017 08 09"},
    {title: "大家一起讨论react", author: "哈哈哈", date: "2017 08 09"},
    {title: "大家一起讨论react", author: "哈哈哈", date: "2017 08 09"}
];

class PostList extends Component {
    handleVote(id) {
        const posts = this.state.posts.map(item => {
            let newItem = null;
            console.log(id);
            newItem = item.id === id ? {...item, vote: ++item.vote} : item;

            return newItem;
        });
        this.setState({
            posts
        });

    }

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.timer = null;
        this.handleVote = this.handleVote.bind(this);

    }

    componentDidMount() {
        this.timer = setTimeout(
            () => {
                console.log('---');
                this.setState({
                    posts: [
                        {id: 1, vote: 100, title: "大家一起讨论react", author: "哈哈哈", date: "2017 08 09"},
                        {id: 2, vote: 0, title: "大家一起讨论react", author: "哈哈哈", date: "2017 08 09"},
                        {id: 3, vote: 0, title: "大家一起讨论react", author: "哈哈哈", date: "2017 08 09"},
                        {id: 4, vote: 0, title: "大家一起讨论react", author: "哈哈哈", date: "2017 08 09"}
                    ]
                });
            }, 1000
        );
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    render() {
        return (<div>
            帖子列表：
            <ul>
                {
                    this.state.posts.map(item => {
                        return <PostItem
                        post = {item}
                        onVote={this.handleVote}
                        />
                    })
                }
            </ul>


        </div>);
    }
}

export default PostList;