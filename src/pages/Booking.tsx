import Stepwise from "../components/Stepwise.tsx";
import ProcessStep from "../components/ProcessStep.tsx";
import {useNavigate} from "react-router-dom";
import ConfirmationStep from "../components/ConfirmationStep.tsx";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { Box } from "@mui/material";
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import {useState} from "react";

export function Booking() {
    
    const navigate = useNavigate();
    dayjs.extend(calendar);
    const [date, setDate] = useState<Date>();
    
    return (
        <Stepwise
            title="Appointment Booking"
            steps={["Details", "Select Date"]}
            onComplete={() => navigate("/")}
        >
            <ProcessStep
                fields={[
                    { key: "name", label: "Name", type: "text", placeholder: "Alice Doe" },
                    { key: "phone", label: "Phone Number", type: "tel", placeholder: "123-456-1234",
                        validate: (v) => /^\d{3}-\d{3}-\d{4}$/.test(v) ? undefined : "Use format 123-456-7890" },
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
                <StaticDateTimePicker>
                    
                </StaticDateTimePicker>
            </Box>
            <ConfirmationStep
                title="Booking Confirmed"
                subtitle={"Appointment Booked for " + dayjs(date).format("dddd, MMMM, D, YYYY, h:mm A")}
            />
        </Stepwise>
    );
}