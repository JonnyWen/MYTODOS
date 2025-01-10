import {useState} from "react"

export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("") 

    function handleSubmit(e) {
        e.preventDefault()
        //Anytime we need to use the current value we need to use a function, otherwise we just pass a value like onChange
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }

    return <form onSubmit={handleSubmit} className="new-item-form"> 
    <div classname="form-row">
      <label htmlFor= "item">New Item</label> 
      <input 
        value={newItem} 
        onChange= {e => setNewItem(e.target.value)} // setNewItem allows change for state variable, which rerenders your entire jsx component
        type= "text" 
        id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
}
