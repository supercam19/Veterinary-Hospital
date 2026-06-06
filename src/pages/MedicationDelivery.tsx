import Stepwise from "../components/Stepwise";
import dayjs from "dayjs";
import ConfirmationStep from "../components/ConfirmationStep.tsx";
import ProcessStep from "../components/ProcessStep.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


export function MedicationDelivery() {

    const [allFilled, setAllFilled] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleStep = (isLast: boolean) => {
        if (isLast) {
            navigate("/");
            return;
        }
        setAllFilled(false);
    }

    const canProceed = (step: number) => {
        return step === 3 || allFilled;
    }

    return (
        <Stepwise
            title="Medication Request Form"
            steps={["Personal Details", "Medication Details", "Payment Details", "Confirmation"]}
            canProceed={canProceed}
            onStep={handleStep}
        >
            <ProcessStep
                fields={[
                    { key: "name", label: "Name", type: "text" },
                    { key: "phone", label: "Phone Number", type: "tel" },
                    { key: "email", label: "Email Address", type: "email" },
                    { key: "species", label: "Pet Species", type: "select", options: [
                        { label: "Dog", value: "dog" },
                        { label: "Cat", value: "cat" },
                        { label: "Bird", value: "bird" },
                        { label: "Reptile", value: "reptile" },
                        { label: "Other", value: "other" },
                    ] },
                ]}
                setAllFilled={setAllFilled}
            />
            <ProcessStep
                fields={[
                    { key: "medication", label: "Medication Name", type: "text" },
                    { key: "quantity", label: "Quantity (Each bottle contains one month of medication)", type: "number" },
                ]}
                setAllFilled={setAllFilled}
            />
            <ProcessStep
                fields={[
                    { key: "cardNumber", label: "Card Number", type: "tel" },
                    { key: "expiryDate", label: "Expiry Date", type: "text", placeholder: "MM/YY" },
                    { key: "cvv", label: "CVV", type: "tel"},
                    { key: "address", label: "Delivery Address", type: "text" },
                ]}
                setAllFilled={setAllFilled}
            />
            <ConfirmationStep
                title="Delivery Confirmed"
                subtitle={"Delivery expected to arrive on " + dayjs().add(3, "day").format("dddd, MMMM, D, YYYY")}
            />
        </Stepwise>
    );
}