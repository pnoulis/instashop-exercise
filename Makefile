#!/usr/bin/make

SHELL:=/usr/bin/bash
.DEFAULT_GOAL:=all
.DELETE_OR_ERROR:
.SECONDEXPANSION:
.ONESHELl:

##################################################
## Application
##################################################
app_name=instashop-exercise
app_version=0.0.1
app_distname=$(app_name)-v$(app_version)

##################################################
## Directories
##################################################
srcdir_top=.
srcdir=$(srcdir)/src
buildir=$(srcdir)/build

##################################################
## Programs
##################################################
node:=$()

all: build

##################################################
## Build
##################################################
build:
	@echo build

##################################################
## Start
##################################################
start:
	@echo start

##################################################
# run
##################################################
run: file?=tmp/scratch.js
run: dotenv $(file)
	@if [[ "$${file:-}" == "" ]]; then
	echo "Usage: 'make run file [args]'"
	exit 1
	fi
	extension="$${file##*.}"
	$(loadenv)
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
	find $(srcdir_top) -name '*~' -exec rm {} \;


##################################################
# distclean
##################################################
distclean: clean
	-rm -f *.log
	-rm -f .#*
	-rm -rf $(buildir)
	-rm -rf node_modules
	-rm -f package-lock.json
	-rm -f config.*


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
