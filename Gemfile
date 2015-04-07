source "https://rubygems.org"
ruby '2.1.1'  # See https://pages.github.com/versions.json

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
