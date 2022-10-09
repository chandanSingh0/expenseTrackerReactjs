import logo from "./logo.svg";
import "./App.css";
import {Typography, styled, Box} from '@mui/material';
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTransactions from "./components/NewTransactions";
import Transactions from "./components/Transactions";
import { useState } from "react";
const Header = styled(Typography)`
    margin:  0;
    font-size: 40px;
    color: #0097a7;
    `
const Component = styled(Box)`
    display: flex;
     backgound: #fff;
     width:800px
     padding:10px;
     border-raddius: 20px;
     margin: 0 auto 0 auto;
    & > div {
        hieght:70vh;
        width:50%;
        padding: 10px;
    }
    `

function App() {
  const [transactions, setTransactions] = useState([
    {id: 1, text: 'momos',amount: -20},
    {id: 2, text: 'Salary',amount: 2000},
    {id: 3, text: 'Book',amount: -200},
    {id: 4, text: 'Bonus',amount: 2000},
    {id: 5, text: 'Ball',amount: -200},
  ])
  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transactions = {transactions} />
          <ExpenseCard transactions = {transactions}/>
          <NewTransactions setTransactions = {setTransactions} />
        </Box>
        <Box>
          <Transactions transactions = {transactions} setTransactions = {setTransactions}/>
        </Box>
        
      </Component>
    </Box>
  );
}

export default App;
