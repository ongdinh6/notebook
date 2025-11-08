import { Outlet } from 'react-router-dom';
import { capitalize } from 'utils/string.extension';


const AppLayout = () => {
  return (
    <div>
      <h1>{capitalize('My App')}</h1>
      <Outlet />
    </div>
  )
}

export { AppLayout };
export default AppLayout