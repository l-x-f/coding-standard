#!/usr/bin/env bash
set -e

git add .
git commit -m "$1"

git pull
git push

echo -e "\n\033[32m更新成功\033[0m"
