# 🏪 Breja's Caisses

Système professionnel de gestion des caisses avec **Node.js**, **React**, et **PostgreSQL**.

## 🎯 Stack Technique

- **Backend**: Node.js + Hono + TypeScript
- **Frontend**: React 18 + Vite + Zustand
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Deployment**: Railway

## 🚀 Quick Start - Dev Local

### Prérequis
- Node.js 18+
- Docker & Docker Compose

### Installation

```bash
# Clone le repo
git clone https://github.com/nouajdi/brejas-caisses.git
cd brejas-caisses

# Démarrer tout en Docker
docker-compose up

# Ou dev mode sans Docker
cd backend && npm install && npm run dev
cd ../frontend && npm install && npm run dev
