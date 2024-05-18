import { Component } from "react";
import check from './check2.jpg';

export class GroceryList extends Component{
    state = {
        userInput:" ",
        groceryList:[]
    }

    onChangeEvent(e) {
      this.setState({userInput: e});
    }

    addItem(input){
        if(input ===''){
            alert("Заполните графу пожалуста")    
        }else{
        let listArray = this.state.groceryList;
        listArray.push(input);
        console.log(listArray)
        this.setState({groceryList: listArray, userInput:''});
        }
    }
    
    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList:listArray})
    }
    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }
   onFormSubmit(e){
    e.preventDefault();
   }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type ="text" placeholder ="дела на день"  
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                <div className="container" >
                    <button className="add-btn btn" onClick={() => this.addItem(this.state.userInput)}> Добаить </button>
                </div>
                 <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li className="li" onClick={this.crossedWord} key={index}>
                            <img className="imgas" src={ check } alt="check" width="50px"/>
                            {item}
                        </li>
                    ))}   
                 </ul>
                 <div className="container" >
                    <button className="delete-btn btn" onClick={() => this.deleteItem()}>Удалить </button>
                 </div>
                 </form>
            </div>
        )
    }
}

