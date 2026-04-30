import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="container flex flex-col min-h-screen">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
