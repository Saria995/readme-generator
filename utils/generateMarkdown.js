const fs = require('fs');
// Function that returns a license badge based on which license is passed in
// If there is no license, it will return an empty string return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  switch (license.toLowerCase()) {
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "ISC":
      return "https://img.shields.io/badge/License-ISC-blue.svg";
    case "MS-PL":
      return "https://img.shields.io/badge/License-MS--PL-brightgreen.svg";
    case "LGPL":
      return "https://img.shields.io/badge/License-LGPL_v3-blue.svg";
    default:
      return "";
  }
}

// This code first generates the badge URl using the renderLicenseBadge function, then check if the URL is empty, it's found then the license link will be generated using the renderLicenseLink
const badge = renderLicenseBadge(data.license);

if (badge) {
  markdown += `[![License](${badge})](${renderLicenseLink(data.license)})\n\n`;
}

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  switch (license.toLowerCase()) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    case "MS-PL":
      return "https://opensource.org/licenses/MS-PL";
    case "LGPL":
      return "https://opensource.org/licenses/LGPL-3.0";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `## Licenses
    This project is covered under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Description
  ${data.description}
  # Table of Contents
  ${data.tableOfContents}

  ## Installation
  The following necessary dependencies must be installed to run the application ${data.installation}

  ## Usage
  In order to use this application, ${data.usage}
  ${renderLicenseSection(data.license)}

  ## Contributing
  Contributors: ${data.contributing}
  Creator: ${data.name}

  ## Tests
  The following is required to run the test: ${data.test}

  ## Questions
  If you have any questions about the repo, open an issue or contact:
  GitHub: https://github.com/${data.creator}/n
  Email: ${data.email}/n

`;
}

module.exports = generateMarkdown;
