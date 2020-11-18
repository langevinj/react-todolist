import { render } from '@testing-library/react';
import Todo from './Todo'
import { remove } from './TodoList'

it("should render without crashing", function() {
    render(
        <ul>
            <Todo handleRemove={remove} id={1} task="Dishes"/>
        </ul>
    );
});

it("should match the snapshot", function() {
    const { asFragement } = render(
        <ul>
            <Todo handleRemove={remove} id={1} task="Dishes" />
        </ul>
    );
    expect(asFragement).toMatchSnapshot();
});