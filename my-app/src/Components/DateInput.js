import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';

export default function DateInput({ date, onChange }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker defaultValue={dayjs(date)}
                onChange={(newValue) => {
                    const formattedDate = dayjs(newValue).format('YYYY-MM-DD');
                    onChange(formattedDate);
                }} />
        </LocalizationProvider>
    )
}