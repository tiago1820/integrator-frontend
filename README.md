# Rick and Morty Character Wiki - Frontend

This is a React-based Rick and Morty Wiki app supporting three languages (English, Portuguese and Spanish).

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Features

- Rick and Morty app with support for English, Portuguese and Spanish.
- You can search for your favorite characters through the search bar.
- There is a pagination system where each page shows 20 characters.

## Demo

![image](https://github.com/tiago1820/integrator-frontend/blob/main/public/images/banner.png)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/tiago1820/integrator-frontend.git
```
   
2. open the project in terminal and then run:
```bash
npm install
npm run dev
```

## Project Structure

The project follows a specific structure to organize its files and directories. Below is an overview of the main components:

```plaintext
frontend/
src
│   ├── app
│   │   ├── assets
│   │   ├── components
│   │   │   ├── About
│   │   │   │   ├── About.jsx
│   │   │   │   └── About.module.css
│   │   │   ├── Card
│   │   │   │   ├── Card.jsx
│   │   │   │   └── Card.module.css
│   │   │   ├── Cards
│   │   │   │   ├── Card
│   │   │   │   ├── Cards.jsx
│   │   │   │   └── Cards.module.css
│   │   │   ├── Detail
│   │   │   │   ├── Detail.jsx
│   │   │   │   └── Detail.module.css
│   │   │   ├── Error
│   │   │   │   └── Error.jsx
│   │   │   ├── FavCard
│   │   │   │   ├── FavCard.jsx
│   │   │   │   └── FavCard.module.css
│   │   │   ├── Favorites
│   │   │   │   ├── Favorites.jsx
│   │   │   │   └── Favorites.module.css
│   │   │   ├── Form
│   │   │   │   ├── Form.jsx
│   │   │   │   ├── Form.module.css
│   │   │   │   └── validation.js
│   │   │   ├── index.js
│   │   │   ├── Nav
│   │   │   │   ├── componentes
│   │   │   │   │   ├── LanguageSelector
│   │   │   │   │   │   ├── LanguageSelector.jsx
│   │   │   │   │   │   └── LanguageSelector.module.css
│   │   │   │   │   └── RandomButton
│   │   │   │   │       ├── RandomButton.jsx
│   │   │   │   │       └── RandomButton.module.css
│   │   │   │   ├── Nav.jsx
│   │   │   │   └── Nav.module.css
│   │   │   ├── Pagination
│   │   │   │   ├── Pagination.jsx
│   │   │   │   └── Pagination.module.css
│   │   │   ├── Register
│   │   │   │   ├── Register.jsx
│   │   │   │   ├── Register.module.css
│   │   │   │   └── validation.js
│   │   │   └── SearchBar
│   │   │       ├── SearchBar.jsx
│   │   │       └── SearchBar.module.css
│   │   ├── constants
│   │   │   └── index.js
│   │   ├── helpers
│   │   │   ├── handleErrors.helper.js
│   │   │   ├── index.js
│   │   │   └── PathRoutes.helper.js
│   │   ├── hooks
│   │   │   └── index.js
│   │   ├── redux
│   │   │   ├── actions.js
│   │   │   ├── action-types.js
│   │   │   ├── reducer.js
│   │   │   └── store.js
│   │   └── services
│   │       ├── auth.service.js
│   │       ├── character.service.js
│   │       ├── index.js
│   │       └── routes.service.jsx
│   ├── App.jsx
│   ├── App.module.css
│   ├── global.css
│   ├── i18n.js
│   ├── locales
│   │   ├── en.json
│   │   ├── es.json
│   │   └── pt.json
│   ├── main.jsx
│   └── site
│       ├── components
│       │   ├── Banner
│       │   │   ├── Banner.jsx
│       │   │   └── Banner.module.css
│       │   ├── Features
│       │   │   ├── Features.jsx
│       │   │   └── Features.module.css
│       │   ├── Footer
│       │   │   ├── Footer.jsx
│       │   │   └── Footer.module.css
│       │   ├── Menu
│       │   │   ├── components
│       │   │   │   └── FlagSelector
│       │   │   │       ├── FlagSelector.jsx
│       │   │   │       └── FlagSelector.module.css
│       │   │   ├── Menu.jsx
│       │   │   └── Menu.module.css
│       │   ├── Prices
│       │   │   ├── Prices.jsx
│       │   │   └── Prices.module.css
│       │   └── Testimonial
│       │       ├── Testimonial.jsx
│       │       └── Testimonial.module.css
│       └── Site.jsx
└── vite.config.js

 ...                     # Other configuration files
```

## Contributing

I welcome contributions from the community to help improve the Rick and Morty Wiki app. If you would like to contribute, follow these steps:

1. Fork the project.
2. Create your feature branch:
```bash
git checkout -b feature/NewFeature.
```
4. Commit your changes:
```bash
git commit -m 'Add a new feature'.
```
6. Push to the branch:
```bash
git push origin feature/NewFeature.
```

7. Open a pull request on the main repository, describing your changes and explaining why they are valuable.

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the [LICENSE](/LICENSE) file for details. 

If you find this project helpful or interesting, please give it a ⭐️.
