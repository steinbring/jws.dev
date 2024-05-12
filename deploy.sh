#!/bin/bash

# Exit script on error
set -e

# Echo each command for logging
set -x

# Check out the code from the repository
# (Assumed to be managed externally or this script is part of the repository)

# Install Node.js dependencies
echo "Installing dependencies..."
npm install

# Build the VitePress site
echo "Building VitePress site..."
npm run docs:build