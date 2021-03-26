import { Component } from './Component';

export class Tooltip extends Component {
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId); // if we want to attach the element afterbegin we need to pass an argument, default = at the end
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.closeTooltip = () => {
      this.detach();
      this.closeNotifier();
    };
    this.create();
  }

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    const tooltipTemplate = document.getElementById('tooltip');
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector('p').textContent = this.text;
    tooltipElement.append(tooltipBody);

    const hostElPosLeft = this.hostElementId.offsetLeft;
    const hostElPosTop = this.hostElementId.offsetTop;
    const hostElHeight = this.hostElementId.clientHeight;
    const parentElementScroll = this.hostElementId.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScroll - 10;

    tooltipElement.style.position = 'absolute';
    tooltipElement.style.left = x + 'px';
    tooltipElement.style.top = y + 'px';

    tooltipElement.addEventListener('click', this.closeTooltip);
    this.element = tooltipElement;
  }
}