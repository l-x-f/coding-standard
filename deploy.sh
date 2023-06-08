#!/usr/bin/env sh

set -e

# build
npm run build

cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/l-x-f/coding-standard.git/ master:gh-pages

# local
echo "local deploy..."
cp -rf ./ C:/nginx/html/standard/coding-standard

cd -
