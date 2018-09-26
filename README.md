<div align="center">
    <h2><b>An open source database of anime episode and character transcripts.</b></h2>
</div>


<div align="center">
    <img src="https://images.gr-assets.com/hostedimages/1502722027ra/23588364.gif">
</div>

<hr>

#### Why?

Anime is great, and while there's a lot of information out there on anime metadata
on great sites like [Anilist](http://anilist.co/), there's no 
way to know what your favorite characters have said without going through
all the episodes yourself. What exactly did Aoba say in S1 E1
of [New Game!](https://anilist.co/anime/21455)? How often did Louise speak
in the first season of [Familiar of Zero](https://anilist.co/anime/1195/The-Familiar-of-Zero/) 
compared to the last? ¯\\\_(ツ)\_/¯

These are interesting things to be able to answer. Why do I want to answer
them? Stop asking so many questions.

#### How does (will) it work?

- Crawlers fetch subtitles from websites

- Subs that don't match one of the handful of known and consistent formats are filtered out

- **Some** subtitles have information on speakers, those are parsed as well

- Anime, episode and character information is looked up on `MAL` and `Anilist`

- Data is given structure and saved on PostgreSQL

- Elasticsearch is periodically updated with new information from PostgreSQL

- GraphQL is used as an API to interface with Elasticsearch

- Requests are checked and cached on Redis for each query


#### Todo and Planned Features

- [ ] Support multiple sub groups

- [ ] Support multiple file types **(rar, zip, 7z, tar.gz)**

- [ ] Support Japanese subtitles

- [ ] Add more sub websites to crawl

- [ ] Make a website with React

- [ ] Integrate Hifumi's API or start the API from scratch with Prisma

- [ ] User authentication, JWT?


#### Stack

<div align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png" height="64">
    <img src="https://redislabs.com/wp-content/themes/redislabs/assets/images/redis-logo-stack.png" height="64">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2000px-GraphQL_Logo.svg.png" height="64">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" height="64">
    <img src="https://ria.gallerycdn.vsassets.io/extensions/ria/elastic/0.13.3/1530754501320/Microsoft.VisualStudio.Services.Icons.Default" height="64">
</div>


## Getting Started

1. install pipenv `pip install pipenv`
2. install all dependencies `pipenv install`
3. activate environment `pipenv shell`

#### Tools

- `pipenv run start` generic start command

- `pipenv run crawl` starts the crawler to fetch subtitle files

- `pipenv run migrate` performs migrations to get the database up-to-date with latest revisions

- `pipenv run lint` checks the code for pep8 violations

  - Note: You will **not** be able to commit code that has linter errors.

- `pipenv run test` runs pytest against the tests files
  - Remember to include tests for new changes
  
<hr>

**Note:**

This service is still a work in progress, meaning any documentation 
or service component may change or get added _literally_ overnight