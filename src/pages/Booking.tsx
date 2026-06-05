import Stepwise from "../components/Stepwise.tsx";
import ProcessStep from "../components/ProcessStep.tsx";
import {useNavigate} from "react-router-dom";
import ConfirmationStep from "../components/ConfirmationStep.tsx";
import dayjs, {Dayjs} from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { Box } from "@mui/material";
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import {useState, useEffect} from "react";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

export function Booking() {

    const navigate = useNavigate();
    dayjs.extend(calendar);
    const [date, setDate] = useState<Dayjs>();

    const [allFilled, setAllFilled] = useState<boolean>(false);

    useEffect(() => {
        if (date) {
            setAllFilled(true);
        }
    }, [date]);

    const rng = (timeValue: Dayjs) => {
        const ts = timeValue.valueOf();

        let h = ts;
        h = ((h >>> 16) ^ h) * 0x45d9f3b;
        h = ((h >>> 16) ^ h) * 0x45d9f3b;
        h = (h >>> 16) ^ h;

        return Math.abs(h);
    }
    
    const availability = (timeValue: Dayjs) => rng(timeValue) % 2 === 0;

    const nonAvailableDays = (timeValue: Dayjs) => rng(timeValue) % 15 === 0;
    
    const handleStep = (isLast: boolean) => {
        if (isLast) {
            navigate("/");
            return;
        }
        setAllFilled(false);
    }
    
    return (
        <Stepwise
            title="Appointment Booking"
            steps={["Details", "Select Date", "Confirmation"]}
            canProceed={() => allFilled}
            onStep={handleStep}
        >
            <ProcessStep
                fields={[
                    { key: "name", label: "Name", type: "text", placeholder: "Alice Doe" },
                    { key: "phone", label: "Phone Number", type: "tel", placeholder: "123-456-1234", },
                    { key: "email", label: "Email Address", type: "email" },
                    { key: "address", label: "Home Address", type: "text" },
                ]}
                setAllFilled={setAllFilled}
            />
            <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDateTimePicker
                        timeSteps={{minutes: 30}}
                        minTime={dayjs().hour(8)}
                        maxTime={dayjs().hour(16).minute(30)}
                        minDate={dayjs()}
                        value={date}
                        onChange={(value) => setDate(dayjs(value))}
                        shouldDisableTime={availability}
                        shouldDisableDate={nonAvailableDays}
                    >
                        
                    </StaticDateTimePicker>
                </LocalizationProvider>
            </Box>
            <ConfirmationStep
                title="Booking Confirmed"
                subtitle={"Appointment Booked for " + dayjs(date).format("dddd, MMMM, D, YYYY, h:mm A")}
            />
        </Stepwise>
    );
}