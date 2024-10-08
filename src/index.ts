import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';
import { DataTableWidget } from './DataTableWidget';


function activate(app: JupyterFrontEnd, palette: ICommandPalette) {
  console.log('JupyterLab extension simplext2 is activated!');

  const newWidget = () => {
    // Create a blank content widget inside of a MainAreaWidget
    const content = new DataTableWidget();
    const widget = new MainAreaWidget({ content });
    widget.id = 'simplext2:widget';
    widget.title.label = 'Simplext 2 Label';
    widget.title.closable = true;
    return widget;
  }

  let widget = newWidget();

  // Add an application command
  const command: string = 'simplext2:open';
  app.commands.addCommand(command, {
    label: 'Open Simplext2',
    execute: () => {
      // Regenerate the widget if disposed
      if (widget.isDisposed) {
        widget = newWidget();
      }
      if (!widget.isAttached) {
        // Attach the widget to the main work area if it's not there
        app.shell.add(widget, 'main');
      }
      // Activate the widget
      app.shell.activateById(widget.id);
    }
  });

  // Add the command to the palette.
  palette.addItem({ command, category: 'Tutorial' });

}

/**
 * Initialization data for the simplext2 extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'simplext2:plugin',
  description: 'A JupyterLab extension for Python Package management.',
  autoStart: true,
  requires: [ICommandPalette],
  activate: activate
};

export default plugin;
