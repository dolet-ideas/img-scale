var gulp = require("gulp");
var cfg = require("../config");
const babel = require("gulp-babel");
const browserify = require("gulp-browserify");

gulp.task("commons", function() {
  return gulp
  .src(cfg.src.img + "/*.{jpg,png}")
  .pipe(gulp.dest(cfg.dest.img));

});

gulp.task("commons:watch", function() {
  gulp.watch(cfg.src.img + "/*.{jpg,png}", gulp.parallel("commons"));
});
