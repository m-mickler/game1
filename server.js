import pg from "pg";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ...(process.env.NODE_ENV === "production"
    ? {
        ssl: {
            rejectUnauthorized: false
        }
    }
    : {}),
})

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

const errorHandler1 = (req, res, next) => {
    res.sendStatus(404);
    next();
};

app.get("/api/players/:username", (req, res, next) => {
    const username = req.params.username;
    pool.query("SELECT * FROM players WHERE username = $1", [username]).then((data) => {
        console.log(data.rows[0]);
        if(data.rows[0]){
            res.send(data.rows[0]);
        } else {
            res.sendStatus(404);
        }  
    }).catch(next);
});

app.patch("/api/players/:username", async (req, res, next) => {
    const { username } = req.params;
    const { highscore } = req.body;
    const result = await pool.query(
        "UPDATE players SET highscore=$1 WHERE username=$2 RETURNING *",
        [highscore, username]
    ).catch(next);
    res.send(result.rows[0]);
});

app.post("/api/players", (req, res, next) => {
    const newPlayer = req.body;
    console.log(req.body);
    if (newPlayer.username) {
        pool.query(`INSERT INTO players (username) VALUES ($1);`,
        [newPlayer.username]
        ).then((data) => {
            res.status(201).send(newPlayer);
        }).catch(next)
    } else {
        res.sendStatus(400);
    }
});

app.use(errorHandler1);
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(`${PORT}`, () => {
    console.log(`listening on port ${PORT}`)
});