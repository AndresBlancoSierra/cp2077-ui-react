# CP2077 UI — React

Réplica de la **interfaz de Cyberpunk 2077** en React/TypeScript: menú central
(Hub), pantalla de personaje, ciberware e inventario y stats, todo con el look
V para el juego. Construida con React 19 + TypeScript + Vite + Tailwind.

---

## 🚀 Cómo correrlo

```bash
cd ~/Proyects/cp2077-ui-react
npm install
npm run dev        # servidor de desarrollo (Vite)
npm run build      # build de producción
npm run preview    # previsualiza el build
```

---

## 🧠 Qué incluye

- **HubMenu**: menú principal estilo el hub del juego.
- **CharacterScreen**: ficha del personaje.
- **CyberwareScreen**: inventario/ciberware (tipo `screenType`).
- **StatsScreen**: estadísticas.
- Router propio (`router/MenuRouter`) para navegar entre pantallas.

### Stack

React 19, TypeScript, Vite, Tailwind, react-window (listas virtualizadas).

---

## 📁 Estructura

```
cp2077-ui-react/
├── src/
│   ├── App.tsx            ← router + switch de pantallas
│   ├── router/MenuRouter  ← navegación por menú
│   ├── screens/           ← HubMenu, Character, Cyberware, Stats
│   ├── components/        ← UI reutilizable
│   ├── data/              ← datos de ejemplo
│   ├── hooks/             ← hooks personalizados
│   └── styles/            ← estilos globales
└── package.json
```

---
