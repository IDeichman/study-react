import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
  AutoCult.by
   <div><Header /></div>
   <div><Home /></div>
</div>)
}
const Header = () => {
  return(
    <div>
      <a href='#s'>    Cars     </a>
      <a href='#s'>    Logbook    </a>
      <a href='#s'>    Community    </a>
      <a href='#s'>    Service    </a>
      <a href='#s'>    Shop    </a>
      <a href='#s'>    Sale    </a>
    </div>
  )
}
  const Home=()=>{
    return(
      <div>
    <a href='#z'> My Car </a>
    <a href='#z'> Messages </a>
    <a href='#z'> Buy </a>
</div>
    )
}

export default App;
