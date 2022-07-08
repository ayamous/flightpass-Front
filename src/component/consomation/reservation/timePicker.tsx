import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';


let dates = [
    {
        "startDate": "2022-03-20",
        "endDate": "2022-03-22",
        "referenceBlackout": "a",
        "flightPassConfigs_Id": null
    },
    {
        "startDate": "2022-03-24",
        "endDate": "2022-03-25",
        "referenceBlackout": "a",
        "flightPassConfigs_Id": null
    },
    {
        "startDate": "2022-03-28",
        "endDate": "2022-03-28",
        "referenceBlackout": "a",
        "flightPassConfigs_Id": null
    }
]
const dayToTravel = 1
const TimePickerIndex = () => {
    const [dateF, setDateF] = useState<{ startDate: Date, endDate: Date }[]>([])
    useEffect(() => {

        let CdateF: { startDate: Date, endDate: Date }[] = [];
        CdateF = dates.map((date) => {
            return {
                startDate: new Date(date.startDate),
                endDate: new Date(date.endDate)
            }
        })
        setDateF(CdateF)
    }, [])
    function disableWeekends(date: any) {
        let currentDay = new Date()
        currentDay.setHours(0, 0, 0, 0);
        if (dateF != []) {
            let index = 0;
            while (index < dateF.length) {
                if ((dateF[index].startDate <= date && dateF[index].endDate >= date)) {
                    return true
                }
                index++
            }
            if (index == dateF.length) {
                return false
            }
        }
        return false
    }


    const [value, setValue] = useState<Date | null>(null);
    return (
        <div className='container mt-5 pt-5'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Basic example"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    shouldDisableDate={disableWeekends}
                />
            </LocalizationProvider>
        </div>
    )

}
export default TimePickerIndex 