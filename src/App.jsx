import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Post from './Post';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutMe from './AboutMe';
import RecentUpdates from './RecentUpdates';
import Calender from './Calender';
import Post1 from './Post1';
import Post2 from './Post2';
import Post3 from './Post3';
import YT from './Youtube';
import YoutubeList from './YoutubeList';

function App() {



    return (
        <BrowserRouter>
            <div>
                <div id="navbar">
                    <Navbar />
                </div>,

                <div id="project-cards">

                    <Routes>

                        <Route exact path="/" element={<RecentUpdates />} >
                        </Route>
                        <Route exact path="/posts" element={<Post />} >
                        </Route>
                        <Route exact path="/about-me" element={<AboutMe />} >
                        </Route>
                        <Route exact path="/posts/1" element={<Post1 />} >
                        </Route>
                        <Route exact path="/posts/2" element={<Post2 />} >
                        </Route>
                        <Route exact path="/posts/3" element={<Post3 />} >
                        </Route>
                        <Route exact path="/calender" element={<Calender />} >
                        </Route>

                    </Routes>
                </div>

                <div id="footer">
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;