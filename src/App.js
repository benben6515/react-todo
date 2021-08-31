import Todo from './Todo.js'
import Nav from './Nav.js'
import Footer from './Footer.js'
import GlobalStyle from './style/GlobalStyle.js'

function App() {

  return (
    <div className="App">
    <GlobalStyle />
    <Nav />
    <Todo />
    <Footer />
    </div>
  );
}

export default App;
