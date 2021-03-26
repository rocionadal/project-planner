import { ProjectList } from './App/ProjectList';

class App {
  static init() { // en ves de llamarlo sobre una instancia lo llamamos directamente sobre la clase
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
    activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList)); 
    finishedProjectList.setSwitchHandlerFunction(activeProjectList.addProject.bind(activeProjectList)); 
  }
}

App.init();