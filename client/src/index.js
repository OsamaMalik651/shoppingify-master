import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemsPage from './Pages/ItemsPage';
import HistoryPage from './Pages/HistoryPage';
import StatisticsPage from './Pages/StatisticsPage';
import ShoppingLIsts from './components/ShoppingLists/ShoppingLIsts';
import ShoppingListDetails from './components/ShoppingListDetails/ShoppingListDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<ItemsPage />} exact />
        <Route path="history" element={<HistoryPage />}>
          <Route index element={<ShoppingLIsts />} />
          <Route path=":id" element={<ShoppingListDetails />} />
        </Route>
        <Route path="statistics" element={<StatisticsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

