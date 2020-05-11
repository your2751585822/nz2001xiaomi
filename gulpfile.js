let gulp = require("gulp")
let connect = require("gulp-connect")
gulp.task("watchall",async ()=>{
    gulp.watch("./src/*.html",async ()=>{
        gulp.src("./src/*.html")
        .pipe(gulp.dest("./dist"))
    })

})
gulp.task("connect",function(){
    connect.server({
        root:"./dist",
        livereload:true
    })
})