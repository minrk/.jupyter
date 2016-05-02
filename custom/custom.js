require(['notebook/js/cell', 'codemirror/keymap/sublime'], function (cell) {
  cell.Cell.options_default.cm_config.keyMap = 'sublime';
});

// autosave every 30 seconds;
require(['base/js/namespace', 'base/js/events', 'base/js/utils'], function (Jupyter, events, utils) {
  console.log("requiring");
  function onload () {
    Jupyter.notebook.default_cell_type = 'above';
    Jupyter.notebook.minimum_autosave_interval = 30000;
    //
    // Jupyter.keyboard_manager.command_shortcuts.add_shortcut(
    //   '.', 'jupyter-notebook:toggle-cell-marked');
    
    // I have special CSS that only applies to the notebook
    $('body').addClass('notebook-body');
  
    $('#cell_type').hide();
    // $('#ctb_select').hide().prev().hide();
    // hide celltoobar button
    $('button[title*=celltoolbar]').parent().hide();
    // hide cell toolbar and cell type select, I never use it
    // when doing presentations, I hide the header and toolbar
    // $("#toggle_header").click();
    // $("#toggle_toolbar").click();

    // autoscroll is my greatest shame:
    Jupyter.OutputArea.auto_scroll_threshold = 0;
};
  if (Jupyter.notebook) {
    onload();
  } else {
    events.on("notebook_loaded.Notebook", onload);
  }
});
