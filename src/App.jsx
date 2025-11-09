import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

// styles
import { AppContainer, PageContent } from "./styles/App";

function App() {
  return (
    <AppContainer>
      <Navbar />
      <PageContent>
        <Outlet />
      </PageContent>
    </AppContainer>
  );
}

export default App;
