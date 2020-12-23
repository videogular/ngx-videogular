# Credits of this bash script: https://github.com/steveklabnik/automatically_update_github_pages_with_travis_example
#!/usr/bin/env bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

mv docs/ngx-videogular-demo/_book dist/docs/ngx-videogular-demo/docs
cd dist/docs/ngx-videogular-demo

git init
git config user.name "Jaime Oliveira"
git config user.email "jaime.amo18@gmail.com"

git remote add upstream "https://$GH_TOKEN@github.com/videogular/ngx-videogular.git"
git fetch upstream
git reset upstream/gh-pages

touch .

git add -A .
git commit -m "ci(GH-Pages): Rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages
