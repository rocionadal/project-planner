class ToolTip {

}

class ProjectItem {
  constructor(id,updateProjectListsFunction) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton();
  }

  connectMoreInfoButton() {}

  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn.addEventListener('click', this.updateProjectListsHandler);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this)));
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    console.log(this);
  }

  switchProject(projectId) {
    this.projects = this.projects.filter(p => p.id !== projectId);
    this.switchHandler(this.projects.find(p => p.id === projectId));
    // const ProjectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(ProjectIndex, 1);
 }
}

class App {
  static init() { // en ves de llamarlo sobre una instancia lo llamamos directamente sobre la clase
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
    activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList)); 
    finishedProjectList.setSwitchHandlerFunction(activeProjectList.addProject.bind(activeProjectList)); 
  }
}

App.init();