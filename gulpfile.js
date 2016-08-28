var gulp=require('gulp');
var stylus=require('gulp-stylus');
var jade=require('gulp-jade');
var server=require('gulp-webserver');

gulp.task('servidor',function(){
  gulp.src('./pro/')
  .pipe(server({
    localhost:'0.0.0.0',
    port:8000,
    livereload:true
  }))
});

gulp.task('html',function(){
  gulp.src('./dev/index.jade')
  .pipe(jade())
  .pipe(gulp.dest('./pro/'))
});

gulp.task('css',function(){
  gulp.src('./dev/estilo.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./pro/'))
});







gulp.task('default',['html','css','servidor'])
