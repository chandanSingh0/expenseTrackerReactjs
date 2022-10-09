import { ListItem, ListItemIcon, ListItemText,styled } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteOutline from "@mui/icons-material/DeleteOutline";

const Detail = styled(ListItem)`
    margin-top: 10px;`


const Transaction = ({transaction, setTransactions, transactions}) =>{
    const color = transaction.amount > 0 ? '#81c784': '#ef5350' ;

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id))

    }

    return(
        <Detail style={{background: `${color}`, color: '#fff'}}>
            <ListItemIcon>
                <DeleteOutline onClick = {() => deleteTransaction(transaction.id)} />
            </ListItemIcon>
            <ListItemText>{transaction.text}</ListItemText>
            <ListItemText>{transaction.amount}</ListItemText>
        </Detail>
    )
}
export default Transaction;