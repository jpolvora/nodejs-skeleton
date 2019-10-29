const {task, src, dest, series} = require('gulp')
const terser = require('gulp-terser')
const eslint = require('gulp-eslint')
const clean = require('gulp-clean')

task('build', function (cb) {
    return src('./src/index.js')
        .pipe(terser())
        .pipe(dest('./dist'))
        .on('close', cb)
})

task('lint', function(cb) {
    return src(['./src/*.js'])
        .pipe(eslint())
        .pipe(eslint.failOnError())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .on('close', cb)
})

task('clear', function (cb) {
    return src('./dist', {read: false, allowEmpty: true})
        .pipe(clean())
        .on('close', cb)
})

task('default', function(cb) {
    series('clear', 'lint', 'build')
    return cb()
})