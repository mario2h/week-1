import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './app.context';

export default class List extends React.Component<iListProps, iListState> {
  constructor (props: iListProps) {
    super(props)
  }

  render() {
    return (
      <AppContext.Consumer>
        {
          ({ posts }) => (
            <div>
              <ul>
                { posts.map( (post: any) => {
                  return <li key="{post.id}">
                      <Link to={`/${post.id}`}>{post.title}</Link>
                    </li>
                })}
              </ul>
            </div>
          )
        }
      </AppContext.Consumer>
    );
  }
}

interface iListProps {

}

interface iListState {
  posts: Array<any>;
}