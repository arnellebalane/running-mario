import gulp from 'gulp';
import plumber from 'gulp-plumber';
import jade from 'gulp-jade';
import stylus from 'gulp-stylus';
import autoprefixer from 'gulp-autoprefixer';


gulp.task('styles', () => {
    return gulp.src('stylesheets/**/*.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(gulp.dest('build/stylesheets/'));
});


gulp.task('templates', () => {
    return gulp.src('index.jade')
        .pipe(plumber())
        .pipe(jade({ pretty: '    ' }))
        .pipe(gulp.dest('build/'));
});


gulp.task('watch', () => {
    gulp.watch('stylesheets/**/*.styl', ['styles']);
    gulp.watch('index.jade', ['templates']);
});


gulp.task('default', ['styles', 'templates', 'watch']);
