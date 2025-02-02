# Runequest Glorantha Characteristic Attribute Calculator

A [Svelte](https://svelte.dev/) web application to make it easier to manage
characters for [Chaosium's](https://www.chaosium.com/) fantasy role playing game
[Runequest](https://www.chaosium.com/runequest/).

The app enables easy calculation of the characteristic bonuses and attributes
derived from the characters statistics like Strength, Dexterity and
Intelligence.

This makes it easier, particularly for new players, to keep PDF or paper
character sheets up to date as statistics change with experience or other in
game effects.

## Usage

Simply type the characters statistics in the appropriate text boxes and the app
will calculate the bonus or attribute once all the required characteristics are
present. The application works in such a way that if a user only needs to know,
for instance, the Magic Skills bonus, only the required characteristics, in
this case POW and CHA have to be entered.

The application is currently hosted at [rqg.english-glaswegian.ca](https://rqg.english-glaswegian.ca/)
and can be used there rather than installing locally or on another server.

## Technical Components

As mentioned above the application uses the [Svelte](https://svelte.dev/) framework
as I have found it easier than other frameworks to develop interactive
client side applications with.

I have also used [semantic-ui](https://semantic-ui.com/) for styling the page
because of its clean appearance and easy to understand class names.

## Running Locally

You will need the following dependencies installed on your computer before
running locally:

- [Node JS](https://nodejs.org/) &
  [Node Package Manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  (npm)
- [pnpm](https://pnpm.io/) (optional) or
- [yarn](https://yarnpkg.com/) (optional)

You can either download the code from github using the git command line tool or
as a zip file. On the command line from inside the project directory you
install the dependencies with `npm install` (or `pnpm install` or `yarn`.)
The development server can be started with:

```bash
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Running on a Server

To run the application on your own server you will likely need a number of tools
such as a reverse proxy like [nginx](https://nginx.org/) or [caddy](https://caddyserver.com/),
as well as some way to add SSL and other tools like
[systemd](https://systemd.io) on linux or [PM2](https://pm2.io).

To deploy the app, you will need to install an
[adapter](https://kit.svelte.dev/docs/adapters) for your target environment,
into the code.

You can preview the production build with `npm run preview`.

To create a production version of the app with:

```bash
npm run build
```

Setting up a server to run any app is usually quite a few steps and if you are
not familiar with the tools and terminology it can be frustrating. Hence I
would recommend following a tutorial if it is your first time setting up a
server.

There is a tutorial at [vultr](https://docs.vultr.com/how-to-deploy-a-sveltekit-web-application-on-ubuntu)
that you might find helpful but the one I found most helpful is by
[Ryan Chiang](https://ryanschiang.com/how-to-deploy-sveltekit-app-to-nginx-reverse-proxy#6-create-certbot-ssl-certificate).

You cannot afford not to think about security so it is worth checking your
site with [securityheaders.com](https://securityheaders.com) and making sure
you have a virus scanner and firewall on your server.
