const express = require('express');

const taskRoutes = require("./routes/tasks.routes");

const app = express();
app.use(express.json());

app.use("/api/tasks",taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('server running on https:localhost:'+PORT);
}) 