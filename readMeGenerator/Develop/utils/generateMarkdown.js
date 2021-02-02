// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
`# ${data.title}
<h2>About:</h2>
*repo: ${data.repoName}
*discription: ${data.discription}
*contributors: ${data.contributors}
*license: ${data.license}
*instilation: ${data.instilation}
*ready: ${data.ready}
<h2># Contact</h2>
*username: ${data.username}
*email: ${data.email}
`;
}

module.exports = generateMarkdown;
