#!/usr/bin/env bash

# Current path
proj_path="`pwd`"

# Install Node packages from front-end
cd "${proj_path}/src/frontend/homepage"
npm install || { echo "FATAL: Could not install Node packages from ${proj_path}/src/frontend/homepage"; exit 1; }
cd "$proj_path"

exit 0
