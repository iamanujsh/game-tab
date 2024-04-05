import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="grid md:grid-cols-1 ">
        <div className="">
          <Navbar />
        </div>
        <div className="flex ">
          <div className="bg-purple-500 w-1/2 sm:block hidden">Aside</div>
          <div className="bg-yellow-500 sm:w-1/2 w-full">Main</div>
        </div>
      </div>
    </>
  );
}

export default App;
