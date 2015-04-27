var Dancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this._timer;

  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
   this._timer = setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){
  clearTimeout(this._timer);
  this.$node.toggle(true);
  this.$node.animate({left: "100px"}, 5000);
};

