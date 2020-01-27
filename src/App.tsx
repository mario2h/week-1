import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import List from './list.component';
import Details from './details.component';

class App extends React.Component<IAppProps, IAppState>  {
  constructor (props: IAppProps) {
    super(props)
    this.state = {posts: []};
  }
  
  async componentDidMount() {
    try {
			const listPost = await fetch('https://jsonplaceholder.typicode.com/posts');
      let posts = await listPost.json();
      console.log(posts)
			this.setState({ posts });
		} catch (error) {
			console.log(error);
		}
  }

  render () {
    return (
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={List}/>
              <Route path="/:id" component={Details}/>
            </Switch>
          </Router>
        </div>
      )
  }
}

export interface IAppProps {}

export interface IAppState {
	posts: Array<any>;
}

export default App