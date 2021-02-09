// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "none") {
        return "";
    }
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)]`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# Project Title: ${data.title}
## About:
- repo: ${data.repoName}
- discription: ${data.discription}
- license: ${renderLicenseBadge(data.license)}
- installation: ${data.installation}
*ready: ${data.ready}
## Contact:
- contributors: ${data.contributors}
- username: ${data.username}
- email: ${data.email}
`;
}

module.exports = generateMarkdown;
