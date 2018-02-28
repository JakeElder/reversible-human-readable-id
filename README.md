# Reversible-human-readable-id
[![Build Status](https://travis-ci.org/dark0dave/reversible-human-readable-id.svg?branch=master)](https://travis-ci.org/dark0dave/reversible-human-readable-id)
[![Coverage Status](https://coveralls.io/repos/github/dark0dave/reversible-human-readable-id/badge.svg?branch=master)](https://coveralls.io/github/dark0dave/reversible-human-readable-id?branch=master)

Takes a string, converts it to a 128 bit hash,
converts the hash to a freindly name and stores the result in a
key value pair locally.
Making searching for both key value pair
simple and easy.

Thanks to [human-readable](https://www.npmjs.com/package/human-readable-ids)
and [docker](https://raw.githubusercontent.com/docker/docker-ce/4db928a87dfbff4f97f30e31f3178f99147c2163/components/engine/pkg/namesgenerator/names-generator.go)
for the assets and [local](https://www.npmjs.com/package/local-storage)
for storing locally.

## Installation

npm
````
npm install reversible-human-readable-id
````

yarn
````
yarn add reversible-human-readable-id
````

## Example

Create name
```js
getHR('9028j9ko39i53klf');
'swift-engelbart-grasshopper'
```

Fetch name
```js
getHR('9028j9ko39i53klf');
'swift-engelbart-grasshopper'
getId('swift-engelbart-grasshopper');
'9028j9ko39i53klf'
```
