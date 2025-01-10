export function TodoItem({ completed, id, title, toggleTodo, deleteTodo}) {
    return <li>
        <label>
          <input 
            type="checkbox" 
            checked ={completed} 
            onChange={e => toggleTodo(id, e.target.checked)} 
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} // () => calls for the function when "onClick" button activated
        className="btn btn-danger"
        >
          Delete
        </button>
    </li> 
}