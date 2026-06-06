import Stepwise from "../components/Stepwise.tsx";
import ProcessStep from "../components/ProcessStep.tsx";
import {useNavigate} from "react-router-dom";
import ConfirmationStep from "../components/ConfirmationStep.tsx";
import dayjs, {Dayjs} from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { Box } from "@mui/material";
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import {useState, useEffect} from "react";
import {LocalizationProvider, type TimeView} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

export function Booking() {

    const navigate = useNavigate();
    dayjs.extend(calendar);
    const [date, setDate] = useState<Dayjs>(dayjs());

    const [allFilled, setAllFilled] = useState<boolean>(false);

    useEffect(() => {
        if (date) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setAllFilled(true);
        }
    }, [date]);

    const isTimeEnabled = (timeValue: Dayjs) => {

        const ts = timeValue.valueOf();

        let h = ts;
        h = ((h >>> 16) ^ h) * 0x45d9f3b;
        h = ((h >>> 16) ^ h) * 0x45d9f3b;
        h = (h >>> 16) ^ h;

        return Math.abs(h);
    }
    
    const availability = (timeValue: Dayjs, view: TimeView): boolean => {
        if (view === "hours") {
            return availability(timeValue.hour(timeValue.hour()).minute(0).second(0).millisecond(0), "minutes")
                && availability(timeValue.hour(timeValue.hour()).minute(30).second(0).millisecond(0), "minutes");
        }
        return isTimeEnabled(timeValue) % 2 === 0
    };

    const nonAvailableDays = (timeValue: Dayjs) => isTimeEnabled(timeValue) % 15 === 0;
    
    const handleStep = (isLast: boolean) => {
        if (isLast) {
            navigate("/");
            return;
        }
        setAllFilled(false);
    }

    const canProceed = (step: number) => {
        switch (step) {
            case 0: return allFilled;
            case 1: return date.isAfter(date.hour(7).minute(59)) && date.isBefore(date.hour(17)) && !availability(date, "minutes");
            default: return true;
        }
    }

    return (
        <Stepwise
            title="Appointment Booking"
            steps={["Details", "Select Date", "Confirmation"]}
            canProceed={canProceed}
            onStep={handleStep}
        >
            <ProcessStep
                fields={[
                    { key: "name", label: "Name", type: "text" },
                    { key: "phone", label: "Phone Number", type: "tel" },
                    { key: "email", label: "Email Address", type: "email" },
                    { key: "reason", label: "Reason for Visit", type: "text" },
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