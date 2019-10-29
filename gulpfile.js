const {task, src, dest, series} = require('gulp')
const terser = require('gulp-terser')
const eslint = require('gulp-eslint')
const clean = require('gulp-clean')

task('build', function () {
    return src('./src/index.js')
        .pipe(terser())
        .pipe(dest('./dist'))
})

task('lint', function() {
    return src(['./src/*.js'])
        .pipe(eslint({
            fix:true
        }))
        .pipe(eslint.failOnError())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
})

task('clear', function () {
    return src('./dist', {read: false, allowEmpty: true})
        .pipe(clean())
})

task('default', series('clear', 'lint', 'build'))