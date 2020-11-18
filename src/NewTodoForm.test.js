import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm'
import {add} from './TodoList'

it("should render correctly", function() {
    render(<NewTodoForm createTodo={add}/>)
});

it("should match the snapshot", function() {
    const { asFragment } = render(<NewTodoForm createTodo={add} />)
    expect(asFragment).toMatchSnapshot();
})