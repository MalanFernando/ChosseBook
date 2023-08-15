import Home from '../pages/Home';
import BookList from '../pages/BookList';
import NotFound from '../pages/NotFound';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/booklist',
    component: BookList
  },
  {
    component: NotFound
  }
];
export default routes;
