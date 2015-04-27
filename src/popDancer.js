var PopDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('popDancer');
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();

  // change size of dancer
  if (this.$node.css('width').substr(0,2) === '20' && this.$node.css('display') === 'block'){
    this.$node.css('width', '40px');
  }
  else if (this.$node.css('display') === 'block'){
    this.$node.css('width', '20px');
  }
};

PopDancer.prototype.lineUp = function(){
  clearTimeout(this._timer);
  this.$node.toggle(true);
  this.$node.animate({left: "375px"}, 2000);
};
