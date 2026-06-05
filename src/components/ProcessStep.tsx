import { Box, MenuItem, TextField } from "@mui/material";
import { useState, useEffect } from "react";

interface BaseField {
    key: string;
    label: string;
    required?: boolean;
}

interface TextField_ extends BaseField {
    type: "text" | "email" | "tel" | "number" | "password";
    placeholder?: string;
    validate?: (value: string) => string | undefined;
}

interface SelectField extends BaseField {
    type: "select";
    options: { label: string; value: string }[];
}

export type FieldConfig = TextField_ | SelectField;

interface ProcessStepProps {
    fields: FieldConfig[];
    setAllFilled: (arg0: boolean) => void;
}

export default function ProcessStep({ fields, setAllFilled, }: ProcessStepProps) {
    const [fieldStates, setFieldStates] = useState<Map<string, boolean>>(new Map());

    useEffect(() => {
        const allFieldsFilled = fields.every(field => fieldStates.get(field.key) === true);
        setAllFilled(allFieldsFilled && fields.length > 0);
    }, [fieldStates, fields, setAllFilled]);

    const handleChange = (fieldKey: string, value: string) => {
        setFieldStates(prev => {
            const newMap = new Map(prev);
            newMap.set(fieldKey, value.trim() !== "");
            return newMap;
        });
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {fields.map((field) => {

                if (field.type === "select") {
                    return (
                        <TextField
                            key={field.key}
                            select
                            label={field.label}
                            fullWidth
                            variant="standard"
                            defaultValue=""
                            onChange={(e) => handleChange(field.key, e.target.value)}
                        >
                            {field.options.map((opt) => (
                                <MenuItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    );
                }

                return (
                    <TextField
                        key={field.key}
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        fullWidth
                        variant="standard"
                        onChange={(e) => handleChange(field.key, e.target.value)}
                    />
                );
            })}
        </Box>
    );
}