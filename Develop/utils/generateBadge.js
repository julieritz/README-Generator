const { makeBadge, ValidationError } = require("badge-maker")

const generateBadge = (licensetype) => {
    const format = {
        label: "license",
        message: licensetype,
        color: 'green',
    }
    const svg = makeBadge(format)
    return svg
}

module.exports = generateBadge