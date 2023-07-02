import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [entires, setEntries] = useState(initialEntries);

  const handleEntry = (newEntry) => {
    const id = uid();
    newEntry = { ...newEntry, date, id };

    setEntries([newEntry, ...entries]);
  };
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm />
        <EntriesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
