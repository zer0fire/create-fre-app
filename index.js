const program = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')
const progress = require('progress')
const { promisify } = require('util')
const fs = require('fs')
const childProcess = require('child_process')
const process = require('process')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const readStat = promisify(fs.stat)
const figletPromisify = promisify(figlet)

async function main() {
    program.createCommand('test')
    program.createCommand('app')
    const text = await figletPromisify('command')
    console.log(chalk.green(text))
}
main()

// program.