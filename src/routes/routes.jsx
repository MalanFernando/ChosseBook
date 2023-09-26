import Home from '../pages/Home';
import BookMark from '../pages/BookMark';
import NotFound from '../pages/NotFound';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/bookmark',
    component: BookMark
  },
  {
    component: NotFound
  }
];
export default routes;
