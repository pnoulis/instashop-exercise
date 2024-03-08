#!/usr/bin/make

##################################################
# Make configuration
##################################################
SHELL:=/usr/bin/bash
.DEFAULT_GOAL:=all
.SECONDEXPANSION:
.ONESHELL:
.EXPORT_ALL_VARIABLES:

##################################################
# Environment
##################################################
loadenv=set -a; source ./.env
MODE=production
NODE_ENV=$(MODE)

##################################################
## Application
##################################################
app_name=$(APP_NAME)
app_version=0.0.1
app_distname=$(app_name)-v$(app_version)

##################################################
## Directories
##################################################
srcdir_top=.
srcdir=$(srcdir_top)/src
buildir=$(srcdir_top)/build

##################################################
## Programs
##################################################
node:=npx node
nodeflags:=--import $(srcdir_top)/debug.js
tsnode:=npx tsx

all: build

##################################################
## Build
##################################################
build: args?=
build:
	echo NODE_ENV:$(NODE_ENV)
	ng build -c $(MODE) $(args)

##################################################
## Start
##################################################
start-client: env
	$(loadenv)
	echo NODE_ENV:$(NODE_ENV)
	ng serve --port $$CLIENT_PORT -c $(MODE)

start-server:
	$(loadenv)
	echo NODE_ENV:$(NODE_ENV)
	$(node) server/parsed.js

stop-client:
	-pkill -e --full 'ng serve'

stop-server:
	-pkill -e --full 'parsed.js'

##################################################
# run
##################################################
run: file?=tmp/scratch.js
run: $(file)
	@if [[ "$${file:-}" == "" ]]; then
	echo "Usage: 'make run file [args]'"
	exit 1
	fi
	$(loadenv)
	extension="$${file##*.}"
	case $$extension in
	sh)
	$(SHELL) $(file) $(args)
	;;
	js | mjs)
	$(node) $(nodeflags) $(file) $(args)
	;;
	ts)
	$(tsnode) $(nodeflags) $(file) $(args)
	;;
	*)
	echo "Unrecognized extension: $$extension"
	echo "Failed to 'make $@ $^'"
	;;
	esac

.DEFAULT:
	@if [ ! -f "$<" ]; then
	echo "Missing file $${file:-}"
	exit 1
	fi

##################################################
# Environment
##################################################
env: env.angular.ts

env.angular.ts: .env
	echo "export const environment = $$(node scripts/getenv.js)" > $@

##################################################
# clean
##################################################
clean:
	-rm -f *.log
	-rm -f .#*
	-rm -f env.*
	-rm -rf logs
	find $(srcdir_top) -name '*~' -exec rm {} \;

##################################################
# distclean
##################################################
distclean: clean
	-rm -rf node_modules
	-rm -f package-lock.json
	-rm -rf dist


# Develop
.PHONY: run
.PHONY: build
.PHONY: start
.PHONY: stop
.PHONY: test
# Distribute
.PHONY: deploy
# Clean
.PHONY: clean
.PHONY: distclean
# Misc
.PHONY: all
