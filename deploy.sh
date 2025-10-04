#!/bin/bash

# Build the React app
echo "Building React app..."
npm run build

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete!"
