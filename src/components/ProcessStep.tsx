import { Box, MenuItem, TextField } from "@mui/material";

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
}

export default function ProcessStep({ fields, }: ProcessStepProps) {
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
                    />
                );
            })}
        </Box>
    );
}