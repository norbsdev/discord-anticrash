#  discord-anticrash
  <p>
    <a href="https://www.npmjs.com/package/discord-anticrash"><img src="https://img.shields.io/npm/v/discord-anticrash" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/discord-anticrash"><img src="https://img.shields.io/npm/dt/discord-anticrash" alt="NPM downloads" /></a>
    <a href="https://www.npmjs.com/package/discord-anticrash"><img src="https://img.shields.io/snyk/vulnerabilities/npm/discord-anticrash?color=success&label=package%20vulnerabilities&logo=snyk&logoColor=red" alt="Vulnerabilities" /></a>

  </p>
  <p>
    <a href="https://www.npmjs.com/package/discord-anticrash"><img src="https://nodei.co/npm/discord-anticrash.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
  
## What is this? and how do I use it?

Discord-antiCrash is a npm package that helps prevent bot termination due to Uncaught/Unhandled errors made by your code. 

You can use it by simply doing the steps below.

>### Requirements
  `NodeJS`: 16.6.0 and up (for DiscordJS v13)
  <br></br>
`DiscordJS`: v13.8.0 (for v13) v12.5.3 (for v12)

>### Installation

`npm i discord-anticrash@latest`
If you do not have discordjs, read below:

for v13 `npm i discord.js@13.8.0` <br></br>
for v12 `npm i discord.js@12.5.3`

>### Type this in your main file
```js
const antiCrash = require('discord-anticrash')
const noCrashing = new antiCrash(client, {
  enableAntiCrash: 'true/false'
});
```

>### Examples
#### The discord.js v12 Example
```js
const Discord = require("discord.js");
const client = new Discord.Client();
const antiCrash = require('discord-anticrash')

const noCrash = new antiCrash(client, {
  enableAntiCrash: 'true'
});

client.login("token")
```
#### The discord.js v13 example
```js
const Discord = require("discord.js");
const client = new Discord.Client(
{intents:
[/**your intents*/]
});
const antiCrash = require('discord-anticrash')

const noCrash = new antiCrash(client, {
  enableAntiCrash: 'true'
});

client.login("token")
```
