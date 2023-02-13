function getSeason() {
    let year = new Date().getFullYear();

    const dates = {
        pride: [new Date(`${year}-6-1`), new Date(`${year}-6-31`)],
        halloween: [new Date(`${year}-10-25`), new Date(`${year}-11-1`)],
        trans: [new Date(`${year}-11-13`), new Date(`${year}-11-19`)],
        christmas: [new Date(`${year}-12-1`), new Date(`${year}-12-26`)],
        aprilFools: [new Date(`${year}-04-01`), new Date(`${year}-04-01`)]
    }
    const filePaths = {
        normal: "normal",
        halloween: "seasonal/halloween",
        christmas: "seasonal/christmas",
        pride: "seasonal/pride",
        trans: "seasonal/trans",
        aprilFools: "seasonal/aprilFools"
    }

    let current = new Date();
    let currentSeason = Object.keys(dates).find((str) => current >= dates[str][0] && current <= dates[str][1]) || "normal";
    let daysIntoSeason = 0;
    if (currentSeason !== "normal") {
        daysIntoSeason = Math.floor((new Date().getTime() - dates[currentSeason][0].getTime()) / (1000 * 60 * 60 * 24))
    }

    return {
        season: currentSeason,
        filePath: filePaths[currentSeason],
        daysIntoSeason: daysIntoSeason
    }
}

const Season = async (req, res) => {
    return res.status(200).send(getSeason());
}

export default Season;
export { getSeason };
