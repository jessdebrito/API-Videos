import { app } from "./app";
const PORT = process.env.PORT || 3001;
app.listen(PORT,() => {
    console.log("API successfully started at port 3001")
})