export default function Container({ children, classToAdd }) {
  return (
    <div className={classToAdd ? `container ${classToAdd}` : "container"}>
      {children}
    </div>
  );
}
