const {exp, sum, index, range} = require('mathjs')
const numRows = require('./numRows')
const row = require('./row')
const numColumns = require('./numColumns')
const normalizeByRow = require('./normalizeByRow')

module.exports = matrix => {
  matrix = matrix.map(value => exp(value))
  return normalizeByRow(matrix, sum)
}