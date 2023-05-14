import axios from 'axios';

const BACKEND_URL = "https://financemanager-e67ec-default-rtdb.asia-southeast1.firebasedatabase.app";

//INVESTMENTS:
//POST Request
export async function storeMutualFund(mutualFundData) {
    const response = await axios.post(BACKEND_URL + '/mutualFunds.json', mutualFundData);
    const id = response.data.name;
    return id;
}

//GET Request
export async function retrieveMutualFunds() {
    const response = await axios.get(BACKEND_URL + '/mutualFunds.json');
    // console.log("response", response.data);
    const mfData = [];

    for(const key in response.data){
        const mutualFundObj = {
            id: key,
            amount: response.data[key].amount,
            scheme: response.data[key].scheme
        };
        mfData.push(mutualFundObj);
    }
    return mfData;
}

//EXPENSES:
//POST Request
export async function storeExpense(expenseData) {
    const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
    const id = response.data.name;
    return id;
};

//GET Request
export async function fetchExpenses() {
    const response = await axios.get(BACKEND_URL + '/expenses.json');
    
    const expenses = [];

    for(const key in response.data){
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };
        expenses.push(expenseObj);
    }
    return expenses;
};

//PUT Request
export function updateExpense(id, expenseData) {
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

//PUT Request
export function deleteExpense(id) {
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);

}