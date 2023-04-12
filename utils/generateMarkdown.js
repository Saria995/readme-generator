// Function that returns a license badge based on which license is passed in
// If there is no license, it will return an empty string return an empty string
function renderLicenseBadge(license) {
  //console.log("checking if license exist in renderLicenseBadge function 1st line");
  console.log(license);
  if (!license) {
    return "";
  }

  let badge = "";

  switch (license) {
    case "MIT":
      badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "ISC":
      badge = "https://img.shields.io/badge/License-ISC-blue.svg";
      break;
    case "MS-PL":
      badge = "https://img.shields.io/badge/License-MS--PL-brightgreen.svg";
      break;
    case "LGPL":
      badge = "https://img.shields.io/badge/License-LGPL_v3-blue.svg";
      break;
    default:
      return "";
  }

  return badge;
}

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  switch (license) {
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
  let tableOfContents = '';
  data.tableOfContents.forEach(item => {
    tableOfContents += `* [${item}](#${item.toLowerCase().replace('-')})\n`;
  });

  return `# ${data.title}

  # Description
  ${data.description}

  # Table of Contents
  
  ${tableOfContents}

  ## Installation
  The following necessary dependencies must be installed to run the application ${data.installation}

  ## Usage
  Languages/Technologies used in this functionality include:, ${data.usage}
  ${renderLicenseSection(data.license)}
  [![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})\n\n

  ## Contributing
  Contributors: ${data.contributing}<br>
  Creator: ${data.name}

  ## Tests
  The following is required to run the test: ${data.test}

  ## Questions
  If you have any questions about the repo, open an issue or contact:<br>
  GitHub: https://github.com/${data.creator};<br>
  Email: ${data.email};

`;
}

module.exports = generateMarkdown;