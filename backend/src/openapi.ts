export type GetTodoItemRequest = {
  itemId: number;
}

export type GetTodoItemResponse = {
  itemId: number;
  title: string;
  description?: string;
}

export type IGetTodoItem = (request: GetTodoItemRequest) => GetTodoItemResponse;

export type PostTodoItemRequest = {
  title: string;
  description?: string;
}

export type PostTodoItemResponse = {
  itemId: number;
  title: string;
  description?: string;
}

export type IPostTodoItem = (request: PostTodoItemRequest) => PostTodoItemResponse;

