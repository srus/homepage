#!/usr/bin/env bash

# Prompt colors
txtrst='\e[0m'     # text reset
txtylw='\e[0;33m'  # regular yellow
txtgrn='\e[0;32m'  # regular green
bldgrn='\e[1;32m'  # bold green

# Current path
proj_path="`pwd`"

# Install Node packages from front-end
cd "${proj_path}/src/frontend/homepage"
npm install || { echo "FATAL: Could not install Node packages from ${proj_path}/src/frontend/homepage"; exit 1; }
cd "$proj_path"

echo ""
echo -e "${bldgrn}OK, project deployed.${txtrst}"
echo ""

exit 0
