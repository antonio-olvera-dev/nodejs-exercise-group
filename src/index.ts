import  express  from "express";
import { usersRouter } from "./routes/users.routes";
import { productRoutes } from './routes/products.routes';
import { providerRoutes } from "./routes/providers.routes";
const app = express();

app.set('port', 3000);

app.listen(app.get('port'),()=>{

//Load the file routes users
app.use('/products', productRoutes.router);
app.use('/providers', providerRoutes.router);

console.log(`servidor levantado en http://localhost:${app.get('port')}`);


});


app.use("/users", usersRouter);