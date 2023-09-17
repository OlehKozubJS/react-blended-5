import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectBasename } from 'redux/selectors';

export const Layout = () => {
  const basename = useSelector(selectBasename);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="rates">Rates</NavLink>
            </li>
          </ul>
        </nav>
        {basename && <p>Your base currency : {basename} </p>}
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
