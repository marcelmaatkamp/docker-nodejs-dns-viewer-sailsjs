#!/bin/bash
docker run -ti -p 1337:1337 --link mongodb:mongodb marcelmaatkamp/nodejs-dns-viewer-sailsjs:lastest
