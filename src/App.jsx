import MyButton from "./MyButton";

function App() {
  return (
    <>
      <p id="titre">Formulaire</p>
      <MyButton type="textarea" name="texte"/>
      <MyButton type="password" name="password"/>
      <MyButton type="button" name="alerte" id="alerte"/>
    </>
  );
}

export default App;
