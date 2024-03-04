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
node:=~/.nvm/versions/node/v20.0.0/bin/node

all: build

##################################################
## Build
##################################################
build:
	@echo build

##################################################
## Start
##################################################
start-client:
	$(loadenv)
	ng serve --port $$CLIENT_PORT

start-server:
	$(loadenv)
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
	$(node) $(file) $(args)
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
# clean
##################################################
clean:
	-rm -f *.log
	-rm -f .#*
	find $(srcdir_top) -name '*~' -exec rm {} \;

##################################################
# distclean
##################################################
distclean: clean
	-rm -rf node_modules
	-rm -f package-lock.json


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
