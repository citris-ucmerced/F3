## From Source Code to a Live Website

The main purpose of this document is to explain how this website functions and how our code goes from development to production.

### Hosting with GitHub Pages

Our code is stored in a GitHub repository. GitHub provides a website hosting service called GitHub Pages, allowing developers to publish a website straight from a repository.

However, GitHub Pages has limitations. It supports only static content and does not natively support frameworks like React, which are required for dynamic content involving user interaction.

### Overcoming Limitations with React

Fortunately, there is a workaround that enables us to use the React framework with GitHub Pages. We can take advantage of open-source code to achieve this (see footnotes).

#### Deployment Process

Source [one](https://github.com/gitname/react-gh-pages/tree/master) demonstrates how to deploy a React App to GitHub Pages. It uses the npm package `gh-pages` to automate the build processes for deploying to GitHub Pages.

#### Supporting Routes

Source [two](https://github.com/rafgraph/spa-github-pages) addresses the issue of supporting routes on GitHub Pages. By default, GitHub Pages displays a 404 error page when a specific route is specified. However, you can provide a custom 404 page. The second source uses this custom 404 page and a script to act as a middleman to route users to different pages.

### Footnotes

Open Source Code

1. [Deploying a React App* to GitHub Pages](https://github.com/gitname/react-gh-pages/tree/master)
2. [Single Page Apps for GitHub Pages](https://github.com/rafgraph/spa-github-pages)
