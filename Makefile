.PHONY: deploy build

deploy:
	@ssh transee "cd ~/apps/landing && git pull && make build"

build:
	@bundle install
	@bundle exec middleman build
