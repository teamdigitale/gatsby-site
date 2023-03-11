#!/usr/bin/env bash

set -euxo pipefail

# Skip redirect pages
find public -type f -name '*.html' -exec grep -L 'http-equiv="refresh"' {} \; | xargs npm run pa11y-ci
