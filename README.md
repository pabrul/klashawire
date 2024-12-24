# KlashaWire Dashboard 🚀

Welcome to the **KlashaWire Dashboard**! This project showcases a simple yet scalable UI architecture built with **Vue.js 3**, **Vite**, **TailwindCSS**, and follows clean code principles such as the **Single Responsibility Principle** from SOLID. 🎯

---


https://github.com/user-attachments/assets/89ff2c11-1c75-4e82-824f-aaa290afc781


---


## 📂 Project Structure

Our folder structure is designed to prioritize **scalability**, **modularity**, and **ease of understanding**:

```
├── public/
│   ├── klasha.png
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   │   ├── components/
│   │   │   │   ├── _button.css
│   │   │   │   ├── _card.css
│   │   │   │   ├── _icon.css
│   │   │   ├── main.css
│   │   ├── klasha__logo.png
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.vue
│   │   │   ├── Card.vue
│   │   │   ├── Icon.vue
│   │   ├── features/
│   │   │   ├── dashboard/
│   │   │   ├── transactions/
│   │   ├── layout/
│   │   │   ├── Header.vue
│   │   │   ├── Sidebar.vue
│   ├── layouts/
│   │   ├── DefaultLayout.vue
│   ├── pages/
│   │   ├── Dashboard.vue
│   │   ├── Transactions.vue
│   ├── router/
│   │   ├── index.js
│   ├── App.vue
│   ├── main.js
│   ├── style.css
├── index.html
```

### 🔑 Key Principles

1. **Single Responsibility Principle (SRP)**:
   - Each component, style, or utility has a focused responsibility.
2. **Separation of Concerns**:
   - UI components are organized into `common`, `features`, `layout`, and `pages`.
3. **Extensibility**:
   - The structure supports future extensions like `services`, `utils`, or `composables` without disrupting the existing hierarchy.

---

## ✨ Features

- **Reusable Components**:
  - `Button`, `Card`, and `Icon` components under `common/`.
- **Feature Modules**:
  - Modular components for `dashboard` and `transactions`.
- **Layouts**:
  - `Header`, `Sidebar`, and `DefaultLayout` for consistent UI structure.
- **Dynamic Styling**:
  - Powered by **TailwindCSS** with component-specific styles.
- **Routing**:
  - Managed through `router/index.js` for a seamless SPA experience.

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pabrul/klashawire-dashboard.git

# Navigate to the project folder
cd klashawire-dashboard

# Install dependencies
npm install
```

### Running the Project

```bash
# Start the development server
npm run dev

# Build for production
npm run build
```

---

## 🤝 Contributing

Feel free to open issues, create pull requests, or suggest features. Let's make this dashboard even better together! 💡

---

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

## 🚀 Future Extensions

This structure is designed to grow with your application. You can easily add:

- **Services**: API communication modules.
- **Utils**: Shared utility functions.
- **Composables**: Reusable Vue 3 composition API logic.

Let's build something awesome! 🌟
