import MyList from "./MyList";

function App() {
  return (
    <>
      <p id="titre">To Do List</p>
      <MyList type="textarea" name="texte"/>
      <MyList type="password" name="password"/>
      <MyList type="button" name="alerte" id="alerte"/>
    </>
  );
}

export default App;
