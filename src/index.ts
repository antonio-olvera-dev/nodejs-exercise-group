import  express  from "express";
import { usersRouter } from "./routes/users.routes";
import { productRoutes } from './routes/products.routes';
import { providerRoutes } from "./routes/providers.routes";
import { combinateRoutes } from "./routes/combinate.routes";
const app = express();

app.set('port', 3000);


//Load the file routes users
app.use('/products', productRoutes.router);
app.use('/providers', providerRoutes.router);
app.use("/users", usersRouter);
app.use("/combinate", combinateRoutes.router);

app.listen(app.get('port'),()=>{
console.log(`servidor levantado en http://localhost:${app.get('port')}`);
});


