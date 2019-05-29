var box = new Object();
box.color = 'red';
box.size = 10;
box.amount = 0;
box.fill = function() { this.amount += 2; };
box.consume = function() { this.amount -= 2};

box.fill();
document.write(box.amount+"<br>");
box.consume();
document.write(box.amount+"<br>");
