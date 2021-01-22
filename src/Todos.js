const Todos = ({todoList, deleteTodo}) => {
    const todo = todoList.length ? (todoList.map(item => {
        return(
            <div className="collection-item" key={item.id} onClick={() => {deleteTodo(item.id)}}>
                {item.content}
            </div>
        );
    })) : (
        <p className="center">
            Congratulation ! You finished all works today ! 
        </p>
    ); 
    return (
        <div className="todos collection">
            {todo}
        </div>
    );
}

export default Todos;