# echo "================== Temporarily changing directory to '$(dirname "$0")'"
# cd "$(dirname "$0")"

# echo "================== Adding organization repository as submodule"
# git submodule add "https://github.com/BrownCSCI1230/BrownCSCI1230.github.io.git" dist/client

# echo "================== Removing organization repository as submodule"
# git submodule deinit -f dist/client
# rm -rf .git/modules/dist/client
# git rm -f dist/client