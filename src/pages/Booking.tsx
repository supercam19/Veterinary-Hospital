import Stepwise from "../components/Stepwise.tsx";
import ProcessStep from "../components/ProcessStep.tsx";
import {useNavigate} from "react-router-dom";
import ConfirmationStep from "../components/ConfirmationStep.tsx";
import dayjs, {Dayjs} from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { Box } from "@mui/material";
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import {useState} from "react";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

export function Booking() {
    
    const navigate = useNavigate();
    dayjs.extend(calendar);
    const [date, setDate] = useState<Dayjs>();
    
    const availability = (timeValue: Dayjs) => {
        let c = timeValue.year() * 7;
        c += timeValue.month() * 11;
        c += timeValue.day() * 13;
        c += timeValue.hour() * 17;
        c += timeValue.minute() * 23;
        return c % 2 === 0;
    }
    
    const handleStep = (finished: boolean) => {
        
    }
    
    return (
        <Stepwise
            title="Appointment Booking"
            steps={["Details", "Select Date", "Confirmation"]}
            onComplete={handleStep}
        >
            <ProcessStep
                fields={[
                    { key: "name", label: "Name", type: "text", placeholder: "Alice Doe" },
                    { key: "phone", label: "Phone Number", type: "tel", placeholder: "123-456-1234", },
                    { key: "email", label: "Email Address", type: "email" },
                    { key: "address", label: "Home Address", type: "text" },
                ]}
            />
            <ProcessStep
                fields={[
                    { key: "petName", label: "Pet Name", type: "text"},
                    { key: "species", label: "Species", type: "select", options: [
                            { label: "Dog", value: "dog" },
                            { label: "Cat", value: "cat" },
                            { label: "Other", value: "other" },
                        ]},
                ]}
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