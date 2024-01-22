import PropTypes from "prop-types";

export default function Container({ children, classToAdd }) {
  return (
    <div className={classToAdd ? `container ${classToAdd}` : "container"}>
      {children}
    </div>
  );
}

Container.propTypes = {
  classToAdd: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.element,
  ]),
};
