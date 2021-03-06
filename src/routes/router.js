/** Pages */
import Home from '../pages/Home'
import Error404 from '../pages/Error404'

/** Components */
import Header from '../template/Header'

/** Utilities */
import Hash from '../utils/hash'
import resolveRoutes from '../utils/routeResolver'
import Footer from '../template/Footer'

/** Routes */
const routes = {
  '/': Home,
}

const router = async () => {
  const header = null || document.getElementById('header')
  const footer = null || document.getElementById('footer')
  const content = null || document.getElementById('content')

  header.innerHTML = await Header()
  footer.innerHTML = await Footer()

  let hash = Hash()
  let route = await resolveRoutes(hash)
  let render = routes[route] ? routes[route] : Error404

  content.innerHTML = await render() 
}

export default router
