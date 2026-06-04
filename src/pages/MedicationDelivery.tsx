import Stepwise from "../components/Stepwise";
import dayjs from "dayjs";
import ConfirmationStep from "../components/ConfirmationStep.tsx";


export function MedicationDelivery() {
    return (
        <Stepwise>

            <ConfirmationStep
                title="Your Order has Been Placed"
                subtitle={"Expected Arrival: " + dayjs().calendar(dayjs().add(5, "days"))}
            />
        </Stepwise>
    );
}