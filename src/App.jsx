import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="container flex flex-col min-h-screen">
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2023 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
