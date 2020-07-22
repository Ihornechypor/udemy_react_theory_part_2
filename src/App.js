import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import {Route,Switch } from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'

class App extends Component {
  render(){
    return (
      <Layout>
        <Switch>
          <Route path="/auth" component={Quiz}/>
          <Route path="/quiz-creator" component={Quiz}/>
          <Route path="/quiz/:id" component={Quiz}/>
          <Route path="/" component={Quiz}/>
        </Switch>
      </Layout>  
    )ńń
  }
}



export default App;
