# Running Locally

Clone the directory, go into it, and run a python server. The website will be available on the network at the server's IP address and port.

```shell
$ git clone https://github.com/davidherszenhaut/davidherszenhaut.github.io.git
$ cd davidherszenhaut.github.io
$ python -m http.server 3000
```

# TODO

- [x] recreate current website
- [x] add project screenshots
- [x] create new favicon
- [x] double check `<head>` elements
- [ ] style website
  - [ ] move generated `<div>`s to `<main>`
  - [ ] move `<footer>` to bottom in `index.html`
- [ ] double check responsiveness
- [x] properly capitalize tech stack names
- [ ] add light/dark toggle
- [x] add music page
- [ ] make `rewrite` the main branch
