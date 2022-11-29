import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import Transactions from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";

// Context API - Global Provider
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <Transactions />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
