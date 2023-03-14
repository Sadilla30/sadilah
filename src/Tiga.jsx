function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Sadillah',
    lastName: 'Astutik'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  function Hello() {
    return (
        element
    )
}

export default Hello;