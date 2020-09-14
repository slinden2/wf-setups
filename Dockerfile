FROM node:latest

# Prepare a temp directory for backend
RUN mkdir -p /temp/backend

# Copy backend to the temp directory
COPY /backend /temp/backend

WORKDIR /temp/backend

# Install dependencies
RUN npm install

# Build backend code
RUN npm run build:server

# Prepare a directory for finished application
RUN mkdir /app

# Move node_modules to the app directory
RUN mv /temp/backend/node_modules /app

# Move built backend go to the app
RUN mv /temp/backend/dist/* /app

# Prepare a temp directory for frontend
RUN mkdir -p /temp/frontend

# Copy frontend to the temp directory
COPY /frontend /temp/frontend

WORKDIR /temp/frontend

# Install dependencies
RUN npm install

# Build frontend code
RUN npm run build

# Prepare a directory for built frontend code
RUN mkdir -p /app/client

# Move built front end to the app directory
RUN mv /temp/frontend/build/* /app/client

# Delete all temporary stuff
RUN rm -r /temp

WORKDIR /app

# Expose container port 5000
EXPOSE 5000

# Run application
ENTRYPOINT ["node", "index.js"]
