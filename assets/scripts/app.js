class ToolTip {

}

class ProjectItem {

}

class ProjectList {
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
  }
}

class App {
  static init() { // en ves de llamarlo sobre una instancia lo llamamos directamente sobre la clase
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
  }
}

App.init();