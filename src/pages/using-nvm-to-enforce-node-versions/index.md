---
title: Using NVM to enforce node versions
date: '2020-02-25T15:39:01.274Z'
---

Previously, we used docker to give us a common node version by running every node and npm command through a wrapper script. This meant we wouldn't run into strange gotchas between different versions of node and npm. But it also created more problems:

- We couldn't use different node versions per package. This means we had to find the lowest common denominator among all packages, so we were stuck on an older, slower version with fewer features.
- We couldn't debug node scripts the usual way because of the docker proxy.
- Running e2e tests through a real browser required [installing and configuring XQuartz](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/#Interactive-mode), which was really wonky and not easy to train people on.
- Performance was **really bad**. People were waiting many minutes for basic builds to finish.
- `Ctrl + C` didn't always work because of terminal shenanigans between docker and the host, so you could end up with hanging processes.
- Watch/live-reload scripts didn't work sometimes for reasons I don't understand, meaning they had to run a full build for every change.
- Other weird stuff I can't remember right now.

Tools like [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) were made to deal with stuff like this, so why not use it? By maintaing the wrapper script, but adding `.nvmrc` files to each package, the wrapper can ensure that nvm installs the needed node version before running. It also avoids polluting your shell, so your active node version doesn't change simply because you ran `npm i` inside of a package. Works like a charm!

I also investigated [volta](https://volta.sh/), but it simply isn't ready for me to use yet, primarily because it doesn't allow installing "global" npm packages yet.

Here's the full code the wrapper script:

```bash
#!/usr/bin/env bash

# This file mainly exists to be a facade for our watch/build/install scripts. By
# providing a thin layer on top, we can theoretically change out the underlying
# implementation without having to change our workflow too much.
#
# As of the time of this writing, we're enforcing the desired node and npm
# versions within each package by using `.nvmrc`.

# Fail fast
set -euo pipefail

# Set up nvm
. "\$NVM_DIR/nvm.sh"
nvm install

COMMAND="\$1"

case "\$1" in
# Expose npx directly to do whatever we need
  npx)
    npx "\${@:2}"
    ;;
# Expose npm directly to do whatever we need
  npm)
    npm "\${@:2}"
    ;;
# Expose node directly to do whatever we need
  node)
    node "\${@:2}"
    ;;
# Remove all node_modules and bower components inside all packages
  clean)
    find . -type d -iname node_modules -maxdepth 3 -exec rm -rf {} +
    find . -type d -iname bower_components -maxdepth 3 -exec rm -rf {} +
    ;;

  *)
    echo "That command doesn't exist."
    exit 1
    ;;
esac
```
