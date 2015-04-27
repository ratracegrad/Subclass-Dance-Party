var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  this._top = top;
  this._left = left;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();

  // changes top and left to make it move
  this._top = $("body").height() * Math.random();
  this._left = $("body").width() * Math.random();
  this.setPosition(this._top, this._left);

  // alternate colors
  if (this.$node.css('border') === '10px solid rgb(255, 255, 0)' && this.$node.css('display') === 'block'){
    this.$node.css('border', '10px solid blue');
  }
  else if (this.$node.css('display') === 'block'){
    this.$node.css('border', '10px solid rgb(255, 255, 0)');
  }
};
