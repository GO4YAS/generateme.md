// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadge = licenseName => {
    if (!licenseName) {
      return '';
    }
    if (licenseName.includes('MIT')) {
      licenseName = 'MIT';
    }
    if (licenseName.includes('GNU')) {
      licenseName = 'GNU_General_Public_v3.0';
    }
    if (licenseName.includes('Mozilla')) {
      licenseName = 'Mozilla_Public_2.0';
    }
    if (licenseName.includes('Unlicense')) {
      licenseName = 'The Unlicense';
    }
    return `
  ![license](https://img.shields.io/badge/License-${licenseName}-blue)`
  
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  const generateMeLicense = LicenseText => {
    if (!LicenseText) {
      return '';
    }
    return `# License
      
  ${LicenseText}
      `;
  };
  
  // create the badges section
  const generateMeBadges = badgesText => {
    if (!badgesText) {
      return '';
    }
    return `# Badges
      
  ${badgesText}
      `;
  };
  // create the features section
  const generateMeFeatures = featuresText => {
    if (!featuresText) {
      return '';
    }
    return `# Features
      
  ${featuresText}
      `;
  };
  // create the Contributing section
  const generateMeContributing = contributingText => {
    if (!contributingText) {
      return '';
    }
    return `# Contributing
      
  ${contributingText}
      `;
  };
  // create the tests section
  const generateMeTests = testsText => {
    if (!testsText) {
      return '';
    }
    return `# Tests
      
  ${testsText}
      `;
  };
  
  // create the table of contents section
  const Contents = tableOfContents => {
    if (tableOfContents === false) {
      return '';
    }
    return `# Table of Contents
      
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Questions](#questions)`;
  };
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  const Licensecontents = license => {
    if (!license) {
      return '';
    }
    return `* [License](#license)`
  }
  const Badgescontents = badges => {
    if (!badges) {
      return '';
    }
    return `* [Badges](#badges)`
  }
  const Featurescontents = features => {
    if (!features) {
      return '';
    }
    return `* [Features](#features)`
  }
  const Contributingcontents = contributing => {
    if (!contributing) {
      return '';
    }
    return `* [Contributing](#contributing)`
  }
  const Testscontents = tests => {
    if (!tests) {
      return '';
    }
    return `* [Tests](#tests)`
  }
  
  module.exports = generateMarkdown => {
    const { projectName, description, installation, usage, credits, github, email, ...notRequired } = generateMarkdown;
    //console.log(generateMarkdown);
  
    return `# ${projectName}
      ${licenseBadge(notRequired.license)}
  ${description}
  ${Contents(notRequired.confirmTableOfContents)}
  ${Licensecontents(notRequired.license)}
  ${Badgescontents(notRequired.badges)}
  ${Featurescontents(notRequired.features)}
  ${Contributingcontents(notRequired.contributing)}
  ${Testscontents(notRequired.tests)}
  # Installation
  ${installation}
  # Usage 
  ${usage}
  # Credits
  ${credits}
  # Questions
  [Contact Me](${email})
  [GitHub](https://github.com/${github})
  ${generateMeLicense(notRequired.license)}
  ${generateMeBadges(notRequired.badges)}
  ${generateMeFeatures(notRequired.features)}
  ${generateMeContributing(notRequired.contributing)}
  ${generateMeTests(notRequired.tests)}
  `;
  }