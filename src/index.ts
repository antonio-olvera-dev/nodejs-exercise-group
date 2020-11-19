import  express  from "express";
import { usersRouter } from "./routes/users.routes";
const app = express();

app.set('port', 3000);

app.listen(app.get('port'),()=>{

console.log(`servidor levantado en http://localhost:${app.get('port')}`);


});


app.use("/users", usersRouter);