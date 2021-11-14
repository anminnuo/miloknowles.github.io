import React, { Component } from 'react';

import './css/style.css';
import './css/text.css';

import TopNavbar from './components/TopNavbar';
import { Outlet } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar/>
        <Outlet/>
      </div>
    );
  }

  /**
   * Add AnimateOnScroll functionality to some objects. Any HTML object with the "AnimateOnScroll"
   * class name will be triggered when the user scrolls to it. Any other classname with the format
   * animate__* is removed initially, and added upon scroll to trigger.
   */
  componentDidMount() {
    setInterval(() => {
      let char = document.title.codePointAt(0).toString(16);
      if (char === "🌎".codePointAt(0).toString(16)) {
        document.title = "🌍 Milo Knowles";
      } else if (char === "🌍".codePointAt(0).toString(16)) {
        document.title = "🌏 Milo Knowles";
      } else {
        document.title = "🌎 Milo Knowles";
      }
    }, 1000);

    // Get all elements with "AnimateOnScroll" in their classlist.
    const triggerElements = Array.from(document.getElementsByClassName("AnimateOnScroll"));

    triggerElements.forEach(element => {
      const animateClassNames = Array.from(element.classList).filter(s => {
        return s.includes("animate__");
      });

      // Add a scroll observer for this object.
      animateClassNames.forEach(name => element.classList.remove(name));

      const scrollObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateClassNames.forEach(name => entry.target.classList.add(name));
            return; // If we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          animateClassNames.forEach(name => entry.target.classList.remove(name));
        });
      });

      scrollObserver.observe(element);
    });
  }
}

export default App;
