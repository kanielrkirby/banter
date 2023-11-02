# Banter Realtime Chat App

**Live Deployment:** *[Still in development]()*

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![](https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white)
![](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)
![](https://img.shields.io/badge/Redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white)

Banter - a realtime chat application built in Django, Vue, MySQL, Redis, and Docker.

## Features and Technologies

- WebSockets utilizing Redis, Django Channels, and the WebSocket API
- Used Django ORM and MySQL to setup the database
- Setup the development environment utilizing a complex Docker setup
- Production pipeline handled through Docker
- Frontend using TailwindCSS and Vue Composition API

## Setting up the Development Environment

**Clone the repo and `cd` into the directory**

```git
git clone https://github.com/kanielrkirby/banter
cd banter
```

**Copy the example.env**

```bash
cp example.env .env
```

**Run the Docker Compose file**

```bash
docker compose -f docker-compose.base.yml -f docker-compose.dev.yml up
```

**Try setting up an alias if you're using this often (for whatever reason haha)**

```bash
alias banter="docker compose -f docker-compose.base.yml -f docker-compose.dev.yml up"
```

## Contributing

This is a personal project meant to learn, and isn't meant to be expanded! But if you find this useful for whatever reason, feel free to fork it to your own repo!

This is my portfolio, sorry!
