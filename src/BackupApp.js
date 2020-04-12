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
    // item is an item from list
    const isNotId = item => item.object !== id;
    const updatedList =  this.state.list.filter(isNotId);
    this.setState({list : updatedList});
  }


// let searchTerm  in input tag to be equal to things user search
  onSearchChange(event){
    this.setState({ searchTerm: event.target.value});
  }
  render() {
    const {list, searchTerm} = this.state;
    return(
      <div className="App">
          {/* Get value from textbox -> assign it to searchTerm */}
        <Search value ={searchTerm} onChange = {this.onSearchChange} />
        {/* isSearched is finding the item that match(includes) with the searchTerm */}
        <Table list= {list} pattern = {searchTerm} onDismiss ={this.onDismiss} />

        </div>
    )
}
}

class Search extends Component{
  render() {
    const {value, onChange} = this.props;
    return (
      <form>
          <input type="text" value ={value} onChange ={onChange}/>
      </form>
    );
  }
}

class Table extends Component{
  render(){
    const {list, pattern, onDismiss} = this.props;

    return(
      list.filter(isSearched(pattern)).map(item =>
        <div key = {item.objectID}>
          <span>
            <a href = {item.url}>{item.title}</a>
          </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
          <button onClick = {() => onDismiss(item.objectID)} type = "button">Dismiss</button>
        </span>
        </div>
      )
    )
  }
}



  

export default App;
