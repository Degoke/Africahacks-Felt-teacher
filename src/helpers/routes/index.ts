import RoutesInterface from './interface'
import Home from '../../pages/home'
import Faqs from '../../pages/faqs'
import Profile from '../../pages/profile'
import Search from '../../pages/search'
import AuthPage from '../../pages/auth'

const routes: RoutesInterface[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/faqs',
    name: 'FAQS',
    component: Faqs,
  },
  {
    path: '/profile/:type/:id',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/all',
    name: 'All',
    component: Search,
  },
  {
    path: '/register',
    name: 'Auth',
    component: AuthPage,
  },
  {
    path: '/login',
    name: 'Auth',
    component: AuthPage,
  },
]

export default routes
