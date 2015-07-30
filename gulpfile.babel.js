import gulp from 'gulp';
import plumber from 'gulp-plumber';
import jade from 'gulp-jade';
import stylus from 'gulp-stylus';


gulp.task('styles', () => {
    return gulp.src('running-mario.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest('build/'));
});


gulp.task('templates', () => {
    return gulp.src('index.jade')
        .pipe(plumber())
        .pipe(jade({ pretty: '    ' }))
        .pipe(gulp.dest('build/'));
});


gulp.task('watch', () => {
    gulp.watch('running-mario.styl', ['styles']);
    gulp.watch('index.jade', ['templates']);
});


gulp.task('default', ['styles', 'templates', 'watch']);
