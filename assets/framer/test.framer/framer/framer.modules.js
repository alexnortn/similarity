require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"draggable":[function(require,module,exports){
exports.makeDraggable = function(layer) {
  var startX, startY;
  layer.draggable.enabled = true;
  startX = layer.x;
  startY = layer.y;
  return layer.on(Events.DragEnd, function() {
    return this.animate({
      properties: {
        x: startX,
        y: startY
      },
      curve: "spring(300,20,0)"
    });
  });
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWxleG5vcnRuL0RvY3VtZW50cy9HaXRodWIvc2ltaWxhcml0eS9hc3NldHMvZnJhbWVyL3Rlc3QuZnJhbWVyL21vZHVsZXMvZHJhZ2dhYmxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0NBLE9BQU8sQ0FBQyxhQUFSLEdBQXdCLFNBQUMsS0FBRDtBQUNwQixNQUFBO0VBQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFoQixHQUEwQjtFQUcxQixNQUFBLEdBQVMsS0FBSyxDQUFDO0VBQ2YsTUFBQSxHQUFTLEtBQUssQ0FBQztTQUdmLEtBQUssQ0FBQyxFQUFOLENBQVMsTUFBTSxDQUFDLE9BQWhCLEVBQXlCLFNBQUE7V0FDckIsSUFBSSxDQUFDLE9BQUwsQ0FDSTtNQUFBLFVBQUEsRUFDSTtRQUFBLENBQUEsRUFBRyxNQUFIO1FBQ0EsQ0FBQSxFQUFHLE1BREg7T0FESjtNQUdBLEtBQUEsRUFBTyxrQkFIUDtLQURKO0VBRHFCLENBQXpCO0FBUm9CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgQSBkcmFnZ2FibGUgZnVuY3Rpb24gd2l0aG91dCBvdXIgbW9kdWxlIFxuZXhwb3J0cy5tYWtlRHJhZ2dhYmxlID0gKGxheWVyKSAtPlxuICAgIGxheWVyLmRyYWdnYWJsZS5lbmFibGVkID0gdHJ1ZVxuIFxuICAgICMgU3RvcmUgY3VycmVudCB4IGFuZCB5IHBvc2l0aW9uIFxuICAgIHN0YXJ0WCA9IGxheWVyLnhcbiAgICBzdGFydFkgPSBsYXllci55XG4gXG4gICAgIyBBbmltYXRlIGJhY2sgb24gRHJhZ0VuZCBcbiAgICBsYXllci5vbiBFdmVudHMuRHJhZ0VuZCwgLT5cbiAgICAgICAgdGhpcy5hbmltYXRlXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOlxuICAgICAgICAgICAgICAgIHg6IHN0YXJ0WFxuICAgICAgICAgICAgICAgIHk6IHN0YXJ0WVxuICAgICAgICAgICAgY3VydmU6IFwic3ByaW5nKDMwMCwyMCwwKVwiXG4iXX0=
