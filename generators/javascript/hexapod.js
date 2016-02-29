Blockly.JavaScript['hexapod_go'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'go' + dropdown_direction + '(' + value_distance + ');\n';
  return code;
};


Blockly.JavaScript['hexapod_turn'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var angle_angle = block.getFieldValue('angle');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turn' + dropdown_direction + '(' + angle_angle + ');\n';
  return code;
};

Blockly.JavaScript['hexapod_tilt'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'tilt' + dropdown_direction + '(' + value_duration + ');\n';
  return code;
};
