import alt from '../alt';
import SketchActions from '../actions/SketchActions';
import { TOOL_PENCIL, TOOL_LINE, TOOL_RECTANGLE, TOOL_ELLIPSE } from '../../node_modules/react-sketchpad/lib/index';

class SketchStore {
  constructor() {
    this.bindActions(SketchActions);

    this.tool=TOOL_PENCIL;
    this.size= 2;
    this.color= '#000000';
    this.fill= false;
    this.fillColor= '#444444';
    this.items= [];
  }
  onUpdateItems(item) {
    this.items = this.items.concat([item]);
  }

  onUpdateTool(data) {
    this.tool = data.tool;
  }

  onUpdateSize(data) {
    this.size = data.size;
  }

  onUpdateColor(data) {
    this.color = data.color;
  }

  onUpdateFill(data) {
    this.fill = data.fill;
  }

  onUpdateFillColor(data) {
    this.fillColor = data.fillColor;
  }
}

export default alt.createStore(SketchStore);
