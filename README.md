# 🧩 Pokedex Lite

A responsive web application that allows users to explore Pokémon, search by name, filter results, and mark favorites with persistent storage.

🔗 **Live Demo:** https://pokedex-lite-blond-omega.vercel.app/   
💻 **Source Code:** https://github.com/divya-dabbara/pokedex-lite  

---

## 🚀 Features

- 📋 **Pokémon Listing**
  - Fetches Pokémon data from PokéAPI
  - Displays name and sprite in a responsive grid

- 🔍 **Search**
  - Real-time filtering of Pokémon by name

- 🏷️ **Filter by Type**
  - Filter Pokémon based on selected types (e.g., Fire, Water, Grass)

- ⭐ **Favorites**
  - Mark/unmark Pokémon as favorites
  - Favorites persist using localStorage

- 📄 **Detail Modal**
  - View detailed information:
    - Types
    - Base stats (HP, Attack, Defense, etc.)

- 📄 **Pagination**
  - Efficient data fetching using limit-offset strategy
  - Navigate using Next / Prev buttons

- 📱 **Responsive UI**
  - Works across mobile, tablet, and desktop

- ✨ **Animations**
  - Smooth hover effects on cards and modal transitions

---

## 🛠️ Tech Stack

- **Next.js (App Router)** – for structure and routing  
- **TypeScript** – for type safety  
- **Tailwind CSS** – for styling  
- **Axios** – for API calls  
- **PokéAPI** – data source  

---

## ⚙️ Getting Started

### 1. Clone the repo

```
git clone https://github.com/divya-dabbara/pokedex-lite
cd pokedex-lite
```

### 2. Install dependencies

```
npm install
```

### 3. Run locally

```
npm run dev
```

Open `http://localhost:3000`


## 🧠 Key Implementation Details

* Used a custom hook (`usePokemon`) to manage paginated fetching and state
* Implemented parallel API calls using `Promise.all` to fetch Pokémon details
* Managed favorites state with `localStorage` for persistence across sessions
* Designed a reusable component structure for scalability
* Implemented client-side filtering for Pokémon types using available API data

---

## ⚠️ Challenges & Solutions

* **Handling multiple API calls efficiently**
  Solved using `Promise.all` for concurrent requests

* **Managing UI state cleanly**
  Separated logic using hooks and reusable components

* **Maintaining responsiveness**
  Used Tailwind grid system for adaptive layouts

---

## ✨ Possible Improvements

* Implement server-side rendering for performance
* Add dark mode support

---

## 👩‍💻 Author

* **Name:** Divya Dabbara
* **GitHub:** https://github.com/divya-dabbara

