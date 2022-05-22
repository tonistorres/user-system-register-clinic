import app from "./app"; 
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT_APP || 3002, () => console.log(`running at: http://localhost:3002`));