function daysIntoSeason(date) {
    return Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
}

function daysSinceDate(date) {
    // If the date is after today, make it last year
    if (date > new Date()) {
        date.setFullYear(date.getFullYear() - 1);
    }
    return Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
}

function getSeason() {
    let year = new Date().getFullYear();

    const dates = {
        pride: [new Date(`${year}-6-1`), new Date(`${year}-6-31`)],
        halloween: [new Date(`${year}-10-25`), new Date(`${year}-11-1`)],
        trans: [new Date(`${year}-11-13`), new Date(`${year}-11-19`)],
        christmas: [new Date(`${year}-12-1`), new Date(`${year}-12-26`)],
        aprilFools: [new Date(`${year}-04-01`), new Date(`${year}-04-01`)],
        fake: [new Date(`${year}-01-01`), new Date(`${year}-01-01`)]
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
    let currentDaysIntoSeason;
    if (currentSeason !== "normal") {
        currentDaysIntoSeason = daysIntoSeason(dates[currentSeason][0])
    } else {
        // Calculate how many days it has been since each season ended
        let days = Object.keys(dates).map((str) => daysSinceDate(dates[str][1]))
        currentDaysIntoSeason = Math.min(...days);
    }

    return {
        season: currentSeason,
        filePath: filePaths[currentSeason],
        daysIntoSeason: currentDaysIntoSeason
    }
}

const Season = async (req, res) => {
    return res.status(200).send(getSeason());
}

export default Season;
export { getSeason };
