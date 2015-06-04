module.exports = {
    angular: {
        files: [
            {expand: true, dest: 'angular/', src:'**', cwd:'src/'},
            {dest: 'angular/index.html', src:'src/index.min.html'}
        ]
    }
};