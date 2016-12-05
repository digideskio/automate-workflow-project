var gulp = require('gulp');
// requires the gulp-sass plugin
var sass = require('gulp-sass');
// for error prevention for multiple plugins
var plumber = require('gulp-plumber');

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.+(sass|scss)', ['sass']);
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.+(sass|scss)')
    .pipe(plumber())
    .pipe(sass({
      precision: 4 // Sets number of decimal points to 2
    })) // Compiles Sass into CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});

function customPlumber() {
  return plumber({
    errorHandler: function(err) {
      // log error in console
      console.log(err.stack);
      // End current pipe so Gulp watch doesn't break
      this.emit('end');
    }
  });
}
