
export const UIShellWrapper = (props) => {
  return (
    <div className="app">
      <div className="app__header">
        <img src="/assets/img/logo.svg" alt="logo" className="app__logo" />
        <h1 className="heading">REACT TEMPLATE</h1>
      </div>

      <div className="app__content">
        <div className="app__container">
          {props.children}
        </div>
      </div>
    </div>
  );
};
