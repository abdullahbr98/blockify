import balanceAbi from "./Balances.json";
import productsAbi from "./Products.json";
import transactionAbi from './Transaction.json';
import authenticateAbi from './Authenticate.json'
import transactProducts from './TransactProducts.json'
// balances deployed to: 0x99d20B87E85c56308Eab8931b11eF78473f83286
export const balancecontractABI = balanceAbi.abi;
export const balanceContractAddress = "0x99d20B87E85c56308Eab8931b11eF78473f83286";
// authenticate deployed to: 0xc469d8178784F75FA83bB6e873D46171c96025Ab
export const authenticateContractABI = authenticateAbi.abi;
export const authenticateContractAddress = "0xc469d8178784F75FA83bB6e873D46171c96025Ab";
// products deployed to: 0x8fDad2d1be1C17b9Ad521557522f798e268D82D3
export const productsContractABI = productsAbi.abi;
export const productsContractAddress = "0x8fDad2d1be1C17b9Ad521557522f798e268D82D3";
// transaction deployed to: 0xeA6Cd7561c802D5Fb775a9D07a390876Fd231128
export const transactionContractABI = transactionAbi.abi;
export const transactionContractAddress = "0xeA6Cd7561c802D5Fb775a9D07a390876Fd231128";
// transactProducts deployed to: 0x0264038B405922EcAC9E1d37DBC5abC45D217D3B
export const transactProductsContractABI = transactProducts.abi;
export const transactProductsContractAddress = "0x0264038B405922EcAC9E1d37DBC5abC45D217D3B";


