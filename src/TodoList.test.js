import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList'

function addTodo(todos, task="Write Tests") {
    const taskInput = todos.getByLabelText("New Task:");
    fireEvent.change(taskInput, { target: { value: task}});
    const button = todos.getByText("Add to the todo list!");
    fireEvent.click(button);
}

it("renders without crashing", function() {
    render(<TodoList />)
});

it("matches snapshot", function() {
    const { asFragment } = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", function (){
    const todos = render(<TodoList />);

    //no todos on the list yet
    expect(todos.queryByTestId("remove-todo")).not.toBeInTheDocument();

    addTodo(todos);

    expect(todos.getByTestId("remove-todo")).toBeInTheDocument();

    //expect for to be empty
    expect(todos.getAllByDisplayValue("")).toHaveLength(1);
});

it("can remove a todo", function() {
    const todos = render(<TodoList />);
    addTodo(todos);

    const removeButtom = todos.getByTestId("remove-todo");

    fireEvent.click(removeButtom);
    expect(removeButtom).not.toBeInTheDocument();
})