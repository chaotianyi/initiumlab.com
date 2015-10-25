/**
 * Create a new showcase file from a template
 * @type {string}
 */

// Set up environment variables
var TEMPLATE_PATH = 'scaffolds/showcase.md'
var TITLE_PLACEHOLDER_REGEX = /<TITLE>/g
var PROJECT_CODE_REGEX = /<PROJECT_CODE>/g
var PROJECT_CODE_ESCAPE_REGEX = /\s/g
var PATH_SEPARATOR = '-'
var SHOWCASE_DIR = 'source/showcases'

var fs = require('fs')

// Extract the title from arguments
var argument_array = process.argv[2].split(':')
var title = argument_array[argument_array.length - 1]
var projectCode = title.replace(PROJECT_CODE_ESCAPE_REGEX, PATH_SEPARATOR)

// Replace placeholders with actual contents
var template = String(fs.readFileSync(TEMPLATE_PATH))
var outputText = template.replace(TITLE_PLACEHOLDER_REGEX, title)
                         .replace(PROJECT_CODE_REGEX, projectCode)

// Determine the proper prefix for showcase file, which should has char-code prior to the previous one
var existingShowcaseSources = fs.readdirSync(SHOWCASE_DIR)
var previousPrefix = existingShowcaseSources.sort()[0][0]
var currentPrefix = String.fromCharCode(previousPrefix.charCodeAt(0) - 1)

// Determine path for the new showcase source file
var showcasePath = SHOWCASE_DIR + '/' + currentPrefix + PATH_SEPARATOR + projectCode + '.md'

// Calculate possible duplicate path
var potentialPreviousPath = SHOWCASE_DIR + '/' + previousPrefix + PATH_SEPARATOR + projectCode + '.md'

// Check if the path is occupied --
// if so, report error and halt;
// if not, create the file and fill in the content

try {
  fs.accessSync(potentialPreviousPath)
  // File exist, report error
  console.log('\n', potentialPreviousPath, 'already exists...No file is created.', '\n')
} catch (error) {
  // File not exist; can write
  fs.writeFileSync(showcasePath, outputText)
  console.log('\n', 'Created', showcasePath, '\n')
}
