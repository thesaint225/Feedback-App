import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import PeopleData from "./data/PeopleData";
import Test1 from "./components/Test1";
import FeedbackForm from "./components/FeedbackForm";
import AboutPages from "./pages/AboutPages";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/">
            <FeedbackForm  />
            <FeedbackStats />
            <FeedbackList />
          </Route>
          <Route path="/about" component={AboutPages} />
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
