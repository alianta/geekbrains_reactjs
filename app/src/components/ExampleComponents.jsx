const Wrapper = () => {
  return <div>Test</div>;
};

React.createElement("div", {}, "Test");

const Button = () => {
  return <Wrapper />;
};

React.createElement(Wrapper, {});

const Components = {
  Link: () => <a>Link</a>
};

const TestRenderer = () => {
  return <Components.Link />;
};
