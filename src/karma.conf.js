module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'requirejs']
    ,files: [
      {pattern: 'js/**/*.js', included: false} // included:false as requireJs loads them
      ,{pattern: "karma.conf.require.js", included: true}
    ]
    ,browsers: ['Chrome']
  })
}
