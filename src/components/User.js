const User = (props) => {
  return (
    <div className="userName">
      <h3>{props.name}</h3>
      <h4>Location</h4>
      <h3>Socials</h3>
    </div>
  );
};

export default User;
