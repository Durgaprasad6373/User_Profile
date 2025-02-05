import {Component} from 'react'
import UserProfile from "./Components/UserProfile"
import './App.css'

const initialUserDetailsList = [
  {
  uniqueNo:1,
  imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name: "Esther Foward",
  role: "Software Engineer"
},
{
  uniqueNo: 2,
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
  name: 'Floyd Miles',
  role: 'Software Developer',
},
{
  uniqueNo: 3,
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
  name: 'Jacob Jones',
  role: 'Software Developer',
},
{
  uniqueNo: 4,
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
  name: 'Devon Lane',
  role: 'Software Developer',
},
]

class App extends Component {
  state = {
    searchInput: " ", userDetailsList: initialUserDetailsList
  }

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  deleteUser = (uniqueNo) => {
    const {userDetailsList} = this.state
    const filteredUserDetailsList = userDetailsList.filter(eachUser => eachUser.uniqueNo !== uniqueNo)
    this.setState({
      userDetailsList: filteredUserDetailsList
    })
  }
  render(){
    const {searchInput,userDetailsList} = this.state
    const searchResults = userDetailsList.filter(eachUser => 
      eachUser.name.includes(searchInput),
    )

    return (
    <div className="app-container">
    <h1 className="title">Users List</h1>
    <input type="search" onChange={this.onChangeSearchInput} />
    <ul className="list-container">
    {searchResults.map(eachUser=> (
      <UserProfile userDetails={eachUser} deleteUser={this.deleteUser} key={eachUser.uniqueNo}/>
    ))}
    </ul>
   </div>
 )
  }
  
}

export default App