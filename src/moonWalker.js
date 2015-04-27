var MoonWalker = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('moonWalker');
  this._rotateMichael = 1;
};

MoonWalker.prototype = Object.create(Dancer.prototype);
MoonWalker.prototype.constructor = MoonWalker;

MoonWalker.prototype.step = function() {
  Dancer.prototype.step.call(this);

  // changes top and left to make it move
  this._top = $("body").height() * Math.random();
  this._left = $("body").width() * Math.random();
  this.setPosition(this._top, this._left);

  // rotates between 90 degrees and 0 degrees
  if (this._rotateMichael === 1) {
    this.$node.removeClass('moonWalkerRight');
    this.$node.addClass('moonWalker');
    this._rotateMichael = 0;
  } else {
    this.$node.removeClass('moonWalker');
    this.$node.addClass('moonWalkerRight');
    this._rotateMichael = 1;
  }

};

MoonWalker.prototype.lineUp = function(){
  clearTimeout(this._timer);
  this.$node.toggle(true);
  this.$node.animate({left: "550px"}, 8000);
};