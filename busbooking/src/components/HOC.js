// This is the HOC
function withGreeting(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div>
        <h2>Hello, welcome to the app!</h2>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withGreeting;
