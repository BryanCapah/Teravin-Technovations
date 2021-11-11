
import { lazy, memo, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  const SubmissionList = lazy(() => import('./screens/Submission'))
  const SubmissionRegister = lazy(() => import('./screens/Submission/Register'))
  const SubmissionDetail = lazy(() => import('./screens/Submission/Detail'))
  const Loading = () => <div></div>



  return (
    <div className='w-full'>

      <div className='App md:px-36 sm:px-0'>
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                exact
                path='/'
                name='Submission List'
                element={<SubmissionList />}
              />
              <Route
                exact
                path='/register'
                name='Submission Register'
                element={<SubmissionRegister />}
              />
              <Route
                exact
                path='/:id'
                name='Submission Detail'
                element={<SubmissionDetail />}
              />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </div>

  );
}

export default memo(App);
