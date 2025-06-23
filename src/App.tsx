import IndexPage from "./pages/Index";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <IndexPage />
    </ThemeProvider>
  )
}

export default App;