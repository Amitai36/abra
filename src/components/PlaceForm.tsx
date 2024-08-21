import { z } from "zod";
import { Button, Grid, TextField, Typography } from "@mui/material"
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { placeSchema, typeOption } from "../modules/zodSchema";
import SelectComponent from "./SelectComponent";

type FormSchema = z.infer<typeof placeSchema>;
const optionType = typeOption


function PlaceForm() {
    const { register, formState: { errors }, control, handleSubmit } = useForm<FormSchema>({
        resolver: zodResolver(placeSchema)
    })
    console.log(errors)
    const onSubmit: SubmitHandler<FormSchema> = (event) => {
        console.log(event)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} textAlign={"center"}>
                <Grid item xs={12}>
                    <TextField {...register("name", { required: true })} label={"name"} color={errors.name && "error"} />
                    {errors.name && <Typography color={"red"}>{errors.name.message}</Typography>}
                </Grid>
                <Grid item xs={12}>
                    <TextField color={errors.address && "error"} {...register("address", { required: true })} label={"address"} />
                    {errors.address && <Typography color={"red"}>{errors.address.message}</Typography>}
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="type"
                        rules={{ required: true }}
                        control={control}
                        render={({ field }) => (
                            <SelectComponent
                                {...field}
                                autoFocus={!!errors.type}
                                formColor={"info"}
                                lable="Select type"
                                option={optionType}
                            />
                        )}
                    />
                    {errors.type && <Typography color={"red"}>{errors.type.message}</Typography>}
                </Grid>
                <Grid>
                    <Button type="submit">Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default PlaceForm
