# Demoted Immortal Poetry Appreciation (谪仙诗词鉴赏)

[中文](README.md) | [English](README_EN.md)

A Vue application for showcasing and appreciating classical Chinese poetry, focusing on the "Demoted Immortal" theme.

## Project Introduction

"Demoted Immortal" (谪仙) originally referred to immortals who were banished to the mortal world. Later, it became a term of praise for poets with extraordinary talent and style, such as Li Bai (known as the "Poetry Immortal") and Su Shi (known as the "Ci Poetry Immortal"). Their works feature lofty artistic conceptions, rich imagination, and beautiful language, fully embodying their open-minded and optimistic outlook and love for life.

This project collects classical poetry works related to the "Demoted Immortal" theme, providing users with high-quality typography, along with annotations, background introductions, and expert interpretations, creating an immersive appreciation experience.

## Features

- Curated collection of classical poetry, including works by famous poets such as Li Bai and Su Shi
- Poetry detail pages with creation background, annotations, and appreciation content
- Search and filter poetry by author, dynasty, and content
- Classical Chinese visual design for an immersive experience
- Responsive layout for various devices

## Visual Design

The project adopts design elements in classical Chinese style:

- **Color Scheme**: Reddish-brown as the primary color, representing the depth of classical culture; cyan-green as the secondary color, representing the elegance of scholars; gold as the accent color, representing the brilliance of poetry
- **Typography**: Using serif fonts like Noto Serif SC to enhance the classical aesthetic
- **Decorative Elements**: Classical borders, ink-wash effect backgrounds, and other decorative elements
- **Icons**: Icons featuring traditional Chinese elements such as lotus flowers and scrolls

## Project Structure

```
src/
├── assets/         # Static resources
│   ├── icons/      # Custom icons
│   └── styles/     # Style files
├── components/     # Components
│   ├── icons/      # Icon components
│   └── ...         # Other components
├── data/           # Data files
│   └── poems.js    # Poetry data
├── router/         # Router configuration
└── views/          # Page views
    ├── HomeView.vue       # Home page
    ├── PoemListView.vue   # Poetry list page
    └── PoemDetailView.vue # Poetry detail page
```

## Technology Stack

- Vue 3 - Frontend framework
- Vue Router - Router management
- Vite - Build tool
- CSS Variables - Theme style management

## Development Environment Setup

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)

### Customize Configuration

See [Vite Configuration Reference](https://vite.dev/config/)

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```
