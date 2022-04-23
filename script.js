// if( $(window).width() < 1220) {
//   var node = document.getElementById('avatar-in-box');
//   if (node.parentNode) {
//     node.parentNode.removeChild(node);
//   }
// };

document.body.onresize = function() {
  if (document.body.clientWidth < 1220) {
    var node = document.getElementById('avatar-in-box');
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
}

function entregas() {
  var countId = 1
  if (countId <= 6) {
    var tr = document.createElement('tr')
    // tentar criar algo que preencha usando um Arry
  }

}