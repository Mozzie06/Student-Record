var classAndSections = {};

classAndSections['12th'] = ['A', 'B', 'C'];

classAndSections['11th'] = ['A', 'B'];

classAndSections['10th'] = ['A', 'B', 'C'];

classAndSections['9th'] = ['A', 'B', 'C', 'D'];

function ChangeClassList() {

  var classList = document.getElementById("class");

  var sectionList = document.getElementById("classSection");

  var selClass = classList.options[classList.selectedIndex].value;

  while (sectionList.options.length) {

    sectionList.remove(0);

  }

  var classes = classAndSections[selClass];

  if (classes) {

    var i;

    for (i = 0; i < classes.length; i++) {

      var clas = new Option(classes[i], i);

      sectionList.options.add(clas);

    }

  }

}
