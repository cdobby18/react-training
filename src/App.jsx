import './App.css'
import ClassBasedComponent from './components/class-based-component'
import ContextButtonComponent from './components/context-concept/button';
import ContextTextComponent from './components/context-concept/text';
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
import UseReducerExample from './components/use-reducer-example';
import Users from './components/users';

const listofProducts = ['Product 1', 'Product 2', 'Product 3'];

function App() {

  return (
    <div>
      <h1>REACT JS</h1>
      {/* <ClassBasedComponent/>
      <FunctionalComponent/>
      <ProductList listofProducts={listofProducts} name="CJ" bName="Sari Store" />

      <Users/> */}

      {/* <ContextButtonComponent/>
      <ContextTextComponent/> */}

      <UseReducerExample/>
     </div>
  )
}

export default App
