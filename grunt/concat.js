module.exports = {
  angular:{
    src:[
            'src/vendor/jquery/jquery.min.js',
            'src/vendor/libs/*.js',
            'src/vendor/angular/angular.js',
            'src/vendor/angular/**/*.js',
            'src/app/*.js',
            'src/app/common/*.js',
            'src/app/**/*.js'
    ],
    dest:'angular/js/dist.js'
  }
}