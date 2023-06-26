import * as React from 'react';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import '../Styles/style.css'
import Heading from '../Components/Heading';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ToCurrencyTextField from '../Components/ToCurrencyTextField';
import ExchangeButton from '../Components/ExchangeButton';
import FromAmountMoney from '../Components/FromAmountMoney';
import ToAmountMoney from '../Components/ToAmountMoney';
import DateInput from '../Components/DateInput';
import QuestionSVG from '../Components/QuestionSVG';
import MultiSelect from '../Components/MultiSelect';
import PrintIcon from '../Components/PrintIcon';
import LeftSideCurrencyBtn from '../Components/LeftSideCurrencyBtn';
import RightSideCurrencyBtn from '../Components/RightSideCurrencyBtn';
import FromCurrencyTextField from '../Components/FromCurrencyTextField';
import OnlineTradingButton from '../Components/OnlineTradingButton';


// Get current date
function getCurrentDate() {
  const currentDate = new Date();

  // Lấy thông tin năm, tháng, ngày
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Tháng được đếm từ 0 đến 11
  const day = String(currentDate.getDate()).padStart(2, '0');

  // Trả về chuỗi năm-tháng-ngày
  return `${year}-${month}-${day}`;
}


export default function App() {

  // left side currency
  const [fromCurrency, setFromCurrency] = React.useState('USD');
  // left side value
  const [leftSideMoney, setLeftSideMoney] = React.useState('1');
  // right side currency
  const [toCurrency, setToCurrency] = React.useState('VND');
  // right side value
  const [rightSideMoney, setRightSideMoney] = React.useState(24000);

  //Date
  const [date, setDate] = React.useState(getCurrentDate())

  // Handling event for currency of Left side
  const handlingLeftSideCurrencyClick = (value) => {
    setFromCurrency(value);
    console.log('rendering HandlingClick Left Currency, current Left currency:' + fromCurrency)
  }

  // Handling event for currency of Right side

  const handlingRightSideCurrencyClick = (value) => {
    setToCurrency(value);
    console.log('rendering HandlingClick Right Currency, current Right currency:' + toCurrency)
  }

  const handlingLeftTextField = (value) => {
    console.log('rendering handlingLeftTextField, with current value: ' + leftSideMoney);
    setLeftSideMoney(value);
  }

  const handlingRightTextField = (value) => {
    console.log('rendering handlingRightTextField, with current value: ' + toCurrency);
    setToCurrency(value);
  }

  const handlingExchangeButton = (firstData, secondData) => {
    console.log('rendering handlingExchangeButton with values: ' + fromCurrency + ' ' + toCurrency);
    setFromCurrency(secondData);
    setToCurrency(firstData);
  }

  const handlingDateInput = (value) => {
    console.log('rendering handlingDateInput, preDate: ' + date);
    setDate(value);
  }

  return (
    <Container maxWidth='fixed' className='mainContainer'>
      <Grid container spacing={1}>
        {/* Header */}
        <Grid xs={7}>
          <Heading moneyAmount={leftSideMoney} currency1={fromCurrency} currency2={toCurrency} />
        </Grid>
        {/* Online trading button */}
        <Grid xs={5}>
          <OnlineTradingButton />
        </Grid>
        {/* Form  */}
        <Grid xs={12}>
          {/* Contain all the Transaction interfaces */}
          <div className='box'>
            {/* Contain 4 textFields and money currency options */}
            <Grid container spacing={3}>
              {/*  Left side */}
              <Grid xs={5.5} display="flex" justifyContent="" flexDirection={'column'} gap={'16px'} >
                <FromCurrencyTextField onChange={handlingLeftSideCurrencyClick} currency={fromCurrency} />
                <FromAmountMoney onChange={handlingLeftTextField} data={leftSideMoney} />
                <LeftSideCurrencyBtn onClick={handlingLeftSideCurrencyClick} />
              </Grid>
              <Grid xs={1} display="flex" justifyContent="center" alignItems='center'>
                <ExchangeButton onClick={handlingExchangeButton} firstData={fromCurrency} secondData={toCurrency} />
              </Grid>
              {/* Right side */}
              <Grid xs={5.5} display="flex" justifyContent="center" flexDirection={'column'} gap={'16px'} >
                <ToCurrencyTextField onChange={handlingRightSideCurrencyClick} currency={toCurrency} />
                <ToAmountMoney firstCur={fromCurrency} secondCur={toCurrency} currentMoney={leftSideMoney} currDate={date} />
                <RightSideCurrencyBtn onClick={handlingRightSideCurrencyClick}></RightSideCurrencyBtn>
              </Grid>
            </Grid>
            {/* Cointains Date and Preview interBank rate */}
            <Stack direction='row' spacing={0} justifyContent="center" >
              <div className='secondContainer'>
                <p>Date</p>
                <DateInput date={date} onChange={handlingDateInput} />
              </div>
              <div className='thirdContainer'>
                <QuestionSVG />
                <MultiSelect />
                <p>Preview interbank rate</p>
              </div>
            </Stack>
            {/* Contains Printer */}
            <Stack direction='row' spacing={0} justifyContent="space-between" className='PrintSection'>
              <a href='#' className='dataLink'>Hide Advanced Currency Data</a>
              <PrintIcon />
            </Stack>
            {/* Description at the end of the Box */}
            <p id='description'>OANDA's currency calculator tools use OANDA Rates™, the touchstone FX rates compiled from leading market data contributors.</p>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
