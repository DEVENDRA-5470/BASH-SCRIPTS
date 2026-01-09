FROM node:22-alpine

WORKDIR /app
ENV NODE_ENV=development
EXPOSE 5173

# dev as non-root (best practice)
USER node

# install deps only if vite isn't there, then start
CMD ["sh","-lc","[ -x node_modules/.bin/vite ] || ( [ -f package-lock.json ] && npm ci || npm i ); npm run dev -- --host 0.0.0.0 --strictPort"]

