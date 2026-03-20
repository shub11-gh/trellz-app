function App() {
  // This is used when we use create-react-app
  // REACT_APP_APPWRITE_URL = "test environment"
  // console.log(process.env.REACT_APP_APPWRITE_URL);

  // This is used when we use vite
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <h1>A blog app with appwrite</h1>




    </>
  )
}

export default App
