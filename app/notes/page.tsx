import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import NotesClient from "./Notes.client";

function App() {
  return (
    <TanStackProvider>
      <NotesClient />
    </TanStackProvider>
  );
}

export default App;
