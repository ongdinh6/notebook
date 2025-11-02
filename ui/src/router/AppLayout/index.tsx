import { Outlet } from 'react-router-dom';  


const AppLayout = () => {
  return (
    <div>
      <h1>My App</h1>
      <Outlet />
    </div>
  )
}

export { AppLayout }
export default AppLayout