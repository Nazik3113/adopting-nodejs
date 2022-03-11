import path from "path";

const pathObj = {
    root: "ignored because of dir",
    dir: 'some_folder/some_folder',
    base: 'generatePath.js'
};

console.log(path.format(pathObj));

const pathObj2 = {
    root: "some_folder/some_folder/",
    // dir: 'some_folder/some_folder',
    base: 'generatePath.js'
};

console.log(path.format(pathObj2));