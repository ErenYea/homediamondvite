import React, { Component } from "react";
import ErrorPage from "./ErrorPage.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    console.log("In Error ", error);
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // Pass the error to the ErrorPage component
      return (
        <div className="w-full h-full">
          <NavBar />
          <ErrorPage error={this.state.error} />
          <Footer />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
