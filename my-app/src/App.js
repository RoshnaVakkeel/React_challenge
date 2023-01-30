import css from './App.module.css';
// import NavBarSimple from './components/NavBarSimple';
import Sidebar from "./components/Sidebar"; 
import NavBarForm from "./components/NavBarForm";
import Content from './components/Content';
import PostItem from './components/PostItem';


function App() {
  return (
    <div className={css.App}>
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;