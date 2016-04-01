# Miniflux

A very tiny Flux implementation.

* Stores are pretty much like in Facebook's 'vanilla' Flux. They can have names, for debugging.
* Action creators are bundled into mutating API objects ("mutators"), which are tied to stores.
* There are no actions.
* It is possible to intercept all 'actions' (for logging or recording or whatever) by wrapping all functions of a mutator. I have some proof of concept code for this but have not actually used it yet.
* There is no dispatcher.
* There is no dependency management between stores.
* No state management. This is for when you have very simple state. It does not replace Redux or anything else.

Written using ES2015 JavaScript. Uses the events package from NPM to handle events.

## TO DO

* Turn into a UMD module.
* Turn into an NPM package.
* Make an ES5 version.
* Write tests.
* Write documentation.

## License

MIT.
