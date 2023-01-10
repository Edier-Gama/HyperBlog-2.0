import { HashRouter, Routes, Route } from 'react-router-dom';
import {HomePage} from './HomePage'
import { ProfilePage } from './ProfilePage';
import { BlogPage } from '../BlogPage/BlogPage';
import { Home } from './Menu';
import { BlogPost } from '../BlogPage/BlogPost';
import { LogInPage } from '../Auth/LogInPage';
import { LogOutPage } from '../Auth/LogOutPage';
import { AuthProvider, ProtectedRoute} from '../Auth/auth'
import { CreateBlogView } from '../BlogPage/NewBlog';
import { Profile } from './Profile';
import { EditProfile } from './EditProfile';
import { EditFakeProfile } from './EditFakeProfile';
import './App.css';
import '../Auth/forms.css'
import '../BlogPage/blog.css'

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
         <Home/>
         <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='/blog' element={<ProtectedRoute><BlogPage/></ProtectedRoute>}>
           </Route>
           <Route path='/blog/:slug' element={<ProtectedRoute><BlogPost/></ProtectedRoute>}/>
           <Route path='/blog/create-blog' element={<ProtectedRoute><CreateBlogView/></ProtectedRoute>}/>
           <Route path='/edit-profile' element={<ProtectedRoute><EditProfile/></ProtectedRoute>}/>
           <Route path='/edit-fake-profile/:slug' element={<ProtectedRoute><EditFakeProfile/></ProtectedRoute>}/>
           <Route path='/login' element={<LogInPage/>}/>
           <Route path='/logout' element={<ProtectedRoute><LogOutPage/></ProtectedRoute>}/>
           <Route path='/profile' element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
           <Route path='/profile/:slug' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
           <Route/>
           <Route path='*' element={<p>Error 404</p>}/>
         </Routes>
        </AuthProvider>
      </HashRouter>
      </>
  );
}

export default App;
