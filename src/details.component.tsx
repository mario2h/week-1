import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Details extends React.Component<IDetailsProps, IDetailsState> {
  constructor (props: IDetailsProps) {
    super(props);
    console.log(props)
    this.state = {
      post: this.props.match
    }
  }
  
  render() {
    const { post } = this.state;
    return (
      <div>
        <h2>{post.title}</h2>
      </div>
    );
  }
}

interface IDetailsProps extends RouteComponentProps<{ post: any }>{

}

interface IDetailsState {
  post: any
}