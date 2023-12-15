export type GetTodoItemRequest = {
  itemId: number;
}

export type GetTodoItemResponse = {
  itemId: number;
  title: string;
  description?: string;
}

export function getTodoItem(request: GetTodoItemRequest): Promise<GetTodoItemResponse> {
  return new Promise((resolve, reject) => {
    google.script.run
      .withSuccessHandler(resolve)
      .withFailureHandler(reject)
      .getTodoItem(request);
  });
}

export type PostTodoItemRequest = {
  title: string;
  description?: string;
}

export type PostTodoItemResponse = {
  itemId: number;
  title: string;
  description?: string;
}

export function postTodoItem(request: PostTodoItemRequest): Promise<PostTodoItemResponse> {
  return new Promise((resolve, reject) => {
    google.script.run
      .withSuccessHandler(resolve)
      .withFailureHandler(reject)
      .postTodoItem(request);
  });
}

