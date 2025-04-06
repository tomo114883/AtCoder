## AtCoder
A repository for AtCoder, Competition Programming Platform.

## Usage (in vscode)
### Java
- `cd ./java/[contestId]/[taskLabel]`

Test
- `oj test -c "java Main.java" -d ./tests/`

Submit
- `acc submit Main.java -- -l 5005`
### TypeScript
Please use the integrated running tool.

then, the opening file can get a input from input.txt.

## Execute command for TypeScript(don't need for Java)
- `cd ./ts`

- `npx tsc -p ./tsconfig.json && node ./dist/file_name < ./input.txt`
