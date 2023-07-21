import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();
type Todo = {
	id: number;
	text: string;
	completed: boolean;
};

let todos: Todo[] = [
	{
		id: Date.now(),
		text: 'foormsss',
		completed: false
	}
];

export function getTodos() {
	return todos;
}

export function addTodo(text: string) {
	const todo: Todo = {
		id: Date.now(),
		text,
		completed: false
	};

	todos.push(todo);
}

export function removeTodo(id: number) {
	todos = todos.filter((todo) => todo.id !== id);
}

export function clearTodos() {
	todos = [];
}
