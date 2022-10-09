import { Divider, List, Typography } from "@mui/material";
import { Box } from "@mui/system"
import Transaction from "./Transaction";

const Transactions = ({transactions,setTransactions }) => {
    return(
        <Box>
            <Typography variant="h5">Transactions History</Typography>
            <Divider/>
            <List>
                {
                    transactions.map(transaction =>(
                        <Transaction transaction = {transaction} setTransactions= {setTransactions} transactions= {transactions}/>
                    ))
                }
            </List>
        </Box>
    )
}

export default Transactions;