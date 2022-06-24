const { EventEmitter } = require(`events`);
const colors = require(`colors`);
class antiCrash extends EventEmitter {
  antiCrash_Emit = this
  constructor(client, options) {
    super();
    this.client = client;
    this.options = options;
    client.on(`ready`, async () => {
      console.log(`> [discord-anticrash loaded]`.green)
      if (!options.enableAntiCrash) {
        console.log(`> [discord-anticrash] : Option antiCrash is blank / has no value!`.red)
        process.exit(1);
      } else if (options.enableAntiCrash == "false") {
        console.log(`> [discord-anticrash] : Option enableAntiCrash is disabled, and [discord-anticrash] will not be preventing bot termination`.red)
      } else if (options.enableAntiCrash == "true") {
        catching()
      } else {
        console.log(`> [discord-anticrash] : Option enableAntiCrash is not valid!`.red)
        process.exit(1);
      }
    });

    async function catching() {
      console.log(`> [discord-anticrash] : [discord-anticrash] is now preventing bot termination.`.blue)
      process.on(`unhandledRejection`, (reason, p) => {
        console.log(`> [discord-anticrash] : Unhandled Rejection/Catch`.red);
        console.log(reason, p);
      });
      process.on("uncaughtException", (err, origin) => {
        console.log(`> [discord-anticrash] : Uncaught Exception/Catch`.red);
        console.log(err, origin);
      });
      process.on(`uncaughtExceptionMonitor`, (err, origin) => {
        console.log(`> [discord-anticrash] Uncaught Exception/Catch (Monitor)`.red);
        console.log(err, origin);
      });
      process.on(`multipleResolves`, (type, promise, reason) => {
        console.log(`> [discord-anticrash] : Multiple Resolves`.red);
        console.log(type, promise, reason);
      })
    }
  }
}
module.exports = antiCrash;