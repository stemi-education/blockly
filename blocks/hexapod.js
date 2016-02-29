Blockly.Blocks['hexapod_go'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("go");
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["Forward", "Forward"], ["Back", "Back"]]), "direction");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['hexapod_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Left", "Left"], ["Right", "Right"]]), "direction")
        .appendField(new Blockly.FieldAngle(90), "angle");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['hexapod_tilt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tilt");
    this.appendValueInput("duration")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["Left", "Left"], ["Right", "Right"],
        ["Forward", "Forward"], ["Back", "Back"]]), "direction");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
