# Next Monorepo Typescript Test

> This is a Next.js typescript monorepo example for testing.

> Monorepos built using Yarn Workspaces offer a convenient way of managing dependencies that are related. This repo organizes 2 Next.js apps and 2 packages (a ui package and a utils package). Behind the scenes, yarn essentially symlinks your local dependendies to your local apps to make it easier to work on all of your packages at once.

## Current Issues

1. The next-app-one and next-app-two projects use @test-monorepo/ui, which is located at ./packages/ui. Yarn will symlink the node_modules package directly to this local package, but Next.js fails to transpile this package resulting in build errors. To solve this issue, both next apps use the [next-transpile-modules package](https://github.com/martpie/next-transpile-modules#readme). There's currently a [Next.js RFC](https://github.com/vercel/next.js/discussions/15327#discussioncomment-55463) to solve this using Typescript's baseUrl support. Worth noting is that this monorepo doesn't actually use baseUrl, and probably would never use it because the apps are intended to be deployed individually by themselves.
