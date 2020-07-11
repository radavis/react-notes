![book](./assets/images/book-256.png)

# Introduction

Example GitBook. Content is meaningless. Replace with your own.

Landing page content goes here.

## Getting Started

```bash
$ git clone git@github.com:radavis/example-gitbook.git --origin fork your-new-gitbook
$ cd your-new-gitbook
$ which gitbook || npm install gitbook-cli -g  # npm is a requirement
$ gitbook install  # install plugins
$ gitbook serve  # visit localhost:4000
$ gitbook build  # builds static site in ./_book
$ gitbook build ./ --log=debug --debug  # debug mode
```

Then, edit away.

## Publish to GitHub

```bash
$ git remote add origin git@github.com:YOUR_USERNAME/example-gitbook.git
$ ./bin/publish
$ open https://YOUR_USERNAME.github.io/example-gitbook
```

## Resources

* [GitBook on npmjs.com](https://www.npmjs.com/package/gitbook)
* [GitBook cli documentation](https://gitbookio.gitbooks.io/docs-toolchain/)
* [GitBook Documentation](https://gitbookio.gitbooks.io/documentation/index.html)

## Notes

Naming files `index.md` isn't a good idea. The `gitbook` cli will write its own
`index.html`.
