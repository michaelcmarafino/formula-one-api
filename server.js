const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())

const drivers = {
    "lewis hamilton": {
        championships: 7,
        championshipYears: [2008, 2014, 2015, 2017, 2018, 2019, 2020],
        wins: 103,
        podiums: 183,
        polePostions: 103,
    },
    "fernando alonso": {
        championships: 2,
        championshipYears: [2005, 2006],
        wins: 32,
        podiums: 98,
        polePostions: 22,
    },
    "max verstappen": {
        championships: 1,
        championshipYears: [2021],
        wins: 24,
        podiums: 65,
        polePostions: 14,
    },
    "sebastian vettel": {
        championships: 4,
        championshipYears: [2010, 2011, 2012, 2013],
        wins: 53,
        podiums: 122,
        polePostions: 57,
    },
    "michael schumacher": {
        championships: 7,
        championshipYears: [1994, 1995, 2000, 2001, 2002, 2003, 2004],
        wins: 91,
        podiums: 155,
        polePostions: 68,
    },
    unknown: {
        championships: "unknown",
        championshipYears: "unknown",
        wins: "unknown",
        podiums: "unknown",
        polePostions: "unknown",
    },
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api/:name", (req, res) => {
    const driverName = req.params.name.toLowerCase()
    if (drivers[driverName]) {
        res.json(drivers[driverName])
    } else {
        res.json(drivers["unknown"])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
