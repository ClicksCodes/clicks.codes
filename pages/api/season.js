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

    return {
        season: currentSeason,
        filePath: filePaths[currentSeason]
    }
}

const Season = async (req, res) => {
    return res.status(200).send(getSeason());
}

export default Season;
export { getSeason };
