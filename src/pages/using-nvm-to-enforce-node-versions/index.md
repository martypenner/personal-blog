---
title: Using NVM to enforce node versions
date: '2020-02-25T15:39:01.274Z'
---

Previously, we used docker to give us a common node version by running every node and npm command through a wrapper script. This meant we wouldn't run into strange gotchas between different versions of node and npm. But it also created more problems:

- We couldn't use different node versions per package. This means we had to find the lowest common denominator among all packages, so we were stuck on an older, slower version with fewer features.
- We couldn't debug node scripts the usual way because of the docker proxy.
- Running e2e tests through a real browser required [installing and configuring XQuartz](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/#Interactive-mode), which was really wonky and not easy to train people on.
- Performance was *really bad*. People were waiting many minutes for basic builds to finish.
- `Ctrl + C` didn't always work because of terminal shenanigans between docker and the host, so you could end up with hanging processes.
- Watch/live-reload scripts didn't work sometimes for reasons I don't understand, meaning they had to run a full build for every change.
- Other weird stuff I can't remember right now.

Tools like [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) were made to deal with stuff like this, so why not use it? By maintaing the wrapper script, but adding `.nvmrc` files to each package, the wrapper can ensure that nvm installs the needed node version before running. It also avoids polluting your shell, so your active node version doesn't change simply because you ran `npm i` inside of a package. Works like a charm!

I also investigated [volta](https://volta.sh/), but it simply isn't ready for me to use yet, primarily because it doesn't allow installing "global" npm packages yet.

Here's the full code the wrapper script:

<iframe src="https://gist.github.com/martypenner/583416cda8313d4419ef98aa658ff895.pibb"></iframe>
