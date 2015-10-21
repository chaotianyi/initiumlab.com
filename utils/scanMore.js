/**
 * Scan the Markdown files under source/_posts for summary tags like <!-- more -->
 * @type {exports|module.exports}
 */

var fs = require('fs')
var path = require('path')

var POST_DIR = 'source/_posts'
var fileList = fs.readdirSync(POST_DIR).sort().reverse()
var i, filePath, content

/**
 * Detect if a text contains summary tags
 * @param text
 * @returns {boolean}
 */
function hasMoreTag (text) {
  "use strict";

  var moreTags = [
    '<!-- more -->',
    '<!--more-->'
  ]

  var i;

  for (i = 0; i < moreTags.length; i += 1) {
    if (text.indexOf(moreTags[i]) > -1) {
      return true
    }
  }

  return false
}

console.log('\nScanning for <!-- more --> tags...\n')

var filePathWithTag = []
var filePathNoTag = []

/**
 * Scan for tags
 */
for (i = 0; i < fileList.length; i += 1) {
  filePath = POST_DIR + '/' + fileList[i]
  if (path.extname(filePath) === '.md') {
    content = fs.readFileSync(filePath)
    if (hasMoreTag(content)) {
      filePathWithTag.push(filePath)
    } else {
      filePathNoTag.push(filePath)
    }
  }
}

/**
 * Print output
 */
if (filePathNoTag.length > 0) {
  /**
   * At least one file lacks summary tag; give detailed output
   */
  console.log('\n[INFO] These files has summary tags:\n')
  for (i = 0; i < filePathWithTag.length; i += 1) {
    console.log('  ', filePathWithTag[i])
  }
  console.log('\n[WARNING] The following source files has no summary tag:\n')
  for (i = 0; i < filePathNoTag.length; i += 1) {
    console.log('  ', filePathNoTag[i], '\n')
  }
} else {
  /**
   * All files have summary tag. Just print one notice
   */
  console.log('Scanned ' + String(filePathWithTag.length) + ' source files...')
  console.log('[OK] All source files seem to have summary tag!\n')
}
