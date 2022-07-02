echo "================== Temporarily changing directory to '$(dirname "$0")'"
cd "$(dirname "$0")"

echo "================== Building pre-rendered application"
date=$(date +"%b %d, %I:%M%p")
npm run build

echo "================== Pushing dist/client changes to submodule"
cd dist/client
git checkout .nojekyll # Avoid deleting the .nojekyll file
git add -A
git commit -m "Updated build | ${date}"
git push

echo "================== Pushing dist changes to parent module"
cd -
git add dist
git commit -m "Updated build | ${date}"
git push