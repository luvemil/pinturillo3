import alt from '../alt';

class SketchActions {
  constructor() {
    this.generateActions(
      'updateItems',
      'updateTool',
      'updateSize',
      'updateColor',
      'updateFill',
      'updateFillColor'
    );
  }
}

export default alt.createActions(SketchActions);
