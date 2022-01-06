import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, HashRouter } from "react-router-dom";
import { useParams } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import WritingPage from './pages/WritingPage';
import MarkdownRenderer from './components/MarkdownRenderer';
import * as serviceWorker from './serviceWorker';


function PassIdToMarkdownRenderer() {
  let { id } = useParams();
  return (<MarkdownRenderer id={id}/>);
}


// https://stackoverflow.com/questions/58228017/react-router-v4-cant-load-page-on-github-pages
ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="home" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="projects" element={<ProjectPage/>}/>
        <Route path="writing" element={<WritingPage/>}/>
        <Route path="writing/:id" element={<PassIdToMarkdownRenderer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
