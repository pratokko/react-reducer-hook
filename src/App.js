import logo from "./logo.svg";
import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import ComponentD from "./components/ComponentD";
import ComponentC from "./components/ComponentC";
import React, { useReducer } from "react";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import CustomCountOne from "./components/CustomCountOne";
import CustomCoutTwo from "./components/CustomCoutTwo";
import UserForm from "./components/UserForm";

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
       
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        {/* <ComponentA />
        <ComponentD /> */}
        {/* <ComponentC /> */}
        {/* <DataFetchingOne /> */}
        {/* <DataFetchingTwo /> */}
        {/* <Counter /> */}
        {/* <FocusInput /> */}
        {/* <ClassTimer /> */}
        {/* < HookTimer /> */}

        {/* <DocTitleOne />
        <DocTitleTwo /> */}
        {/* <CustomCountOne />
        <CustomCoutTwo /> */}

        <UserForm />
      </div>
    // </CountContext.Provider>
  );
}

export default App;
