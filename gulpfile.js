const { src, dest, watch, task } = require("gulp");
var minifyCSS = require("gulp-clean-css");
const sass = require("gulp-sass")(require("sass"));
sass.compiler = require("node-sass");

var SCSS_SRC = "./src/styles/scss/**/*.scss";
var SCSS_DEST = "./src/styles/css";

const bundleSass = () => {
  return src(SCSS_SRC)
    .pipe(sass().on("error", sass.logError))
    .pipe(minifyCSS())
    .pipe(dest(SCSS_DEST));
};
const devWatch = () => {
  watch("./src/styles/scss/**/*.scss", bundleSass);
};

task("default", devWatch);

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;
