# 🚀 Page Pulse

Page Pulse is a full-stack web application that analyzes websites and provides useful SEO and performance insights. Users can submit a URL and receive information such as the page title, meta description, headings, response time, image alt statistics, and more.

## ✨ Features

- 🔍 Analyze any valid website URL
- ⚡ Measure response time
- 📄 Extract page title
- 🏷️ Extract meta description
- 📝 Count headings (H1, H2, etc.)
- 🖼️ Check image alt text
- 📊 Word count analysis
- ❌ Handles invalid and unreachable URLs gracefully
- 🧪 Automated backend testing with Jest & Supertest
- ✅ GitHub Actions CI for automatic test execution

## 🛠 Tech Stack

### Frontend
- React
- Vite
- CSS

### Backend
- Node.js
- Express.js
- Axios
- Cheerio

### Testing
- Jest
- Supertest

### CI/CD
- GitHub Actions

## 📂 Project Structure

```
Page-Pulse/
├── client/
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── tests/
│   ├── app.js
│   └── server.js
└── .github/
    └── workflows/
```

## 🚀 Installation

### Backend

```bash
cd server
npm install
npm start
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## 🧪 Run Tests

```bash
cd server
npm test
```

## 📌 Future Improvements

- Lighthouse integration
- PDF report export
- User authentication
- Analysis history
- Dashboard with charts

## 👨‍💻 Author

**M Raja**
