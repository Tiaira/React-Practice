import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './components/pages/Home';
import News from'./components/pages/News';
import Opinions from './components/pages/Opinions';
import Contact from './components/pages/Contact';
import Header from './components/pages/Header';
import SearchBar from './components/layout/SearchBar';
import Footer from './components/layout/Footer';

import MockArticles from './components/layout/MockArticles';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      article: '',
    };
  }
  myChangeHandler = (event) => {
    let headline = event.target.headline;
    let val = event.target.value;
    this.setState({[headline]: val});
  }
  render() {
    return (
      <form>
      <h1>Writer's Dashboard {this.state.headline} {this.state.article}</h1>
      <div class= "JaneDoe"><p>You are writing as <a href="Jane Doe"> Jane Doe</a></p>
      <p><a href="Log in to another account">Log in to another account</a></p></div> <br></br>
      <p>Headline:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Article Summary:</p>
      <input
        type='text'
        name='article summary'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('headline'));

const app = () => {
  const [text, setText] = useState('')
  return (
    <div className="App">
      <div className="editor">
        <CKEditor
        editor= {ClassicEditor}
        data= {text}
        onChange= {(event, editor) => {
          const data = editor.getData()
          setText(data)}
        }
      />
      </div>

    </div>
  )
}

ReactDOM.render(<app />, document.getElementById('rich'));



const Policy = ()=> {
  const [radio,setRadio] = useState("Governance");
  return (
    <Router>
      <div className='App'>
        <Header />
        <SearchBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/opinions' component={Opinions} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/search' component={SearchBar} />
          <Route exact path='/news' component={News} />
          <Route exact path='/categories' component={Catergories} />
          <Route exact path='/writers-dashboard' component={WritersDashboard} />
          <Route exact path='/keywords' component={Keywords} />

          <Route exact path='/mockarticles' component={MockArticles} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

ReactDOM.render(<Policy/>, document.getElementById('policys'));


