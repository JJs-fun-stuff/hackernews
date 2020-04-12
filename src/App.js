import React, {Component} from 'react';

import './App.css';
const list =[
  {
    title:'React',
    url:'http://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points:4,
    objectID:0,
  },
  {
    title:"Redux",
    url:'http://github.com/reactjs/redux',
    author: 'Dan Abramov, Jordan Walke',
    num_comments: 2,
    points:5,
    objectID:1,
  }
];

const isSearched = searchTerm => item =>{
  return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())
}

class App extends Component{
  
  constructor(props){ 
   
    super(props)
    // set state of this component as JSON format
    this.state= {
      list,
      searchTerm: '',
    }

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  //Update the list by clicking dismiss button HTML tag  
  onDismiss(id){
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({list : updatedList});
  }


// let searchTerm  in input tag to be equal to things user search
  onSearchChange(event){
    this.setState({ searchTerm: event.target.value});
  }
  render() {
    // Object destructuring
    const {list, searchTerm} = this.state;
    return(
      <div className="page">
        <div className="interactions">
          {/* Get value from textbox -> assign it to searchTerm */}
        <Search value ={searchTerm} onChange = {this.onSearchChange} />
        </div>
        {/* isSearched is finding the item that match(includes) with the searchTerm */}
        <Table list= {list} pattern = {searchTerm} onDismiss ={this.onDismiss} />
      </div>
    )
}
}
// ---- ES6 Class Component
// class Search extends Component{
//   render() {
//     const {value, onChange,children} = this.props;
//     return (
//       <form>{children}
//           <input type="text" value ={value} onChange ={onChange}/>
//       </form>
//     );
    
//   }
// }
// Use object destructuring to ->{value,onChange,children} 
// from  -> const {value, onChange, children} = this.props
// function Search({value, onChange,children}){
//   return (
//     <form>{children}
//     <input type = "text" value={value} onChange={onChange}></input>
//    </form>
//   );
// }

// Split up component <Search></Search>
// Functional Stateless Component
const  Search= ({value, onChange,children}) =>
  <form>{children}
   <input type = "text" value={value} onChange={onChange}/>
  </form>
;

 


// Split up component <Table></Table>
// class Table extends Component{
//   render(){
//     const {list, pattern, onDismiss} = this.props;
//     return(
//       list.filter(isSearched(pattern)).map(item =>
//         <div key = {item.objectID}>
//           <span>
//             <a href = {item.url}>{item.title}</a>
//           </span>
//         <span>{item.author}</span>
//         <span>{item.num_comments}</span>
//         <span>{item.points}</span>
//         <span>
          // <Button onClick = {() => onDismiss(item.objectID)} type = "button">Dismiss</Button>
//         </span>
//         </div>
//       )
//     );
//   }
// }
const largeColumn = {width:'40%',};
const midColumn = {width:'30%',};
const smallColumn = {width:'10%',};


const Table = ({list, pattern,onDismiss}) =>
  <div className="table">
  {list.filter(isSearched(pattern)).map(item => 
    <div key= {item.objectID} className="table-row">
      <span style={largeColumn}>
        <a href = {item.url}>{item.title}</a>
      </span>
      <span style={midColumn}>{item.author}</span>
      <span style={smallColumn}>{item.num_comments}</span>
      <span style={smallColumn}>{item.points}</span>
      <span style={smallColumn}>
        <Button onClick = {() => onDismiss(item.objectID)}  className ="button-inline" type ="button">Dismiss</Button>
      </span>
    </div>
    )}
    </div>



// class Button extends Component {
  //   render(){
//     //กำหนด default parameters
//     const {onClick, className ='', children} = this.props;

//     return (
//       <button onClick = {onClick} className = {className} type ="button">
//         {children}
//       </button>
//     )
//   }
// }
const Button = ({onClick, className = '', children}) => 
  <button onClick ={onClick} className = {className} type = "button">
    {children}
  </button>

export default App;
