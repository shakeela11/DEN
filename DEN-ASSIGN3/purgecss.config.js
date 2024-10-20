module.exports = {
    content: ['./**/*index.html', './**/*script.js'], // Specify the files PurgeCSS should scan
    css: ['./styles.css'],             // Specify the CSS file(s) you want to purge
    output: './dist/results',                     // Specify the output directory for purged CSS
  }
