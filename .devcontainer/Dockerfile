# Use a base image with Node.js
FROM node:18-bullseye

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to PATH
ENV PATH="/root/.bun/bin:$PATH"

# Set working directory
WORKDIR /workspace
