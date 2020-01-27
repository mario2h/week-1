import * as React from 'react';
import { Link } from 'react-router-dom';

export default class List extends React.Component<iListProps, iListState> {
  constructor (props: iListProps) {
    super(props)
    this.state = {
      posts: [  {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },]
    }
  }
  
  render() {
    const { posts } = this.state;
    return (
      <div>
        <ul>
          { posts.map( post => {
          return <li key="{post.id}">
          <Link to={`/${post.id}`}>{post.title}</Link>
          </li>
          })}
        </ul>
      </div>
    );
  }
}

interface iListProps {

}

interface iListState {
  posts: Array<any>;
}