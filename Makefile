HUGO_BIN=hugo

.PHONY: build demo release

build:
	$(HUGO_BIN) --themesDir=../.. --source=site

demo:
	$(HUGO_BIN) server -D --themesDir=../.. --source=site

release: build
	rm -rf ./resources && cp -r ./site/resources ./resources
