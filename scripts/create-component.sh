#!/bin/bash

# $1: path, in relation to ./source/_patterns/, e.g. 02-components/dialog
# $2: pattern name, e.g. dialog
# $3: pattern type, e.g. cmp

mkdir ./source/_patterns/"$1"

cp ./source/pattern-template/_pattern-template.scss ./source/_patterns/"$1"/_"$2".scss
cp ./source/pattern-template/_pattern-template.variables.scss ./source/_patterns/"$1"/_"$2".variables.scss
cp ./source/pattern-template/pattern-template.hbs ./source/_patterns/"$1"/"$2".hbs
cp ./source/pattern-template/pattern-template.json ./source/_patterns/"$1"/"$2".json
cp ./source/pattern-template/pattern-template.md ./source/_patterns/"$1"/"$2".md

find ./source/_patterns/"$1" -type f -print0 | xargs -0 sed -i '' -e 's/[Pp]attern/'"$2"'/g'
find ./source/_patterns/"$1" -type f -print0 | xargs -0 sed -i '' -e 's/type/'"$3"'/g'

echo -e '\n@import "../_patterns/'"$1"'/'"$2"'";' >> ./source/css/enterprise/db-ui-core.scss

echo -e '\n,{\n"label": "'"$2"'",\n"url": "http://127.0.0.1:8080/patterns/ .rendered.html",\n"referenceUrl": "https://db-ui.github.io/core/patterns/ .rendered.html"\n}'  >> ./tests/backstop.json
