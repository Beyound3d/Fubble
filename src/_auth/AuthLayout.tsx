import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
         <img src="public/assets/images/side-img.svg" alt="" className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat '></img>

         <section className='flex flex1 justify-center items-center flex-col px-9 py-10'>
            <Outlet />
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout