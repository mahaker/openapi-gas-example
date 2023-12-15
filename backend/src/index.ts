import * as api from './openapi';

const doGet = () => {
  const html = HtmlService.createHtmlOutputFromFile('index.html').setTitle('gas-next-app');
  return html;
};

const getTodoItem: api.IGetTodoItem = (req) => {
  console.log('itemId: ', req.itemId);

  return {
    itemId: 1,
    title: 'Test item',
    description: 'hogehoge',
  };
};

const postTodoItem: api.IPostTodoItem = (req) => {
  console.log('req: ', req.title, req.description);

  return {
    itemId: 2,
    title: 'Created item',
  }
}

// @ts-ignore
declare let global: any;
global.doGet = doGet;
global.getTodoItem = getTodoItem;
global.postTodoItem = postTodoItem;
