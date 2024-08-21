import { z } from "zod";
import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material"
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { placeSchema, typeOption } from "../modules/zodSchema";
import SelectComponent from "./SelectComponent";
import { useAddPlace } from "../api/usePlace";
import { toast } from "react-toastify";


//use zod to take type of the schema
type FormSchema = z.infer<typeof placeSchema>;
const optionType = typeOption

//create a form to the open dialog
function PlaceForm() {
    const { register, formState: { errors }, control, handleSubmit } = useForm<FormSchema>({
        resolver: zodResolver(placeSchema)
    })
//mutate add place req post
    const { mutate, isLoading } = useAddPlace()
    const onSubmit: SubmitHandler<FormSchema> = (event) => {
        mutate({ ...event,  }, {onSuccess:()=>{
            toast("there is new place :)")
        }})
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} textAlign={"center"}>
                <Grid item xs={12}>
                    <TextField fullWidth {...register("Name", { required: true })} label={"Name"} color={errors.Name && "error"} />
                    {errors.Name && <Typography color={"red"}>{errors.Name.message}</Typography>}
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth color={errors.Address && "error"} {...register("Address", { required: true })} label={"Address"} />
                    {errors.Address && <Typography color={"red"}>{errors.Address.message}</Typography>}
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="Type"
                        rules={{ required: true }}
                        control={control}
                        render={({ field }) => (
                            <SelectComponent
                                {...field}
                                autoFocus={!!errors.Type}
                                formColor={"info"}
                                lable="Select type"
                                option={optionType}
                            />
                        )}
                    />
                    {errors.Type && <Typography color={"red"}>{errors.Type.message}</Typography>}
                </Grid>
                <Grid xs={12} item>
                    {isLoading?<CircularProgress disableShrink />:<Button variant="contained" type="submit">Submit</Button>}
                </Grid>
            </Grid>
        </form>
    )
}

export default PlaceForm
